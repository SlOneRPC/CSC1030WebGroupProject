// this method displays the stats of the last game run to the user
function gameFinishedStats(ending){

  // formatting the page appropriately
  if(ending){ // - user beats the game
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

  // calculates if the user earned any achievements
  achievements();
}

function gameWon(){
  // title
  document.getElementById("title").innerHTML = "Game Completed"
  document.getElementById("title").style.color = "#4edaf9";//"#2380dc";
  // border + div
  document.getElementById("main-container").style.width = "525px";
  document.getElementById("main-container").style.borderColor = "#4edaf9";//"#2380dc";
  document.getElementById("main-container").style.boxShadow = "0 0 10px 2px #4edaf9";//#2380dc";

}

function gameOver(){ //- mightn't be needed
}

// method used to restart the game - loads start page  - edit start menu to include user name - sessionStorage variable maybe
function restartGame(){
  window.location.href = "test.html";
}

function achievements(){

  // checks if the user completed the game in under the time limit
  if(sessionStorage.getItem("timeSpent") > 180){

  }

  // checks if they defeated a certain number of enemies
  if(stats.enemiesDefeated>9){

  }

  // checks if they went into a certain number of rooms
  if(stats.areasExplored>10){

  }

  // checks if the user has picked up a certain number of items
  if(stats.itemsCollected > 9){

  }
}

// tasks - grading certain achievements,

// acheivements - 10 enemies defeated (warrior), 15 rooms explored (explorer), completed in 3 mins (speed demon), 10+ items collected (hoarder)
