var countdown = 10;
var timer;
var localHealth = 100;
var enemyHealth = 100;
var currentCombat = "Weapon Attack";
var healHP = 0;
var hitchance;
var maxDamage;
var maxDamageRecieved;
var weaponDisabled = false;
var activeEnemyObj;
var inCombat = false;

function combatSetupV2(){
  //hide container
  document.getElementById('mapMain').classList.add('hideMe');
  document.getElementById('combatMain').classList.remove('hideMe');

  //get the enemy object
  activeEnemyObj = window.player.currentRoom.enemies[0];

  //enemyHealth = activeEnemyObj.health;

  //document.getElementById('EnemyName').innerHTML = activeEnemyObj.enemyType;

  currentCombat = 'Weapon';

  //calculate basic stats
  calculateInfo();
  updateHP();
  updateCombatType();
  document.getElementById('healMethod').innerHTML = 'None, please select one first';
  inCombat = true;
  healHP = 0;
}

function updateHP(){
  //calcuate the new width based on health
  document.getElementById('healthBar').style.width =  localHealth  + '%';
  document.getElementById('EnemyHB').style.width =  enemyHealth + '%';
  //update HP values
  document.getElementById('EnemyHealthValue').innerHTML = enemyHealth + '%';
  document.getElementById('healthStat').innerHTML = "Health: " + localHealth + '%';
}


function equipWeaponDrop(ev){
  var data = ev.dataTransfer.getData("text");
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = data+'active'; /* We cannot use the same ID */
  if(event.target.tagName.toUpperCase() != "TD")//if the target isnt empty
  {
    var itemName = nodeCopy.id.split('_');
    for(var i=0; i<player.inventory.length;i++){
      //check that the item is a weapon
      if(player.inventory[i].item.itemType === "Weapon" && player.inventory[i].item.itemName == itemName[0]){
        var slot = document.getElementById('equippedWeaponImg');
        slot.removeChild(slot.childNodes[0]);
        slot.appendChild(nodeCopy);//remove child image
        window.equipWeapon(itemName[0]);
        break;
      }
    }

  }
  ev.preventDefault();
}


function updateCombatType(){
  //combat type change
  var combatOptions = document.getElementsByName('attacks');
  for (var i = 0, length = combatOptions.length; i < length; i++) {
    if (combatOptions[i].checked) {
      currentCombat = combatOptions[i].value;
      break;
    }
  }

  //display the current combat type
  document.getElementById('currentCombat').innerHTML =currentCombat;
  calculateInfo();
}

function healType(type){
  switch (type) {
    case 0:
      healHP = 25;
      document.getElementById('healMethod').innerHTML = 'Health Pack';
      break;
    case 1:
      healHP = 50;
      document.getElementById('healMethod').innerHTML = 'Health Kit';
      break;
  }

  document.getElementById('HealthGainedValue').innerHTML = healHP + "HP";
}

function calculateInfo(){
  var damageGiven = false;//damage can be given
  switch (currentCombat) {
    case "Weapon":
      hitchance = 70;
      maxDamage = window.player.equippedWeapon.damage;
      maxDamageRecieved = 50;
      damageGiven = true;
      break;
    case "Melee":
      hitchance = 90;
      maxDamage = 50;
      maxDamageRecieved = 70;
      damageGiven = true;
      break;
    case "Heal":
      maxDamageRecieved = 60;
      hitchance = 60;
      document.getElementById('healContainer').classList.remove('hideMe');
      break;
    case "Escape":
      maxDamageRecieved = 30;
      break;
  }
  updateHitbox();
  //if damage can be given to the enemy from the selected attack
  if(damageGiven){
    document.getElementById('Currenthitchance').classList.remove('hideMe');
    document.getElementById('hitchanceValue').innerHTML = hitchance + "%";
    document.getElementById('MaxDamageValue').innerHTML = maxDamage + "HP";
    document.getElementById('CurrentDamageGiven').classList.remove('hideMe');
    document.getElementById('hitboxesContainer').classList.remove('hideMe');
    document.getElementById('hitchanceValue').innerHTML = hitchance + "%";
    document.getElementById('attackContainer').classList.remove('hideMe');
  }
  else{
    //damage cant be given
    document.getElementById('hitboxesContainer').classList.add('hideMe');
    document.getElementById('attackContainer').classList.add('hideMe');
  }

  if(currentCombat != "Heal"){
      document.getElementById('healContainer').classList.add('hideMe');
  }
  document.getElementById('MaxDamageRecievedValue').innerHTML = maxDamageRecieved + "HP";
}

function updateHitbox(){
  var hitchanceChange;
  var maxDmgChange;
  switch(document.getElementById("hitboxes").selectedIndex){
    case 0://head
      hitchanceChange =- 2;
      maxDmgChange =10;
      break;
    case 1://chest
      hitchanceChange =5;
      maxDmgChange =4;
      break;
    case 2://arms
      hitchanceChange =4;
      maxDmgChange =5;
      break;
    case 3://torso
      hitchanceChange =4;
      maxDmgChange =5;
      break;
    case 4://legs
      hitchanceChange =3;
      maxDmgChange =7;
      break;
  }
  if(hitchanceChange >= 0){
      document.getElementById('addHitchance').innerHTML = '+' + hitchanceChange +"%";
      document.getElementById('addHitchance').style.color = "lime";
  }
  else{
    document.getElementById('addHitchance').innerHTML = hitchanceChange +"%";
    document.getElementById('addHitchance').style.color = "red";
  }

  document.getElementById('addMaxDamage').innerHTML = '+' + maxDmgChange + "HP";

  hitchance+=hitchanceChange;
  maxDamage+=maxDmgChange;
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
  document.getElementById('combatError').classList.add('hideMe');
  if(currentCombat == "Heal" && healHP == 0){
    document.getElementById('combatError').innerHTML = 'No heal method selected!';
    document.getElementById('combatError').classList.remove('hideMe');
  }
  else{
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
     else if(currentCombat == "Run Away"){
       //TODO move back a room
     }

    updateHP();
    document.getElementById('turnOptions').classList.add('hideMe');
    document.getElementById('turnOptions').classList.remove('turnOverview');
  }
}

function countdownTimer(){
  if(countdown <= 0){
    clearInterval(timer);
    //exectuteCombat();
  }
  else{
    countdown = countdown-1;
    document.getElementById('countdownTimer').innerHTML = countdown;
  }
}
