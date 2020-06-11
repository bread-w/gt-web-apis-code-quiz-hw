console.log("Hello World!");

var startQuizEl = document.getElementById("startquiz");
var timerEl = document.getElementById("timer");
var frontPageEl = document.getElementById("front-page");
var quizPageEl = document.getElementById("quiz-page");
var questionEl = document.getElementById("question");
var answersEl = document.getElementsByClassName("answers");

var currentQuestionsIndex = 0;


var questions = [
  {
    question: "Commonly used types of date DO NOT include:",
    answers: ["1. string", "2. booleans","3. alerts","4. numbers"],
    correct_answer: "3. alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correct_answer: "2. curly brackets",
  }
]


function showQuestions() {
  console.log(questions[currentQuestionsIndex].question);
  console.log(questions[currentQuestionsIndex].answers);
questionEl.textContent = questions[currentQuestionsIndex].question;
for (var i = 0; i < questions[currentQuestionsIndex].answers.length; i++) {
  // createElement for each answer
  var answerList = document.createElement("li");
  // set li class to button (secondary button)
  answerList.setAttribute("class", "democlass");
  // Attach the text content to each element you create
  // Append each new element to the answers ul
}
}

// var questions = [
//   {
//     question:
//       "Commonly used types of date DO NOT include:\n1. strings \n2. booleans\n3. alerts\n4. numbers",
//   },
//   {
//     question:
//       "The condition in an if/else statement is enclosed within _____.\n1. quotes\n2. curly brackets\n3. parentheses\n4. square brackets",
//   },
//   {
//     question:
//       "Arrays in Javascript can be used to store _____.\n1. numbers and strings\n2. other arrays\n3. booleans\n4. all of the above",
//   },
//   {
//     question:
//       "String values must be enclosed within _____ when being assigned to variables.\n1. commas\n2. curly brackets\n3. quotes\n4. parentheses",
//   },
//   {
//     question:
//       "A very useful tool used during development and debugging for printing content to the debugger is:\n1. JavaScript\n2. terminal/bash\n3. for loops\n4. console.log",
//   },
// ];

// var currentQuestionIndex = 0;

// var arrayOfQuestions = [
//   "Commonly used types of date DO NOT include:",
//   "The condition in an if/else statement is enclosed within _____.",
//   "Arrays in Javascript can be used to store _____.",
//   "String values must be enclosed within _____ when being assigned to variables.",
//   "A very useful tool used during development and debugging for printing content to the debugger is:",
// ];

// var currentAnswerIndex = 0;

// var arrayOfAnswers = [
//   "strings",
//   "booleans",
//   "alerts",
//   "numbers",
//   "quotes",
//   "curly brackets",
//   "parentheses",
//   "square brackets",
//   "numbers and strings",
//   "other arrays",
//   "booleans",
//   "all of the above",
//   "commas",
//   "curly brackets",
//   "quotes",
//   "parentheses",
//   "JavaScript",
//   "terminal/bash",
//   "for loops",
//   "console.log",
// ];

secondsLeft = 75;

function startTimer() {
    frontPageEl.style.display = "none";
    quizPageEl.style.display = "block";
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = "Time: " + secondsLeft;
    }, 1000);
    showQuestions();
}

startQuizEl.addEventListener("click", startTimer);

