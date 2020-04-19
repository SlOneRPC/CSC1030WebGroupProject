var countdown = 10;
var timer;
var localHealth = 100;
var enemyHealth = 100;
var currentCombat = "Weapon Attack";
var hitchance;
var maxDamage;
var maxDamageRecieved;
var weaponDisabled = false;
var activeWeaponObj;

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
  updateCombatType(0);

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
  //get the inventory table
  var elements = document.querySelectorAll("#combat-inventory td");

  //start at index 1
  var tableIndex = 1;
  for(var i=0; i<player.inventory.length;i++){
    //check that the item is a weapon
    if(player.inventory[i].item.itemType === "Weapon"){
      var item = player.inventory[i].item;
      var name = item.itemName + "_cbtimg";//new id
      //create a new image and display it
      elements[tableIndex].innerHTML = "<img src="+ item.itemFilePath +" alt=" + item.itemName + " class='inventoryItem' draggable='true' ondragstart='drag(event)' id="+name+">";
      tableIndex++;
    }
  }

  //if the player has no weapons-
  if(window.player.equippedWeapon.item.itemName == 0){
    document.getElementById('wepButton').disabled = true;
    weaponDisabled = true;
    updateCombatType(1);//set combat to melee since no weapon is equipped
  }
  else{
    //get the active combat slot
    var slot = document.getElementById('combatActive');
    //remove the child element (image)
    slot.removeChild(slot.childNodes[0]);

    //create a clone of the first weapon
    var newNode = document.getElementById('combatDefault').childNodes[0].cloneNode(true);
    var itemName = newNode.id.split('_')
    newNode.id+='active';//cant have the same id
    slot.appendChild(newNode);//add the new note to the now empty slot
    window.equipWeapon(itemName[0]);//equip the weapon incase it already isnt
  }
}

function equipWeaponDrop(ev){
  var data = ev.dataTransfer.getData("text");
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = data+'active'; /* We cannot use the same ID */
  if(event.target.tagName.toUpperCase() != "TD")//if the target isnt empty
  {
    var slot = document.getElementById('combatActive');
    slot.removeChild(slot.childNodes[0]);
    slot.appendChild(nodeCopy);//remove child image
    var itemName = nodeCopy.id.split('_');
    window.equipWeapon(itemName[0]);
  }
  ev.preventDefault();
}


function updateCombatType(type){
  //if heal combat type was last selected then hide it
  if(currentCombat === "Heal" && type != 2){
    document.getElementById('CurrentHealthGained').classList.add('hideMe');
    document.getElementById('healContainer').classList.add('hideMe');
  }

  //based on the button pressed selected the combat type
  switch (type) {
    case 0:
      if(weaponDisabled == false){
        currentCombat = "Weapon Attack";
      }
      break;
    case 1:
      currentCombat = "Melee Attack";
      break;
    case 2:
      currentCombat = "Heal";
      document.getElementById('CurrentHealthGained').classList.remove('hideMe');
      document.getElementById('healContainer').classList.remove('hideMe');
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
      maxDamage = window.player.equippedWeapon.damage;
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
  updateHitbox();
  //if damage can be given to the enemy from the selected attack
  if(damageGiven){
    document.getElementById('Currenthitchance').classList.remove('hideMe');
    document.getElementById('hitchanceValue').innerHTML = hitchance + "%";
    document.getElementById('MaxDamageValue').innerHTML = maxDamage + "HP";
    document.getElementById('CurrentDamageGiven').classList.remove('hideMe');
    document.getElementById('hitboxesContainer').classList.remove('hideMe');
    document.getElementById('hitchanceValue').innerHTML = hitchance + "%";
  }
  else{
    //damage cant be given
    document.getElementById('CurrentDamageGiven').classList.add('hideMe');
    document.getElementById('hitboxesContainer').classList.add('hideMe');
    document.getElementById('Currenthitchance').classList.add('hideMe');
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
      document.getElementById('addHitchance').innerHTML = '+' + hitchanceChange;
      document.getElementById('addHitchance').style.color = "lime";
  }
  else{
    document.getElementById('addHitchance').innerHTML = hitchanceChange;
    document.getElementById('addHitchance').style.color = "red";
  }

  document.getElementById('addMaxDamage').innerHTML = '+' + maxDmgChange;

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
    //exectuteCombat();
  }
  else{
    countdown = countdown-1;
    document.getElementById('countdownTimer').innerHTML = countdown;
  }
}
