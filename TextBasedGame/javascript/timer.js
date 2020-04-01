var timeRemaining = 300;
var startTime;
var timer;
var paused = false;
function timerOperation(){
  // Update the count down every 1 second
  timer = setInterval(onTimer, 1000);
}

function onTimer(){
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor(timeRemaining/60);
  var seconds = timeRemaining-(minutes*60);

  if(seconds < 10){
    seconds = "0" + seconds;
  }

  // Display the result in the element with id="demo"
  var timeLeft = minutes + ":" + seconds;
  document.getElementById("timer").innerHTML ="Time remaining: " + timeLeft;

  //take away a second
  timeRemaining -= 1;
  //alert(timeRemaining);
  // If the count down is finished, write some text
  if (timeRemaining <= 0) {
    clearInterval(x);
    sessionStorage.setItem("timeRemaining",timeRemaining);
    sessionStorage.setItem('stats', JSON.stringify(player.stats));

    window.location.href = "endScreen.html";
  }
}

function pause(){
  if(!paused){
    //if the timer is currently not paused clear the interval
    clearInterval(timer);
    paused = true;
    document.getElementById('pausebtn').innerHTML = 'unpause';
  }
  else{
    timer = setInterval(onTimer, 1000);
    paused = false;
    document.getElementById('pausebtn').innerHTML = 'pause';
  }
}
