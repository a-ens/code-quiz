
var beginButton = document.createElement("button");
beginButton.innerHTML = "Begin the Quiz";
beginButton.setAttribute("id", "begin");
document.getElementById("quiz").appendChild(beginButton);

beginButton.addEventListener("click", startingQuiz)



var startingQuiz = function startQuiz(){
    beginButton.getElementById("begin").remove()
//     var timeleft = 60;
//     var countdownTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//   } else {
//     document.getElementById("quiz").appendChild() = timeleft + " seconds remaining";
//   }
//   timeleft -= 1;
// }, 1000);
  }




// var createTimer = document.createElement("p")


// if (corAnswer == userAnswer){
//     var correctness = true

// } else {
//     var correctness = false;
// }

var timeleft = 60;
var countdownTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
