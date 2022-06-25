
var questionNum;
var corAnswer;
var userAnswer;
var beginQuiz;
var timeLeft
var showTimer


if (corAnswer == userAnswer){
    var correctness = true

} else {
    var correctness = false;
}

function updateTimer () {
    timeLeft = timeLeft - 1
}

document.getElementById("begin").addEventListener("click", beginQuiz);

function beginQuiz(){
    timeLeft = 60;
    window.getElementById("quiz").write("timeLeft" + "seconds remaining")
}

document.setInterval(updateTimer, 1000);

