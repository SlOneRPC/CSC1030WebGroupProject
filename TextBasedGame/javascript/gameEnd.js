// this method displays the stats of the last game run to the user
function gameFinishedStats(){

  // formatting the page appropriately
  if(sessionStorage.getItem("ending") === "true"){ // - user beats the game
    gameWon();
  }

  else{ // - user loses the game
    gameOver();
  }

  var stats = JSON.parse(sessionStorage.getItem('stats'));

  document.getElementById("timeSpent").textContent = sessionStorage.getItem("timeSpent");
  document.getElementById("enemiesKilled").textContent = stats.enemiesDefeated;
  document.getElementById("roomsEntered").textContent = stats.areasExplored;
  document.getElementById("itemsCollected").textContent = stats.itemsCollected;

}

// called if the user beats the game
function gameWon(){
  // title
  document.getElementById("title").innerHTML = "Game Completed"
  document.getElementById("title").style.color = "#4edaf9";//"#2380dc";
  // border + div
  document.getElementById("main-container").style.width = "525px";
  document.getElementById("main-container").style.borderColor = "#4edaf9";//"#2380dc";
  document.getElementById("main-container").style.boxShadow = "0 0 10px 2px #4edaf9";//#2380dc";

}

// called if user loses the game
function gameOver(){

}

// method used to restart the game - loads start page  - edit start menu to include user name - sessionStorage variable maybe
function restartGame(){
  window.location.href = "test.html";
}
