// this method displays the stats of the last game run to the user
function gameFinishedStats(){

  // formatting the page appropriately

  if(sessionStorage.getItem("ending") === "true"){ // - user beats the game
    gameWon();
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

// method used to restart the game - loads start page  - edit start menu to include user name - sessionStorage variable maybe
function restartGame(){
  window.location.href = "test.html";
}

function achievements(){
  // speed demon achievement
  if(sessionStorage.getItem("timeSpent")>180){
    document.getElementById("speedDemon").style.color = "green";
  }
  else{
    document.getElementById("speedDemon").style.color = "red";
  }

  if(stats.enemiesDefeated > 10){
    document.getElementById("warrior").style.color = "green";
  }
  else{
    document.getElementById("warrior").style.color = "red";
  }

  if(stats.areasExplored > 20){
    document.getElementById("explorer").style.color = "green";
  }
  else{
    document.getElementById("explorer").style.color = "red";
  }

  if(stats.itemsCollected > 10){
    document.getElementById("collector").style.color = "green";
  }
  else{
    document.getElementById("collector").style.color = "red";
  }

  //digital love
  //if()
}

function achievementInfo(title){
  if(title === "speedDemon"){

  }
  else if(title === "warrior"){

  }
  else if(title ==="explorer"){

  }
  else if(title === "collector"){

  }
  else if(title === "digitalLove"){
    
  }
}
