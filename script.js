console.log("Hello World!");

var startQuizEl = document.getElementById("startquiz");
var timerEl = document.getElementById("timer");
var frontPageEl = document.getElementById("front-page");
var quizPageEl = document.getElementById("quiz-page");
var questionEl = document.getElementById("question");
var answersEl = document.getElementsByClassName("answers");
var scorePageEl = document.getElementById("score-page");
var resultsPageEl = document.getElementById("results-page");
var resultDisplayEl = document.getElementById("result-display");
var highScorePageEl = document.getElementById("highscore-page");
var highScoreStorage = document.getElementById("highscore-storage");
var finalScoreEl = document.getElementById("final-score");
var submitScoreEl = document.getElementById("submit-score");
var initialsEl = document.getElementById("initials");
var restartQuizEl = document.getElementById("restart-quiz");
var clearScoresEl = document.getElementById("clear-scores");
var highScoreBank = [];
var secondsLeft = 75;
var timerInterval;

var currentQuestionsIndex = 0;

var questions = [
  {
    question: "Commonly used types of data DO NOT include:",
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
    correct_answer: "3. quotes",
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

function startTimer() {
  frontPageEl.style.display = "none";
  quizPageEl.style.display = "block";
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
  }, 1000);
  showQuestions();
}

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
    answerBtn.addEventListener("click", getResult);
  }
}

function getResult(e) {
  console.log(e);
  checkResult(e.target.textContent);
  document.getElementById("question").innerHTML = "";
  document.querySelector(".answers-ul").innerHTML = "";
  currentQuestionsIndex++;
  if (currentQuestionsIndex === questions.length || secondsLeft < 0) {
    quizPageEl.style.display = "none";
    resultsPageEl.style.display = "none";
    scorePageEl.style.display = "block";
    finalScoreEl.innerHTML = "Your final score is " + secondsLeft + ".";
    clearInterval(timerInterval);
  } else {
    showQuestions();
  }
}

function checkResult(result) {
  if (result === questions[currentQuestionsIndex].correct_answer) {
    resultDisplayEl.textContent = "Correct!";
  } else {
    resultDisplayEl.textContent = "Incorrect!";
    secondsLeft -= 15;
  }
}

startQuizEl.addEventListener("click", startTimer);

submitScoreEl.addEventListener("click", function (e) {
  event.preventDefault();
  console.log(initialsEl);
  if (event.target.matches("#submit-score")) {
    highScoreBank.push({ initials: initialsEl.value, score: secondsLeft });
    console.log(highScoreBank);
    localStorage.setItem("highScore", JSON.stringify(highScoreBank));
    submitScoreEl.innerHTML = "";
    showHighScores();
  }
});
function showHighScores() {
  scorePageEl.style.display = "none";
  highScorePageEl.style.display = "block";
  var highScore = JSON.parse(localStorage.getItem("highScore"));

  for (var i = 0; i < highScore.length; i++) {
    var leaderBoard = document.createElement("li");
    document.getElementById("highscore-storage").append(leaderBoard);
    leaderBoard.setAttribute("class", "leaderBoards");
    leaderBoard.textContent =
      highScore[i].initials + " scored " + highScore[i].score + " points!";
    highScoreStorage.append(leaderBoard);
  }
}

restartQuizEl.addEventListener("click", function(e) {
event.preventDefault();
if (event.target.matches("#restart-quiz")) {
  location.reload();
}
});

restartQuizEl.addEventListener("click", function(e) {
  if (event.target.matches("#restart-quiz")) {
    location.reload();
  }
  });

  clearScoresEl.addEventListener("click", function(e){
    if (event.target.matches("#clear-scores")) {
      window.localStorage.clear();
       }highScoreStorage.innerHTML = "";
  })
