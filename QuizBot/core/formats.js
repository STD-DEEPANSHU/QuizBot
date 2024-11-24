
// ---------------- Start Text ---------------- //

const START_TEXT = {
  "English": "Hello, {},\n\nWelcome to QuizBot! I'm here to help you create and organize quizzes effortlessly. Just save your questions, and let's turn them into interactive quizzes!",
  "Hindi": "नमस्ते, {},\n\nQuizBot में आपका स्वागत है! मैं आपकी मदद करने के लिए यहां हूं ताकि आप आसानी से क्विज बना और आयोजित कर सकें। बस अपने प्रश्नों को सहेजें, और आइए उन्हें इंटरएक्टिव क्विज़ में बदलें!",
  "Chinese": "你好, {},\n\n欢迎来到 QuizBot！我在这里帮助您轻松创建和组织测验。只需保存您的问题，让我们将它们变成互动测验！",
  "Russian": "Здравствуйте, {},\n\nДобро пожаловать в QuizBot! Я здесь, чтобы помочь вам легко создавать и организовывать викторины. Просто сохраните свои вопросы, и давайте превратим их в интерактивные викторины!"
};


// ---------------- Tools Text ---------------- //

const TOOLS_TEXT = {
  "English": `<b>🧰 Quiz Tools</b>

Here are all the commands related to the Quiz bot:

→ <code>/addquiz</code> : Add quizzes one by one.
→ <code>/multiquiz</code> : Send a file with the quizzes, reply with this command, and multiple quizzes will be created.
→ <code>/myquiz</code> : View all the quizzes you have created.
→ <code>/stats</code> : Check user and chat statistics using this command.
→ <code>/broadcast</code> : Broadcast messages to all users or chats using this command.
`,
  "Hindi": `<b>🧰 क्विज़ टूल्स</b>

यहां सभी कमांड दिए गए हैं जो क्विज़ बॉट से संबंधित हैं:

→ <code>/addquiz</code> : एक-एक करके क्विज़ जोड़ें।
→ <code>/multiquiz</code> : क्विज़ के साथ एक फ़ाइल भेजें, इस कमांड का उत्तर दें, और कई क्विज़ बनाए जाएंगे।
→ <code>/myquiz</code> : आपने जो भी क्विज़ बनाए हैं उन्हें देखें।
→ <code>/stats</code> : इस कमांड का उपयोग करके उपयोगकर्ता और चैट आँकड़े जांचें।
→ <code>/broadcast</code> : सभी उपयोगकर्ताओं या चैट्स को संदेश प्रसारित करें।
`,
  "Chinese": `<b>🧰 测验工具</b>

以下是与测验机器人相关的所有命令：

→ <code>/addquiz</code> : 一次添加一个测验。
→ <code>/multiquiz</code> : 发送包含测验的文件，回复此命令，将创建多个测验。
→ <code>/myquiz</code> : 查看您创建的所有测验。
→ <code>/stats</code> : 使用此命令检查用户和聊天统计数据。

→ <code>/broadcast</code> : 使用此命令向所有用户或聊天广播消息。
`,
  "Russian": `<b>🧰 Инструменты для викторин</b>

Вот все команды, связанные с викторинным ботом:

→ <code>/addquiz</code> : Добавляйте викторины по одной.
→ <code>/multiquiz</code> : Отправьте файл с викторинами, ответьте этой командой, и будет создано несколько викторин.
→ <code>/myquiz</code> : Просмотрите все викторины, которые вы создали.
→ <code>/stats</code> : Используйте эту команду, чтобы проверить статистику пользователей и чатов.
→ <code>/broadcast</code> : Рассылайте сообщения всем пользователям или чатам с помощью этой команды.
`
};


// ---------------- About Text ---------------- //

