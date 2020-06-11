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
    answers: ["1. string", "2. booleans", "3. alerts", "4. numbers"],
    correct_answer: "3. alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correct_answer: "2. curly brackets",
  },
  {
    question: "Arrays in Javascript can be used to store _____.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correct_answer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correct_answer: "1. commas",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger",
    answers: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correct_answer: "4. console.log",
  },
];

function showQuestions() {
  var currentQuestionPage = questions[currentQuestionsIndex];
  console.log(questions[currentQuestionsIndex].question);
  console.log(questions[currentQuestionsIndex].answers);
  questionEl.textContent = questions[currentQuestionsIndex].question;
  for (var i = 0; i < currentQuestionPage.answers.length; i++) {
    var answerList = document.createElement("li");
    document.querySelector(".answers-ul").append(answerList);
    var answerBtn = document.createElement("button");
    answerList.append(answerBtn);
    answerBtn.setAttribute("class", "btn btn-secondary");
    answerBtn.textContent = currentQuestionPage.answers[i];
  }
}

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
