console.log("Hello World!")

var startQuizEl = document.getElementById("startquiz");
var timerEl = document.getElementById("timer");


var currentQuestionIndex = 0;

var arrayOfQuestions = [];

var currentAnswerIndex = 0;

var arrayofAnswers = [];

secondsLeft = 75;

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
    }, 1000);
}

startQuizEl.addEventListener("click", startTimer);