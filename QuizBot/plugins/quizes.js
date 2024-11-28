const bot = require("../index");
const { addQuiz, getQuiz, deleteQuiz, getAllQuizNames } = require("../core/mongo/quizesdb");


// --------------- Multi Quiz Function ----------------- //

function parseQuizData(data) {
    const lines = data.split('\n');
    const questions = [];
    let currentQuestion = {};

    lines.forEach((line) => {
        line = line.trim();

        if (line.startsWith('Question:')) {
            if (Object.keys(currentQuestion).length > 0) {
                questions.push(currentQuestion);
            }
            currentQuestion = {
                question: line.replace('Question:', '').trim(),
                options: {},
                correctAnswer: null,
                explanation: "No explanation",
            };
        } else if (/^[A-D]:/.test(line)) {
            const optionKey = line[0];
            const optionText = line.slice(2).trim();
            currentQuestion.options[optionKey] = optionText;
        } else if (line.startsWith('Answer:')) {
            const answer = line.replace('Answer:', '').trim();
            if (!/^\d+$/.test(answer)) {
                throw new Error("Give me answer in integer");
            }
            currentQuestion.correctAnswer = parseInt(answer, 10);
        } else if (line.startsWith('Explanation:')) {
            currentQuestion.explanation = line.replace('Explanation:', '').trim();
        }
    });

    if (Object.keys(currentQuestion).length > 0) {
        questions.push(currentQuestion);
    }

    return questions;
}


// --------------- Multi Quiz ----------------- //

bot.command('addquiz', async (ctx) => {
    const message = ctx.message.reply_to_message;
    if (!message || !message.document) {
        return ctx.reply("Please reply to a file containing the quiz data with the /addquiz command.");
    }

    try {
        const processingMessage = await ctx.reply("Processing...");
        const fileId = message.document.file_id;
        const fileLink = await ctx.telegram.getFileLink(fileId);
        const response = await fetch(fileLink);
        const fileContent = await response.text();
        const questions = parseQuizData(fileContent);

        const totalQuizzes = questions.length;
        const result = JSON.stringify(questions, null, 2);
        const user_id = ctx.message.from.id
        await addQuiz(user_id, result)

        await ctx.telegram.editMessageText(
            processingMessage.chat.id,
            processingMessage.message_id,
            null,
            `🎉 Quiz Data Saved Successfully:\nTotal Quizzes: ${totalQuizzes}`
        );
    } catch (error) {
        console.error("Error processing the file:", error);
        ctx.reply("Failed to process the file. Please ensure it's correctly formatted. " + (error.message || ""));
    }
});


// --------------- Remove Quiz -------------- //

bot.command("/removequiz", async (ctx) => {
    try {
        const user_id = ctx.from.id;
        const args = ctx.message.text.split(" ");
        const name = args.slice(1).join(" "); // Extract quiz name after command

        if (!name) {
            return ctx.reply("Please provide the quiz name. Usage: /removequiz <quiz_name>");
        }

        await ctx.reply(`Are you sure you want to delete the quiz "${name}"?`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Yes", callback_data: `removequiz_yes:${user_id}:${name}` },
                        { text: "No", callback_data: `removequiz_no:${user_id}` }
                    ]
                ]
            }
        });
    } catch (error) {
        console.error(error);
        ctx.reply("An error occurred while processing your request.");
    }
});

bot.action(/^removequiz_yes:(\d+):(.+)/, async (ctx) => {
    const [initiating_user_id, quizName] = ctx.match.slice(1);

    if (ctx.from.id.toString() !== initiating_user_id) {
        return ctx.answerCbQuery("This action is not for you.", { show_alert: true });
    }

    const success = await deleteQuiz(initiating_user_id, quizName);
    await ctx.answerCbQuery("Successfully Deleted...");

    if (success) {
        await ctx.editMessageText(`The quiz "${quizName}" has been deleted.`);
    } else {
        await ctx.editMessageText(`Failed to delete the quiz "${quizName}". Please try again.`);
    }
});

bot.action(/^removequiz_no:(\d+)/, async (ctx) => {
    const initiating_user_id = ctx.match[1];

    if (ctx.from.id.toString() !== initiating_user_id) {
        return ctx.answerCbQuery("This action is not for you.", { show_alert: true });
    }

    await ctx.answerCbQuery("Quiz Deletion Canceld.");
    await ctx.editMessageText("Successfully Quiz deletion canceled.");
    
});






