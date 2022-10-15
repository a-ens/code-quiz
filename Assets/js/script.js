// Qs source: https://www.proprofs.com/quiz-school/story.php?title=compro_12zi
// Array containing questions
var quizQuestions = [
  {
      question: "HTML stands for HyperText __________ Language."
      options: ["Market", "Marker", "Markup", "Marking"]
      answer: "Markup"
  } {
      question: "Texts that are enclosed on a <title> tag are all displayed in which part of the browser?"
      options: ["Title Bar", "Tab", "Menu Bar", "Tool Bar"]
      answer: "Title Bar"
  } {
      question: "These are the basic units or building blocks of an HTML file."
      options: ["Tag", "HTTP", "Value", "Attribute"]
      answer: "Tag"
  } {
      question: "Tags that cannot stand alone are called…"
      options: ["Empty Tag", "Markup Tag", "Container Tag", "Standalone Tag"]
      answer: "Container Tag"
  } {
      question: "_________ are used to provide additional information about the tag and go in name-value pairs separated by an equal sign ="
      options: ["HTTPs", "Values", "Tags", "Attributes"]
      answer: "Attributes"
  } {
      question: "A(n) ________ is an assigned property to an attribute."
      options: ["HTTP", "Value", "Tag", "Attribute"]
      answer: "Value"
  } {
      question: "HTML files are divided into 2 parts: the head and the __________"
      options: ["Attribute", "Body", "Title", "HTML"]
      answer: "Body"
  } {
      question: "Everything that appears on your webpage may it be texts, images, videos and others should then be put on the body which is enclosed in…"
      options: ["<head>", "<title>", "<body>", "<html>"]
      answer: "<body>"
  } {
      question: "This attribute can be used under the declaration of the <body> tag if you want to add a background image on the web page."
      options: ["background", "bgcolor", "text", "link"]
      answer: "background"
  } {
      question: "This attribute can be used under the declaration of the <body> tag if you want to customize the background color of your webpage."
      options: ["background", "bgcolor", "text", "link"]
      answer: "bgcolor"
  } {
      question: "This attribute can be used under the declaration of the <body> tag if you want to change the color of all the hyperlinks in the webpage"
      options: ["background", "bgcolor", "text", "link"]
      answer: "link"
  } {
      question: "Which among the heading levels is the smallest font size?"
      options: ["h1", "h3", "h5", "h6"]
      answer: "h6"
  } {
      question: "This attribute indicates the position of the text within an object."
      options: ["align", "left", "center", "right"]
      answer: "align"
  } {
      question: "This tag is used to create paragraphs."
      options: ["hr", "p", "ol", "br"]
      answer: "p"
  } {
      question: "This type of list enumerates each item in a bulleted form."
      options: ["dl", "li", "ul", "dt"]
      answer: "li"
  }
]

var beginButton = document.getElementById("begin-button");
var optionA = document.getElementById("option-a")
var optionB = document.getElementById("option-b")
var optionC = document.getElementById("option-c")
var optionD = document.getElementById("option-d")


beginButton.addEventListener("click", startQuiz)

function quizEnd (){

}

function startQuiz(){
    let timeleft = 60;
    var countdownTimer = setInterval(function(){
    
    if(timeleft <= 0){
      quizEnd;
    } else {
      timeleft -= 1;
    }
    timeleft -= 1;
  }, 1000);

}




// var createTimer = document.createElement("p")


// if (corAnswer == userAnswer){
//     var correctness = true

// } else {
//     var correctness = false;
// }

var timeleft = 60;
function countdownTimer() setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
