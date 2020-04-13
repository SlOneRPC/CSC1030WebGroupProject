// this method displays the stats of the last game run to the user
function gameOverStats(){

  var stats = JSON.parse(sessionStorage.getItem('stats'));

  document.getElementById("timeSpent").textContent = sessionStorage.getItem("timeSpent");
  document.getElementById("enemiesKilled").textContent = stats.enemiesDefeated;
  document.getElementById("roomsEntered").textContent = stats.areasExplored;
  document.getElementById("itemsCollected").textContent = stats.itemsCollected;
}

// method used to restart the game - loads start page
function restartGame(){
  window.location.href = "test.html";
}
