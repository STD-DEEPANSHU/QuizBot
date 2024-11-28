const bot = require("../index");
const fs = require("fs");
const { getQuiz, getAllQuizNames, deleteAllQuizzes } = require("../core/mongo/quizesdb");



// ------------------ Buttons ------------------ //
const removeAllMarkup = {
  inline_keyboard: [
    [
      { text: "Remove All Quizzes", callback_data: "remove_all_quizzes" }
    ]
  ]
};

// ---------------- My Quiz Command ---------------- //
bot.command("myquiz", async (ctx) => {
  const user_id = ctx.message.from.id;
  const allquizNames = await getAllQuizNames(user_id);

  if (!allquizNames || allquizNames.length === 0) {
    ctx.reply('Quiz not found.');
    return;
  }

  let NameText = 'Here are all your Quiz Names:\n\n';
  const botName = ctx.botInfo.username;

  allquizNames.forEach((name, index) => {
    NameText += `<b>Quiz ${index + 1} : ${name}</b>\nhttps://t.me/${botName}?start=QuizName_${name}\n\n`;
  });

  await ctx.replyWithHTML(NameText, {
    reply_markup: removeAllMarkup 
  });
});


// ------------- Actions -------------- //
bot.action('remove_all_quizzes', async (ctx) => {
  const user_id = ctx.from.id;
  await deleteAllQuizzes(user_id);  
  await ctx.answerCbQuery('All quizzes have been removed.');
  await ctx.editMessageText('All quizzes have been removed successfully!');
});




// ------------- Poll Uploader ---------------- //

const userResponses = {};
const activeQuizzes = {};
const completedQuizzes = {};

async function pollUploader(ctx, user_id, quizName) {
  try {
    const quizDataRaw = await getQuiz(user_id, quizName);
    const quizData = typeof quizDataRaw === "string" ? JSON.parse(quizDataRaw) : quizDataRaw;

    await ctx.replyWithHTML(
      `📝 <b>Quiz Started:</b> <b>${quizName}</b>\nTotal Questions: ${quizData.length}\nGet ready! 🎯`
    );

    activeQuizzes[user_id] = quizData;
    completedQuizzes[user_id] = { total: quizData.length, answered: 0 };

    for (const quiz of quizData) {
      const { question, options, correctAnswer, explanation } = quiz;
      const pollOptions = Object.values(options).map(String);

      const pollMessage = await bot.telegram.sendPoll(ctx.chat.id, question, pollOptions, {
        type: "quiz",
        correct_option_id: parseInt(correctAnswer, 10),
        explanation,
        is_anonymous: false,
      });

      quiz.poll_id = pollMessage.poll.id;
      quiz.correctAnswer = parseInt(correctAnswer, 10);

      await new Promise((resolve) => setTimeout(resolve, 15000));
    }
  } catch (error) {
    console.error("Error uploading polls:", error);
    ctx.reply("An error occurred while uploading the quiz.");
  }
}

bot.on("poll_answer", (ctx) => {
  const { user, poll_id, option_ids } = ctx.pollAnswer;
  const userId = user.id;
  const userName = user.first_name;

  const activeQuiz = Object.values(activeQuizzes)
    .flat()
    .find((quiz) => quiz.poll_id === poll_id);

  if (activeQuiz) {
    const correctOption = activeQuiz.correctAnswer;
    const userAnswer = option_ids[0];

    if (!userResponses[userId]) {
      userResponses[userId] = { name: userName, correct: 0, wrong: 0 };
    }

    if (userAnswer === correctOption) {
      userResponses[userId].correct += 1;
    } else {
      userResponses[userId].wrong += 1;
    }

    completedQuizzes[userId].answered += 1;

    if (completedQuizzes[userId].answered === completedQuizzes[userId].total) {
      displayResults(ctx, userId, Object.keys(activeQuizzes).find(key => activeQuizzes[key] === activeQuiz));
      delete activeQuizzes[userId];
      delete completedQuizzes[userId];
    }
  }
});

async function displayResults(ctx, userId, quizName) {
  const userResult = userResponses[userId];
  const resultsMessage = `🎉 <b>Quiz Completed: ${quizName}</b>\n\n👤 Participant: <b>${userResult.name}</b>\n✅ Correct: ${userResult.correct}\n❌ Wrong: ${userResult.wrong}\n\n🎯 <b>Thank you for participating!</b> 🥳`;

  if (resultsMessage.length > 4096) {
    const filePath = "/mnt/data/quiz_results.txt";
    fs.writeFileSync(filePath, resultsMessage);
    await ctx.replyWithDocument({ source: filePath, filename: "quiz_results.txt" });
    fs.unlinkSync(filePath);
  } else {
    await ctx.replyWithHTML(resultsMessage);
  }
}










module.exports = { pollUploader };


