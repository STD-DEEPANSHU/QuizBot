
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

→ <code>/addquiz</code> : Send a file with the quizzes, reply with this command, and multiple quizzes will be created.
→ <code>/myquiz</code> : View all the quizzes you have created.
→ <code>/stats</code> : Check user and chat statistics using this command.
→ <code>/broadcast</code> : Broadcast messages to all users or chats using this command.
`,
  "Hindi": `<b>🧰 क्विज़ टूल्स</b>

यहां सभी कमांड दिए गए हैं जो क्विज़ बॉट से संबंधित हैं:

→ <code>/addquiz</code> : क्विज़ के साथ एक फ़ाइल भेजें, इस कमांड का उत्तर दें, और कई क्विज़ बनाए जाएंगे।
→ <code>/myquiz</code> : आपने जो भी क्विज़ बनाए हैं उन्हें देखें।
→ <code>/stats</code> : इस कमांड का उपयोग करके उपयोगकर्ता और चैट आँकड़े जांचें।
→ <code>/broadcast</code> : सभी उपयोगकर्ताओं या चैट्स को संदेश प्रसारित करें।
`,
  "Chinese": `<b>🧰 测验工具</b>

以下是与测验机器人相关的所有命令：

→ <code>/addquiz</code> : 发送包含测验的文件，回复此命令，将创建多个测验。
→ <code>/myquiz</code> : 查看您创建的所有测验。
→ <code>/stats</code> : 使用此命令检查用户和聊天统计数据。
→ <code>/broadcast</code> : 使用此命令向所有用户或聊天广播消息。
`,
  "Russian": `<b>🧰 Инструменты для викторин</b>

Вот все команды, связанные с викторинным ботом:

→ <code>/addquiz</code> : Отправьте файл с викторинами, ответьте этой командой, и будет создано несколько викторин.
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
To create a quiz, provide the data in the specified format, save it in a file, and reply with the file using the /addquiz command.

<pre>Quiz Format:</pre>
<pre>
Question: Question text
A: Option 1
B: Option 2
C: Option 3
D: Option 4
Answer:(Option number)
Explanation: (optional)
</pre>

<pre>Example:</pre>
<pre>
Question: What is the capital of France?
A: Berlin
B: Madrid
C: Paris
D: Rome
Answer: 3
Explanation: Paris is the capital and largest city of France. It is famous for landmarks like the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral.
</pre>

→ View Your Quizzes  
To see all your created quizzes, use the /myquiz command. You’ll get a list of your quizzes, and you can start any one of them!
`,

  "Hindi": `
🛠️ <b>मेरे बारे में</b>

मैं Quiz Bot हूँ, जो आपकी क्विज़ को आसानी से बनाने और व्यवस्थित करने में मदद करता हूँ। बस अपने प्रश्न जोड़ें और उन्हें मज़ेदार, इंटरैक्टिव क्विज़ में बदल दें!

📝 <b>मुझे कैसे उपयोग करें</b>

→ एक क्विज़ बनाएं  
क्विज़ बनाने के लिए, निर्दिष्ट प्रारूप में डेटा प्रदान करें, इसे एक फ़ाइल में सहेजें, और /addquiz कमांड का उपयोग करके फ़ाइल के साथ उत्तर दें।

<pre>क्विज़ प्रारूप:</pre>
<pre>
Question: प्रश्न का पाठ
A: विकल्प 1
B: विकल्प 2
C: विकल्प 3
D: विकल्प 4
Answer:(विकल्प संख्या)
Explanation: (वैकल्पिक)
</pre>

<pre>उदाहरण:</pre>
<pre>
Question: फ्रांस की राजधानी क्या है?
A: बर्लिन
B: मैड्रिड
C: पेरिस
D: रोम
Answer: 3
Explanation: पेरिस फ्रांस की राजधानी और सबसे बड़ा शहर है। यह एफिल टॉवर, लौवर संग्रहालय और नोट्रे-डेम कैथेड्रल जैसे स्थलों के लिए प्रसिद्ध है।
</pre>

→ अपनी क्विज़ देखें  
अपनी बनाई गई सभी क्विज़ देखने के लिए, /myquiz कमांड का उपयोग करें। आपको अपनी क्विज़ की सूची मिलेगी और आप उनमें से किसी एक को शुरू कर सकते हैं!
`,

  "Chinese": `
🛠️ <b>关于我</b>

我是Quiz Bot，可以帮助您轻松创建和组织测验。只需添加您的问题，我们就可以将它们变成有趣、互动的测验！

📝 <b>如何使用我</b>

→ 创建测验  
要创建测验，请按照指定格式提供数据，保存为文件，并使用 /addquiz 命令回复该文件。

<pre>测验格式:</pre>
<pre>
Question: 问题文本
A: 选项 1
B: 选项 2
C: 选项 3
D: 选项 4
Answer:(选项编号)
Explanation: (可选)
</pre>

<pre>示例:</pre>
<pre>
Question: 法国的首都是哪里？
A: 柏林
B: 马德里
C: 巴黎
D: 罗马
Answer: 3
Explanation: 巴黎是法国的首都和最大城市。以埃菲尔铁塔、卢浮宫和巴黎圣母院等地标闻名。
</pre>

→ 查看您的测验  
要查看您创建的所有测验，请使用 /myquiz 命令。您将获得测验列表，可以开始其中的任何一个！
`,

  "Russian": `
🛠️ <b>Обо мне</b>

Я Quiz Bot, помогу вам легко создавать и организовывать ваши викторины. Просто добавьте свои вопросы, и мы превратим их в веселые и интерактивные викторины!

📝 <b>Как меня использовать</b>

→ Создать викторину  
Чтобы создать викторину, предоставьте данные в указанном формате, сохраните их в файл и отправьте файл с помощью команды /addquiz.

<pre>Формат викторины:</pre>
<pre>
Question: Текст вопроса
A: Вариант 1
B: Вариант 2
C: Вариант 3
D: Вариант 4
Answer:(Номер варианта)
Explanation: (необязательно)
</pre>

<pre>Пример:</pre>
<pre>
Question: Какова столица Франции?
A: Берлин
B: Мадрид
C: Париж
D: Рим
Answer: 3
Explanation: Париж — это столица и крупнейший город Франции. Он знаменит такими достопримечательностями, как Эйфелева башня, Лувр и собор Парижской Богоматери.
</pre>

→ Посмотреть свои викторины  
Чтобы увидеть все созданные викторины, используйте команду /myquiz. Вы получите список викторин и сможете запустить любую из них!
`
};


// ---------------- Export All ---------------- //

module.exports = {
  START_TEXT,
  TOOLS_TEXT,
  ABOUT_TEXT
};