const ABOUT_TEXT = {
  "English": `
🛠️ <b>About Me</b>

I am Quiz Bot, here to help you easily create and organize your quizzes. Just add your questions, and let's turn them into fun, interactive quizzes!

📝 <b>How To Use Me</b>

→ Create a Quiz  
To create your quiz, simply use the /addquiz command and follow the format below:

<pre>Quiz Format:</pre>
<pre>/addquiz
Question text
A. Option 1
B. Option 2
C. Option 3
D. Option 4
Correct Answer (Option number)
Explanation (optional)</pre>

<pre>Example:</pre>
<pre>/addquiz
What is the capital of France?
A. Berlin
B. Madrid
C. Paris
D. Rome
3
Paris is the capital and largest city of France. It is famous for landmarks like the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral.</pre>

→ View Your Quizzes  
To see all your created quizzes, use the /myquiz command. You’ll get a list of your quizzes, and you can start any one of them!
`,

  "Hindi": `
🛠️ <b>मेरे बारे में</b>

मैं Quiz Bot हूं, जो आपको आसानी से क्विज़ बनाने और व्यवस्थित करने में मदद करता हूं। बस अपने सवाल जोड़ें, और आइए उन्हें मजेदार, इंटरएक्टिव क्विज़ में बदलते हैं!

📝 <b>मुझसे कैसे इस्तेमाल करें</b>

→ एक क्विज़ बनाएं  
क्विज़ बनाने के लिए, बस /addquiz कमांड का उपयोग करें और नीचे दिए गए प्रारूप का पालन करें:

<pre>क्विज़ प्रारूप:</pre>
<pre>/addquiz
सवाल का पाठ
A. विकल्प 1
B. विकल्प 2
C. विकल्प 3
D. विकल्प 4
सही उत्तर (विकल्प संख्या)
व्याख्या (वैकल्पिक)</pre>

<pre>उदाहरण:</pre>
<pre>/addquiz
फ्रांस की राजधानी क्या है?
A. बर्लिन
B. मैड्रिड
C. पेरिस
D. रोम
3
पेरिस फ्रांस की राजधानी और सबसे बड़ा शहर है। यह ईफ़िल टॉवर, लूव्र म्यूज़ियम और नॉट्रे-डेम कैथेड्रल जैसी स्मारकों के लिए प्रसिद्ध है।</pre>

→ अपने क्विज़ देखें  
अपने बनाए गए सभी क्विज़ देखने के लिए, /myquiz कमांड का उपयोग करें। आपको आपके सभी क्विज़ की सूची मिल जाएगी, और आप इनमें से किसी भी क्विज़ को शुरू कर सकते हैं!
`,

  "Chinese": `
🛠️ <b>关于我</b>

我是Quiz Bot，旨在帮助您轻松创建和组织您的测验。只需添加您的问题，我们就能将它们转化为有趣的互动测验！

📝 <b>如何使用我</b>

→ 创建测验  
要创建测验，只需使用 /addquiz 命令并遵循以下格式：

<pre>测验格式：</pre>
<pre>/addquiz
问题文本
A. 选项 1
B. 选项 2
C. 选项 3
D. 选项 4
正确答案（选项编号）
解释（可选）</pre>

<pre>示例：</pre>
<pre>/addquiz
法国的首都是什么？
A. 柏林
B. 马德里
C. 巴黎
D. 罗马
3
巴黎是法国的首都和最大城市，因埃菲尔铁塔、卢浮宫博物馆和巴黎圣母院等地标而闻名。</pre>

→ 查看您的测验  
要查看您创建的所有测验，请使用 /myquiz 命令。您将看到所有测验的列表，您可以开始任何一个！
`,

  "Russian": `
🛠️ <b>Обо мне</b>

Я Quiz Bot, и я помогу вам легко создавать и организовывать ваши викторины. Просто добавьте свои вопросы, и давайте превращать их в увлекательные интерактивные викторины!

📝 <b>Как использовать меня</b>

→ Создайте викторину  
Чтобы создать викторину, просто используйте команду /addquiz и следуйте приведенному ниже формату:

<pre>Формат викторины:</pre>
<pre>/addquiz
Текст вопроса
A. Вариант 1
B. Вариант 2
C. Вариант 3
D. Вариант 4
Правильный ответ (номер варианта)
Объяснение (необязательно)</pre>

<pre>Пример:</pre>
<pre>/addquiz
Какая столица Франции?
A. Берлин
B. Мадрид
C. Париж
D. Рим
3
Париж — столица и крупнейший город Франции. Он знаменит такими памятниками, как Эйфелева башня, Лувр и собор Парижской Богоматери.</pre>

→ Просмотр ваших викторин  
Чтобы увидеть все созданные вами викторины, используйте команду /myquiz. Вы получите список всех ваших викторин, и сможете начать любую из них!
`
};



// ---------------- Export All ---------------- //

module.exports = {
  START_TEXT,
  TOOLS_TEXT,
  ABOUT_TEXT
};





