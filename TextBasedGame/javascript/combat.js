var countdown = 10;
var timer;
var localHealth = 100;
var enemyHealth = 100;
var currentCombat = "Weapon Attack";
var hitchance;
var maxDamage;
var maxDamageRecieved;

function combatSetup()
{
  document.getElementById('container').classList.add('hideMe');//hide main gameplay wrapper
  document.getElementById('combat-wrapper').classList.remove('hideMe');

  //setup names
  document.getElementById('player1Name').innerHTML =  window.player.username;
  //todo enemy name

  //setup health bars
  localHealth = window.player.health;
  //enemyHealth = enemyObj.health;

  document.getElementById('currentCombat').innerHTML = 'Weapon Attack';//base attack
  calculateInfo();

  updateHP();
  updateWeapons();
}

function updateHP(){
  //get the width of a health bar
  var width = document.getElementById('healthBar1').offsetWidth;

  //calcuate the new width based on health
  document.getElementById('PlayerHB').style.width = Math.floor((width/100) *localHealth) + 'px';
  document.getElementById('EnemyHB').style.width =  Math.floor((width/100) *enemyHealth) + 'px';

  //update HP values
  document.getElementById('health1').innerHTML = localHealth + 'HP';
  document.getElementById('health2').innerHTML = enemyHealth + 'HP';
}

function updateWeapons(){
  var elements = document.querySelectorAll("#combat-inventory td");
  var tableIndex = 0;
  for(var i=0; i<player.inventory.length;i++){
    alert(player.inventory[i].item.itemName);
    if(player.inventory[i].item.itemType === "Weapon"){
      var item = player.inventory[i].item;
      var name = item.itemName + "_img";
      elements[tableIndex].innerHTML = "<img src="+ item.itemFilePath +" alt=" + item.itemName + " class='inventoryItem' draggable='true' ondragstart='drag(event)' onmouseover='displayInfo(this)' onmouseleave='hideInfo(this)' id="+ name+">";
      tableIndex++;
    }
  }

  //if the player has no weapons
  if(tableIndex === 0){
    //todo use fists
  }
}

function updateCombatType(type){
  //if heal combat type was last selected then hide it
  if(currentCombat === "Heal" && type != 2){
    document.getElementById('CurrentHealthGained').classList.add('hideMe');
  }

  //based on the button pressed selected the combat type
  switch (type) {
    case 0:
      currentCombat = "Weapon Attack";
      break;
    case 1:
      currentCombat = "Melee Attack";
      break;
    case 2:
      currentCombat = "Heal";
      document.getElementById('CurrentHealthGained').classList.remove('hideMe');
      break;
    case 3:
      currentCombat = "Run Away";
      break;
  }
  //display the current combat type
  document.getElementById('currentCombat').innerHTML =currentCombat;
  calculateInfo();
}

function calculateInfo(){
  var damageGiven = false;//damage can be given
  switch (currentCombat) {
    case "Weapon Attack":
      hitchance = 70;
      maxDamage = 70;//todo get weapon damage
      maxDamageRecieved = 50;
      damageGiven = true;
      break;
    case "Melee Attack":
      hitchance = 90;
      maxDamage = 50;
      maxDamageRecieved = 70;
      damageGiven = true;
      break;
    case "Heal":
      maxDamageRecieved = 60;
      hitchance = 60;
      document.getElementById('HealthGainedValue').innerHTML = "50HP";
      break;
  }

  //if damage can be given to the enemy from the selected attack
  if(damageGiven){
    document.getElementById('hitchanceValue').innerHTML = hitchance + "%";
    document.getElementById('MaxDamageValue').innerHTML = maxDamage + "HP";
    document.getElementById('CurrentDamageGiven').classList.remove('hideMe');
    document.getElementById('hitboxes').classList.remove('hideMe');
    document.getElementById('hitbox-label').classList.remove('hideMe');
  }
  else{
    //damage cant be given
    document.getElementById('CurrentDamageGiven').classList.add('hideMe');
    document.getElementById('hitboxes').classList.add('hideMe');
    document.getElementById('hitbox-label').classList.add('hideMe');
  }
  document.getElementById('hitchanceValue').innerHTML = hitchance + "%";
  document.getElementById('MaxDamageRecievedValue').innerHTML = maxDamageRecieved + "HP";
}

//combat start button press
function nextRound(){
  //show combat hide overview
  document.getElementById('overviewBox').classList.add('hideMe');
  document.getElementById('combatBox').classList.remove('hideMe');
  document.getElementById('countdownTimer').innerHTML = "10";
  document.getElementById('countdownTimer').classList.remove('hideMe');
  document.getElementById('combatInfo-display').classList.remove('hideMe');


  //setup round timer
  timer = setInterval('countdownTimer()', 1000);
  countdown = 10;
}

function exectuteCombat(){
  //stop timer
  clearInterval(timer);


  var damageRecieved;
  var damageDealt;

  //calculate damage dealt
  if(Math.floor(Math.random()*100) <= hitchance){//hit the enemy
    damageDealt = Math.floor(Math.random()*maxDamage);
  }
  else{//missed the enemy
    damageDealt = 0;
  }

  //calculate damage recieved
  if(Math.floor(Math.random()*100) <= 60){
    damageRecieved = Math.floor(Math.random()*maxDamageRecieved);
  }
  else{//enemy missed
    damageRecieved = 0;
  }

  localHealth -= damageRecieved;
  enemyHealth -= damageDealt;

   if(localHealth<=0){
     //TODO you lose end game
   }
   else if(enemyHealth<=0){
     //TODO enemy died exit combat
   }


  document.getElementById('countdownTimer').classList.add('hideMe');

  document.getElementById('stat-damageTaken').innerHTML = damageRecieved;
  document.getElementById('stat-damageGiven').innerHTML = damageDealt;

  updateHP();


  var elm1 = document.getElementById('healthLost');
  var elm2 = document.getElementById('damageGiven');
  elm1.innerHTML = 'Lost ' + damageRecieved + ' health..';
  elm2.innerHTML = 'Damaged for '+damageDealt+'..';
  elm1.classList.remove('hideMe');
  elm2.classList.remove('hideMe');

  document.getElementById('combatBox').classList.add('hideMe');
  document.getElementById('overviewBox').classList.remove('hideMe');
  document.getElementById('overview-container').classList.remove('hideMe');
}


function countdownTimer(){
  if(countdown <= 0){
    clearInterval(timer);
    exectuteCombat();
  }
  else{
    countdown = countdown-1;
    document.getElementById('countdownTimer').innerHTML = countdown;
  }
}
