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

  achievements();
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

  var stats = JSON.parse(sessionStorage.getItem('stats'));

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

  if(stats.itemsCollected > 5){
    document.getElementById("collector").style.color = "green";
  }
  else{
    document.getElementById("collector").style.color = "red";
  }

  //digital love achievement
  if(sessionStorage.getItem("robotStop") === "true"){
    document.getElementById("digitalLove").style.color = "green";
  }
  else{
    document.getElementById("digitalLove").style.color = "red";
  }
}

// displays how to get achievements
function achievementInfo(title){
  if(title === "speedDemon"){
    desc = "Beat the game in under 3 minutes";
  }
  else if(title === "warrior"){
    desc = "Defeat more than 10 Enemies";
  }
  else if(title ==="explorer"){
    desc = "Explore 20 Rooms around the Map"
  }
  else if(title === "collector"){
    desc = "Collect more than 6 images";
  }
  else if(title === "digitalLove"){
    desc = "release the robot friend";
  }
}
