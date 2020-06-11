console.log("Hello World!");

var startQuizEl = document.getElementById("startquiz");
var timerEl = document.getElementById("timer");
var frontPageEl = document.getElementById("front-page");
var quizPageEl = document.getElementById("quiz-page");
var questionEl = document.getElementById("question");
var answersEl = document.getElementsByClassName("answers");

var currentQuestionIndex = 0;

var arrayOfQuestions = [
  "Commonly used types of date DO NOT include:",
  "The condition in an if/else statement is enclosed within _____.",
  "Arrays in Javascript can be used to store _____.",
  "String values must be enclosed within _____ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];

var currentAnswerIndex = 0;

var arrayOfAnswers = [
  "strings",
  "booleans",
  "alerts",
  "numbers",
  "quotes",
  "curly brackets",
  "parentheses",
  "square brackets",
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above",
  "commas",
  "curly brackets",
  "quotes",
  "parentheses",
  "JavaScript",
  "terminal/bash",
  "for loops",
  "console.log",
];

secondsLeft = 75;

function startTimer() {
  startQuizEl.addEventListener("click", function () {
    frontPageEl.style.display = "none";
    quizPageEl.style.display = "block";
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = "Time: " + secondsLeft;
    }, 1000);
  });
}

startQuizEl.addEventListener("click", startTimer);
