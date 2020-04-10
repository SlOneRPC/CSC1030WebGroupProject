var timeRemaining = 300;
var startTime;
var timer;
var paused = false;
function timerOperation(){
  // Update the count down every 1 second
  timer = setInterval(onTimer, 1000);
}

function onTimer(){
  // time calculations for minutes and seconds remaining
  var minutes = Math.floor(timeRemaining/60);
  var seconds = timeRemaining-(minutes*60);

  // fixes display of timer for single digit seconds
  if(seconds < 10){
    seconds = "0" + seconds;
  }

  // displays time in item with id "timer"
  var timeLeft = minutes + ":" + seconds;
  document.getElementById("timer").innerHTML ="Time remaining: " + timeLeft;

  //take away a second
  timeRemaining -= 1;

  // code to change display at certain intervals
  //if (timeRemaining == )



  // If the count down is finished, end game
  if (timeRemaining <= -1) {
    clearInterval(timer);
    sessionStorage.setItem("timeSpent",timeLeft);
    sessionStorage.setItem('stats', JSON.stringify(player.stats));
    window.location.href = "endScreen.html";
  }
}

function pause(){
  if(!paused){  //if the timer is currently not paused clear the interval
    clearInterval(timer);
    document.getElementById('pauseContainer').classList.remove('hideMe');
    document.getElementById('wrapper').classList.add('disabledbutton');
  }
  else{ //if the timer is currently paused restart the timer
    timer = setInterval(onTimer, 1000);
    document.getElementById('pauseContainer').classList.add('hideMe');
    document.getElementById('wrapper').classList.remove('disabledbutton');
  }
  paused = !paused;//change paused state
}
