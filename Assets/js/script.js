// Qs source: https://www.proprofs.com/quiz-school/story.php?title=compro_12zi (with edits for accuracy and clarity)
// Array containing questions
const quizQuestions = [
  {
      question: "HTML stands for HyperText __________ Language.",
      options: ["Market", "Marker", "Markup", "Marking"],
      answer: "Markup"
  }, {
      question: "Texts that are enclosed on a <title> tag are all displayed in which part of the browser?",
      options: ["Title Bar", "Tab", "Menu Bar", "Tool Bar"],
      answer: "Title Bar"
  }, {
      question: "These are the basic units or building blocks of an HTML file.",
      options: ["Tag", "HTTP", "Value", "Attribute"],
      answer: "Tag"
  }, {
      question: "Tags that cannot stand alone are called…",
      options: ["Empty Tag", "Markup Tag", "Container Tag", "Standalone Tag"],
      answer: "Container Tag"
  }, {
      question: "_________ are used to provide additional information about the tag and go in name-value pairs separated by an equal sign =",
      options: ["HTTPs", "Values", "Tags", "Attributes"],
      answer: "Attributes"
  }, {
      question: "A(n) ________ is an assigned property to an attribute.",
      options: ["HTTP", "Value", "Tag", "Attribute"],
      answer: "Value"
  }, {
      question: "HTML files are divided into 2 parts: the head and the __________",
      options: ["Attribute", "Body", "Title", "HTML"],
      answer: "Body"
  }, {
      question: "Everything that appears on your webpage may it be texts, images, videos and others should then be put on the body which is enclosed in…",
      options: ["<head>", "<title>", "<body>", "<html>"],
      answer: "<body>"
  }, {
      question: "This attribute can be used under the declaration of the <body> tag if you want to add a background image on the web page.",
      options: ["background", "bgcolor", "text", "link"],
      answer: "background"
  }, {
      question: "This attribute can be used under the declaration of the <body> tag if you want to customize the background color of your webpage.",
      options: ["background", "bgcolor", "text", "link"],
      answer: "bgcolor"
  }, {
      question: "This attribute can be used under the declaration of the <body> tag if you want to change the color of all the hyperlinks in the webpage",
      options: ["background", "bgcolor", "text", "link"],
      answer: "link"
  }, {
      question: "Which among the heading levels is the smallest font size?",
      options: ["h1", "h3", "h5", "h6"],
      answer: "h6"
  }, {
      question: "This attribute indicates the position of the text within an object.",
      options: ["align", "left", "center", "right"],
      answer: "align"
  }, {
      question: "This tag is used to create paragraphs.",
      options: ["hr", "p", "ol", "br"],
      answer: "p"
  }, {
      question: "This type of list enumerates each item in a bulleted form.",
      options: ["dl", "li", "ul", "dt"],
      answer: "li"
  }
];

// turning all of the html elements into variables
const beginButtonEl = document.getElementById("begin-button");
const optionAEl = document.getElementById("option-a")
const optionBEl = document.getElementById("option-b")
const optionCEl = document.getElementById("option-c")
const optionDEl = document.getElementById("option-d")
const questionContainer = document.getElementById("question")
const questionText = document.getElementById("questionTitle")
const startContainer = document.getElementById("start")
const scoreContainer = document.getElementById("my-score-page")
const highscoreContainer = document.getElementById("highscores-page")
const finalScoreEl = document.getElementById("final-score")
const initialsInputEl = document.getElementById("initials-input")
const initialsSubmitBtn = document.getElementById("submit-initials")
const timerEl = document.getElementById("timer");
const viewHighscoresLink = document.getElementById("view-scores-link")
const highscoreslistEl = document.getElementById("highscore-list")
const backToStartBtn = document.getElementById("back-to-start-btn")
const clearScoresBtn = document.getElementById("clear-scores-btn")
const previousAnswerEl = document.getElementById("previous-answer")
beginButtonEl.addEventListener("click", startQuiz)

// Declaring some global variables
let questionPosition = 0;
let timeLeft;
let currentScore = 0;

