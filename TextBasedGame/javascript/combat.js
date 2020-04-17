var countdown = 10;
var timer;
var localHealth = 100;
var enemyHealth = 100;

function combatSetup(player,enemy)
{


  document.getElementById('container').classList.add('hideMe');
  document.getElementById('combat-wrapper').classList.remove('hideMe');
}

function nextRound(){
  //show combat hide overview
  document.getElementById('overviewBox').classList.add('hideMe');
  document.getElementById('combatBox').classList.remove('hideMe');
  document.getElementById('hitbox-display').classList.remove('hideMe');
  document.getElementById('countdownTimer').innerHTML = "10";
  document.getElementById('countdownTimer').classList.remove('hideMe');
  document.getElementById('hitbox-input').value = "";

  //setup round timer
  timer = setInterval('countdownTimer()', 1000);
  countdown = 10;
}

function exectuteCombat(){
  //stop timer
  clearInterval(timer);

   var combats = document.getElementsByName('Attack');
   var selectedCombat;
   for(i = 0; i < combats.length; i++) {
      if(combats[i].checked)
        selectedCombat = combats[i].value;
   }

   var maxDamage;
   var maxHealthLoss;

   switch (selectedCombat) {
     case 'Attack1':
      maxDamage = 50;
      maxHealthLoss = 40;
      break;
    case 'Attack2':
      maxDamage = 60;
      maxHealthLoss = 60;
      break;
    case 'TakeCover':
     maxDamage = 30;
     maxHealthLoss=10;
     break;
   }

   var damageDealt = Math.floor(Math.random()*maxDamage);
   var damageRecieved = Math.floor(Math.random()*maxHealthLoss);

   //provide bonus damage
   damageDealt += countdown;

   localHealth = localHealth - damageRecieved;
   enemyHealth = enemyHealth - damageDealt;

   if(localHealth>=0){
     //you lose
   }
   else if(enemyHealth>=0){
     //enemy died
   }


  document.getElementById('countdownTimer').classList.add('hideMe');

  document.getElementById('stat-damageTaken').innerHTML = damageRecieved;
  document.getElementById('stat-damageGiven').innerHTML = damageDealt;

  var width = document.getElementById('PlayerHB').offsetWidth;
  document.getElementById('PlayerHB').style.width = Math.floor((width/100) *localHealth) + 'px';
  document.getElementById('EnemyHB').style.width =  Math.floor((width/100) *enemyHealth) + 'px';
  document.getElementById('health1').innerHTML = localHealth + 'HP';
  document.getElementById('health2').innerHTML = enemyHealth + 'HP';

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
  }
  else{
    countdown = countdown-1;
    document.getElementById('countdownTimer').innerHTML = countdown;
  }
}
