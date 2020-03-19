function gameOverStats(){

  var stats = JSON.parse(sessionStorage.getItem('stats'));

  document.getElementById("timeSpent").textContent = sessionStorage.getItem("timeRemaining");
  document.getElementById("enemiesKilled").textContent = stats.enemiesDefeated;
  document.getElementById("roomsEntered").textContent = stats.areasExplored;
  document.getElementById("itemsCollected").textContent = stats.itemsCollected;
}