// Starts the quiz up by: displaying questions, starting the timer
function startQuiz() {
    previousAnswerEl.style.display = "none"
    questionPosition = 0;
    let timeLeft = 60;
    timerEl.textContent = "Time Left:" + timeLeft

    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    scoreContainer.style.display = "none";
    highscoreContainer.style.display = "none";

    let countdownTimer = setInterval(function(){
    timeLeft--;
    timerEl.textContent = "Time Left:" + timeLeft
    if(timeLeft <= 0) {
      clearInterval(countdownTimer);
      if (questionPosition < quizQuestions.length - 1) {
        endQuiz()
      }
    }
  }, 1000);

  displayCurrentQuestion();
};

// Pulls the data from the current question and displays it
function displayCurrentQuestion () {
    questionText.textContent = quizQuestions[questionPosition].question;
    optionAEl.textContent = quizQuestions[questionPosition].options[0]
    optionBEl.textContent = quizQuestions[questionPosition].options[1]
    optionCEl.textContent = quizQuestions[questionPosition].options[2]
    optionDEl.textContent = quizQuestions[questionPosition].options[3]
}

// Function assesses whether the answer entered was correct and acts accordingly
function checkAnswer (choice) {
    previousAnswerEl.style.display = "block"

    if (quizQuestions[questionPosition].answer === quizQuestions[questionPosition].options[choice]){

        currentScore++;
        previousAnswerEl.textContent = "Correct answer!"
    } else {
        timeLeft -= 5;
        timerEl.textContent = "Time Left:" + timeLeft;
        previousAnswerEl.textContent = "Wrong, the correct answer was:" + quizQuestions[questionPosition].answer;
    }

    questionPosition++;

    if (questionPosition < quizQuestions.length) {
        displayCurrentQuestion();
    } else {
        endQuiz();
    }
}

// Function displays highscore entry page
function endQuiz () {
    startContainer.style.display = "none";
    questionContainer.style.display = "none";
    scoreContainer.style.display = "block";
    highscoreContainer.style.display = "none";

    finalScoreEl.textContent = currentScore;
}

// Function stores initials among highscores
function recordHighScore (event) {
    event.preventDefault();

    if (!initialsInputEl) {
        alert("Please type your initials");
        return;
    }

    let savedScores = localStorage.getItem("high scores")
    let scoresArray = [];

    if (!savedScores) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedScores)
    }

    let userScore = {
        initials: initialsInputEl.value,
        score: finalScoreEl.textContent
    };

    scoresArray.push(userScore)

    let scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);

    displayHighScores();
}

// Shows saved highscores
function displayHighScores () {
    startContainer.style.display = "none";
    questionContainer.style.display = "none";
    scoreContainer.style.display = "none";
    highscoreContainer.style.display = "block";

    let savedScores = localStorage.getItem("high scores")
    if (!savedScores) {
        return;
    }

    let storedScores = JSON.parse(savedScores);
    for (i = 0; i < storedScores.length; i++) {
        let singleScore = document.createElement("p")
        highscoreslistEl.innerHTML = "Highscores:"
        singleScore.innerHTML = storedScores[i].initials + ": " + storedScores[i].score;
        highscoreslistEl.appendChild(singleScore)
    }
};


// All the button listeners and functions to go with them
beginButtonEl.addEventListener("click", startQuiz);
optionAEl.addEventListener("click", function(event){checkAnswer(0)});
optionBEl.addEventListener("click", function(event){checkAnswer(1)});
optionCEl.addEventListener("click", function(event){checkAnswer(2)});
optionDEl.addEventListener("click", function(event){checkAnswer(3)});

initialsSubmitBtn.addEventListener("click", function(event){
    recordHighScore(event)
});

viewHighscoresLink.addEventListener("click", function(event){
    displayHighScores(event)
});

clearScoresBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    highscoreslistEl.innerHTML = "High Scores Cleared!";
});

backToStartBtn.addEventListener("click", function(){
    startContainer.style.display = "block";
    questionContainer.style.display = "none";
    scoreContainer.style.display = "none";
    highscoreContainer.style.display = "none";
});