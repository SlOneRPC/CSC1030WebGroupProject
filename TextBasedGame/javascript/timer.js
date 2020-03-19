var timeRemaining = 0;

function timerOperation(){
  // Set the date we're counting down to
  var startTime = new Date().getTime() + (5*60*1000) + (1*1000);

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = startTime - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(seconds < 10){
      seconds = "0" + seconds;
    }

    // Display the result in the element with id="demo"
    var timeRemaining = minutes + ":" + seconds;
    document.getElementById("timer").innerHTML = timeRemaining;

    // If the count down is finished, write some text
    if (distance < 1000) {
      clearInterval(x);
      sessionStorage.setItem("timeRemaining",timeRemaining);
      sessionStorage.setItem('stats', JSON.stringify(player.stats));

      window.location.href = "endScreen.html";
    }
  }, 1000);

}
