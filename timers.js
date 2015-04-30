var intervalID = setInterval(startTimer, 1000)
var time = 0
var reset = document.querySelector("#reset")
var start = document.querySelector("#start")
var pause = document.querySelector("#pause")
var timer = document.querySelector("#timer")

// setInterval
// var intervalID = window.setInterval(function, 500);
//
// clearInterval
//use clearInterval for pause

// * When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.

  function startTimer(){
    timer.innerHTML = time; time++;
  }
//When "Start" button is clicked, the text "Stop Watch" changes to "Time elapsed: 0"
start.addEventListener("click", function(event){
    //replace "stop watch" to "time elapsed:0"
    //var intervalID = setInterval(startTimer, 1000)
    setInterval(startTimer, 1000);

    //and the count should increment every second
  })


// * When "Reset" is clicked, the text should return to "Stop Watch"
reset.addEventListener("click", function(event){
  clearInterval(intervalID);
  time = 0
  //timer.innerHTML = "Time elapsed: 0"
var intervalID = setInterval(startTimer, 1000);
  //intervalID
})

// * When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
pause.addEventListener("click", function(event){
  clearInterval(intervalID);
})
