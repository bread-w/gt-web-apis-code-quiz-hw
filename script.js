console.log("Hello World!");

var startQuizEl = document.getElementById("startquiz");
var timerEl = document.getElementById("timer");
var frontPageEl = document.getElementById("front-page");
var quizPageEl = document.getElementById("quiz-page");

var currentQuestionIndex = 0;

var arrayOfQuestions = [
  "Commonly used types of date DO NOT include:",
  "The condition in an if/else statement is enclosed within _____.",
  "Arrays in Javascript can be used to store _____.",
  "String values must be enclosed within _____ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];

var currentFirstAnswerIndex = 0;

var arrayofFirstAnswers = [];

secondsLeft = 75;

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
  }, 1000);
}

function quizStart() {
    if (frontPageEl.style.display === "block") {
        frontPageEl.style.display = "none";
    } if (quizPageEl.style.display === "none") {
        quizPageEl.style.display = "block";
    }
}

startQuizEl.addEventListener("click", startTimer);
startQuizEl.addEventListener("click", quizStart);