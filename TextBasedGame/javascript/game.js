
var player = createPlayerObject("Luke", 100, "Engineer", "", [],createWeaponObject("fist",0, 0, 5, "melee", ["punch"], "It's clobbering time","images/fist.png"), createStatObject(0, 0, 0, 0), 0, 0,false);
var robotBoolean = false;
var rooms = [];
var footstepSounds = [];
//var headcrab = createEnemyObject("Headcrab","will jump at your head", 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the headcrab", 5, 20, 0)], 40)
var selectedItem='';
var pickUpItemSound;
var pickUpAmmoSound;
var reloadSound;
var healthGainSound;
var healthLossSound;
var gunSound;
var footstep1;
var footstep2;
var footstep3;
var footstep4;
var footstep5;
var footstep6;
var footstep7;
var footstep8;
var volume=0.5;
var sounds=[];




function statUpdate(){
  // enemies killed - once player returns from combat, +1 to killed value
  // -> Calculated in Combat.js
  // rooms Entered - use Room.roomDiscovered value - boolean
  rooms.forEach((item, i) => {
    if(item.roomDiscovered){
      player.stats.areasExplored++;
    }
  });
  // items collected - length of item inventory - may adjust
  player.inventory.forEach((item, i) => {
    player.stats.itemsCollected++;
  });
  // time spent - this worked out as time counts down in timer.js
}

// this method is called when the user completes the game - when they exit the hangar in an escape pod
function gameFinished(ending){
  statUpdate();
  sessionStorage.setItem('stats', JSON.stringify(player.stats));
  sessionStorage.setItem('ending', ending);
  window.location.href = "endScreen.html";
}

function populateFootstepArray()
{
  footstep1 = new sound("sounds/footsteps/footstep1.mp3");
  footstep2 = new sound("sounds/footsteps/footstep2.mp3");
  footstep3 = new sound("sounds/footsteps/footstep3.mp3");
  footstep4 = new sound("sounds/footsteps/footstep4.mp3");
  footstep5 = new sound("sounds/footsteps/footstep5.mp3");
  footstep6 = new sound("sounds/footsteps/footstep6.mp3");
  footstep7 = new sound("sounds/footsteps/footstep7.mp3");
  footstep8 = new sound("sounds/footsteps/footstep8.mp3");

  footstepSounds.push(footstep1);
  footstepSounds.push(footstep2);
  footstepSounds.push(footstep3);
  footstepSounds.push(footstep4);
  footstepSounds.push(footstep5);
  footstepSounds.push(footstep6);
  footstepSounds.push(footstep7);
  footstepSounds.push(footstep8);
}
function changeVolume()
{
  sounds=[];
  footstepSounds=[];
  populateFootstepArray();
  populateSoundArray();
}
function populateSoundArray()
{
  pickUpItemSound = new sound("sounds/pickUpItem.mp3");
  pickUpAmmoSound = new sound("sounds/pickUpAmmo.mp3");
  gunSound = new sound("sounds/gunSound.mp3")
  reloadSound = new sound("sounds/reload.mp3") ;
  healthGainSound =  new sound("sounds/gainhealth.mp3");
  healthLossSound =  new sound("sounds/losehealth.mp3");

  sounds.push(footstep1);
  sounds.push(footstep2);
  sounds.push(footstep3);
  sounds.push(footstep4);
  sounds.push(footstep5);
  sounds.push(footstep6);
  sounds.push(footstep7);
  sounds.push(footstep8);
  sounds.push(pickUpItemSound);
  sounds.push(pickUpAmmoSound);
  sounds.push(healthGainSound);
  sounds.push(healthLossSound);
  sounds.push(reloadSound);
  sounds.push(gunSound);

}
function gameStart()
{
  const slider = document.getElementById("volumeControl")
  slider.oninput=(e) =>{
     const newVolume=e.target.value;
     volume=newVolume;
     changeVolume();

  };
 //method will decide and pick between starter rooms based on class
 player.username = sessionStorage.getItem("name");
 player.charClass = sessionStorage.getItem("class");
 addRooms();
 populateFootstepArray();
 document.getElementById("objectivesList").innerHTML="<li id='startObj'>Find a way off the ship. Get to the HANGAR BAY</li>";
 var width = document.getElementById('playerHealth').offsetWidth;
 document.getElementById("healthBar").style.width= player.health + '%';
 document.getElementById("currentWeapon").innerHTML="Equipped Weapon: Fist";
 document.getElementById("equippedWeapon").src= player.equippedWeapon.item.itemFilePath;
 document.getElementById("currentWeaponMag").innerHTML="0/0";
 document.getElementById("playerNameStat").innerHTML="Name: "+player.username;
 document.getElementById("playerClassStat").innerHTML="Occupation: "+player.charClass;
 document.getElementById("healthStat").innerHTML = "Health: "+ player.health +"%";
 var newCurrent = createRoomObject(0,0,0,0,0,0,0,0,0);
 if (player.charClass == "Hacker")
 {
   document.getElementById("playerImg").src="images/hackericon.png";
   rooms.forEach((item, i) => {
     if(item.roomName == "computer lab")
     {
       newCurrent = item;

       document.getElementById("starterText").innerHTML +="<span = class = 'textAnimStart'>>You push your glasses up your nose and sigh to yourself. You finally finished </br> fixing the bug that caused some of the ships doors to seal shut for no reason at all.</br></br></span><span = class = 'textAnimStart2'>>Satisfied, you stand up from your chair and stretch your legs. Looking at your monitor, you see it start to vibrate, then jump around and fall off your desk.</br></br></span><span class = 'textAnimStart3'>>Suddenly, the entire room vibrates and jumps about the same, throwing you to the </br>floor. You quickly get to your feet, wondering what the engineer of the ship has</br>done this time."

       item.roomDiscovered = true;
     }
   });
 }
 else if (player.charClass == "Engineer")
 {
   document.getElementById("playerImg").src="images/engineericon.png";
   rooms.forEach((item, i) => {
     if(item.roomName == "quarters")
     {
       document.getElementById("starterText").innerHTML += "<span = class = 'textAnimStart'>>You've been sleeping after a long shift, when you are suddenly thrown to the floor </br>with a bang that could wake the dead.</br></span></br><span = class = 'textAnimStart2'>>Stumbling to your feet, bleary-eyed, with no idea what's going on you realise everyone around you is missing.</br></span></br><span = class = 'textAnimStart3'>>Whatever is going on, it isn't going to be fun.</span>"
       newCurrent = item;
       item.roomDiscovered = true;
     }
   });
 }
 else if (player.charClass == "SpaceCowboy")
 {
     document.getElementById("playerImg").src="images/spacecowboyicon.png";
     rooms.forEach((item, i) => {
     if(item.roomName == "armory")
     {
       document.getElementById("starterText").innerHTML +="<span  class = 'textAnimStart'>>Beautiful. The glisten of the barrel catches your eye again as you finish polishing off</br>your trusty blaster for the fourth time in the last hour.</br></span></br><span = class = 'textAnimStart2'>>This fine machine of destruction has gotten you off the hook too many times to count</br>and should keep you going for a while yet. Adjusting the brim of your cap, you finish off</br>putting together your trusty blaster. <span = class = 'textAnimStart3'></br></br>>While you admire your cleaning work, a violent shudder throws you to the floor You quickly hop to your feet from where you were sitting, keeping your wits right by your</br>side as you wonder 'what the hell is going on?'.</span>"
       newCurrent = item;
       item.roomDiscovered = true;
     }
   });
 }
 player.currentRoom = newCurrent;
 document.getElementById("gameMap").src="images/"+player.currentRoom.mapFilePath;
 document.getElementById("text-display").innerHTML +="<span id = 'userTextNormal'>>You find yourself in the "+player.currentRoom.roomName+". </span>";
 document.getElementById("text-display").innerHTML +="</br><span id = 'userTextNormal'>>Pick up your gadget and weapon by clicking search (you can also scroll down in the inventory to see your nearby pickups)</span></br>";
 document.getElementById("currentRoomDisplay").innerHTML +=player.currentRoom.roomName;
 populateSoundArray();
}
function createPlayerObject(usernameValue, healthValue, charClassValue, currentRoomValue, inventoryValue, equippedWeaponValue, statsValue, attackValue, defenseValue)
{
  var playerObject = {username:usernameValue, health:healthValue, charClass:charClassValue, currentRoom:currentRoomValue,equippedWeapon:equippedWeaponValue, inventory:inventoryValue, stats:statsValue, attack:attackValue, defense:defenseValue};
  return playerObject;
}
function createStatObject(areasExploredValue, itemsCollectedValue, enemiesDefeatedValue, timeLeftValue)
{
  var statsObject = {areasExplored:areasExploredValue, itemsCollected:itemsCollectedValue, enemiesDefeated:enemiesDefeatedValue, timeLeft:timeLeftValue};
  return statsObject;
}
function createRoomObject(roomNameValue, typeValue, roomDescriptionValue, enemiesValue, exitsValue, roomItemsValue, interactableRoomObjectsValue, roomDiscoveredValue,mapFilePathValue)
{
  var roomObject = {roomName:roomNameValue, type:typeValue, roomDescriptions:roomDescriptionValue, enemies:enemiesValue, exits:exitsValue, roomItems:roomItemsValue, interactables:interactableRoomObjectsValue, roomDiscovered:roomDiscoveredValue,mapFilePath:mapFilePathValue};
  return roomObject;
}
function createExitObject(exitRoomNameValue, orientationValue,descriptionValue,blockedValue,blockedDescriptionValue)
{
  var exitObject = {exitRoomName:exitRoomNameValue, orientation:orientationValue, description:descriptionValue, blocked:blockedValue,blockedDescription:blockedDescriptionValue};
  return exitObject;
}
function createItemObject(itemNameValue, itemTypeValue, itemDescriptionValue, itemSearchedValue, itemFilePathValue)
{
  var itemObject = {itemName:itemNameValue, itemType:itemTypeValue, itemDescription:itemDescriptionValue, itemSearched:itemSearchedValue, itemFilePath:itemFilePathValue};
  return itemObject;
}
function createWeaponObject(itemNameValue, ammoValue, magSizeValue, damageValue, weaponTypeValue, attackKeyValue, descriptionValue, itemFilePathValue)
{
  var weaponObject = {item:createItemObject(itemNameValue, "Weapon", descriptionValue, false, itemFilePathValue),ammo:ammoValue,magSize:magSizeValue,  damage:damageValue, weaponType:weaponTypeValue, attackKey:attackKeyValue};
  return weaponObject;
}
function createArmourObject(itemNameValue, bodyPartValue, defenseValue, descriptionValue, itemFilePathValue)
{
  var armourObject = {item:createItemObject(itemNameValue, "Armour", descriptionValue, false, itemFilePathValue), bodyPart:bodyPartValue, defense:defenseValue};
  return armourObject;
}
function createGadgetObject(itemNameValue, descriptionValue , itemFilePathValue)
{
  var gadgetObject = {item:createItemObject(itemNameValue, "Gadget", descriptionValue,  false, itemFilePathValue)};
  return gadgetObject;
}
function createDescriptionObject(actionValue,textValue)
{
  var descriptionObject ={action:actionValue,text:textValue};
  return descriptionObject;
}
function createAmmoObject(itemNameValue,descriptionValue,itemFilePathValue,amountValue)
{
  var ammoObject= {item:createItemObject(itemNameValue, "Ammo", descriptionValue, false, itemFilePathValue), amount:amountValue};
  return ammoObject;
}
function createHealthObject(itemNameValue,descriptionValue,itemFilePathValue,healthGainValue,amountValue)
{
  var healthObject={item:createItemObject(itemNameValue, "Health", descriptionValue, false, itemFilePathValue), healthGain:healthGainValue,amount:amountValue};
  return healthObject;
}
function createPuzzleKeyObject(itemNameValue,descriptionValue,itemFilePathValue)
{
  var puzzleKeyObject={item:createItemObject(itemNameValue,"Puzzle", descriptionValue, false, itemFilePathValue)};
  return puzzleKeyObject;
}
function createPuzzleLockObject(interactableNameValue, descriptionValue, customCommandValue,descriptionUnlockedValue)
{
  var puzzleLockObject={interactableName:interactableNameValue, description:descriptionValue, customCommand:customCommandValue,descriptionUnlocked:descriptionUnlockedValue};
  return puzzleLockObject;
}
function createEnemyObject(enemyTypeValue,descriptionValue, ambientDescriptionValue, filePathValue,healthValue,damagePerAttackValue,weaponValue, bodyPartsValue, detectionValue)
{
  var enemyObject={enemyType:enemyTypeValue,description:descriptionValue, ambientDescription: ambientDescriptionValue,filePath:filePathValue,health:healthValue,damagePerAttack:damagePerAttackValue, weapon:weaponValue, bodyParts:bodyPartsValue, detection:detectionValue};
  return enemyObject;
}
function createLeverObject(interactableNameValue, descriptionValue, customCommandValue, pulledStateValue ,pulledDescriptionValue)
{
  var leverObject={interactableName:interactableNameValue, description:descriptionValue,customCommand:customCommandValue,pulledState:pulledStateValue,pulledDescription:pulledDescriptionValue};
  return leverObject;
}
function createBodyPartObject(partNameValue,filePathValue,damagePerHitValue, percentageToHitValue, descriptionValue)
{
  var bodyPartObject={partName:partNameValue, description:descriptionValue,baseDamagePerHit:damagePerHitValue,percentageToHit:percentageToHitValue, filePath:filePathValue};
  return bodyPartObject;
}
function createDataPadObject(itemNameValue,descriptionValue, informationValue, itemFilePathValue)
{
  var dataPadObject =  {item:createItemObject(itemNameValue, "Datapad", descriptionValue, false, itemFilePathValue), information:informationValue};
  return dataPadObject;
}
function createInteractableObject(interactableNameValue, descriptionValue, customCommandValue,)
{
  var interactableObject =  {interactableName:interactableNameValue, description:descriptionValue,customCommand:customCommandValue};
  return interactableObject;
}
function createBlockedPathObject(interactableNameValue, descriptionValue, customCommandValue,exitRoomNameValue,descriptionOpenValue,idValue)
{
  var blockedPathObject={interactableName:interactableNameValue, description:descriptionValue, customCommand:customCommandValue, exitRoomName:exitRoomNameValue,descriptionOpen:descriptionOpenValue,id:idValue};
  return blockedPathObject;
}
function createModifierObject(itemNameValue, descriptionValue, changeValue, mechanicChangeValue)
{
  var modifierObject = {item:createItemObject(itemNameValue, "Modifier", descriptionValue, false, ""), change:changeValue, mechanicChange:mechanicChangeValue};
  return modifierObject;
}
function createTerminalObject(interactableNameValue, descriptionValue, customCommandValue)
{
  var interactableObject =  {interactableName :interactableNameValue, description:descriptionValue, customCommand:customCommandValue, password:generatePasswordPad()};
  return interactableObject;
}
function addRooms()
{

  var quarters =
  createRoomObject
  (
    "quarters", //Room Name
    "room", //Room Type
    [ //Room Descriptions
      createDescriptionObject
      (
        "first-entry",
        "You see beds lining the room, with the bedding strewn on the floor. It smells a tad like stale socks, and there isn't anyone to be seen."
      ),
      createDescriptionObject
      (
        "second-entry",
        "You re-enter the quarters finding them exactly as you left it."
      )
    ],
     [], //Enemies Value
    [ //Exits to current room
      createExitObject("hallway01", "east", "You step out of the quarters and into one of the ship's long dark hallways.",false,"")
    ],
    [ //Items in the current room

      createWeaponObject("pistol",9, 9, 10, "Ranged", ["shoot"], "A reliable firearm, good for dealing with foes. Mag Size: 9 ","images/laserpistol.png"),
      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png",Math.floor((Math.random() * 10) + 1)),
      createGadgetObject("blowtorch","A blowtorch, very useful for burning through metal and vents.","images/blowtorch.png")

    ],
    [

    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?,
    "map_quarters.png"
  );

  var armory =
  createRoomObject
  (
    "armory",//Room Name
    "room",//Room Type
    [//Room Descriptions
      createDescriptionObject
      (
        "first-entry",
        "You walk into the room, and see different kinds of weaponry in various stages of development, with bits of guns strewn about the tables they rest on. This must be the Armory."
      ),
      createDescriptionObject
      (
        "second-entry",
        "You re-enter the armory, finding the same weapon parts strewn on the floor."
      )
    ],
    [],//Enemies Value
    [ //Exits to current room
      createExitObject("hallway05", "north", "You exit the armory and enter into the hallway and see a junction.",false,""),
      createExitObject("hallway06", "south", "You creep out of the armory and enter into a dimly lit hallway.",false,"")
    ],
    [//Items in the current room
      createWeaponObject("revolver",6,6, 25,"Ranged", ["shoot"],"A quick six shooter that disintegrates anything in your path. Mag Size: 6","images/laserrevolver.png"),
      createGadgetObject("explosives","Explosives, good for clearing rubble and debris from your path.","images/explosives.png"),
      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png",Math.floor((Math.random() * 10) + 1) )
    ],
    [

    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_armory.png"
  );

  var computerLab =
  createRoomObject
  (
    "computer lab",//Room Name
    "room",//Room Type
    [//Room Descriptions
      createDescriptionObject
      (
        "first-entry",
        "You step into the room and are greeted by a low hum of machines, you notice several computer panels dotting the walls, in the centre of the room lies the ship's servers This must be the Computer Lab."
      ),
      createDescriptionObject
      (
        "second-entry",
        "You re-enter into the Computer Lab and are once again greeted by flashing displays and the hum of the servers."
      )
    ],
    [],//Enemies Value
    [//Exits to current room
      createExitObject("hallway03", "north","You step out of the computer lab into a hallway and arrive at a junction. ",false,""),
      createExitObject("hallway06", "east","",true,"You cannot go that way as it has been blocked by fallen debris and rubble from the upper level. ")
    ],
    [//Items in the current room
      createWeaponObject("pistol", 9, 9, 10, "Ranged", ["shoot"], "A reliable pistol good for dealing with foes. Mag Size: 9" ,"images/laserpistol.png"),
      createGadgetObject("hacking tool","A hacking tool that can be used to open locked doors.","images/hackingtool.png"),
      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1) )
    ],
    [
      createBlockedPathObject("pile of rubble","You approach the rubble and quickly see there is no way through it, you might be able to clear it with something?","use explosives on rubble","hallway06","You plant the explosives in the centre of the rubble and duck into an alcove, the explosives detonate leaving the way clear","rubble01"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_computerlab.png"
  );

  var storageUnit1 =
  createRoomObject
  (
    "storage unit 01",//Room Name
    "room",//Room Type
    [//Room Descriptions
      createDescriptionObject
      (
        "first-entry",
        "As you walk into the room, you realise it is little more than a glorified broom closet, with little space to move about, and only one way in or out."
      ),
      createDescriptionObject
      (
        "second-entry",
        "You re-enter the storage unit finding it undisturbed."
      )
    ],
    [
      createEnemyObject("Scuttler","will jump at your head",0, 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the scuttler", 5, 60, 0),createBodyPartObject("Legs","The legs of the scuttler", 7, 40, 0)], 40)
    ],//Enemies Value
    [//Exits to current room
      createExitObject("hallway03", "east","You step out of the storage unit into a hallway and arrive at a junction. ",false,"")
    ],
    [//Items in the current room
      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png",Math.floor((Math.random() * 10) + 1))
    ],
    [

    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_s-unit1.png"
  );

  var storageUnit2 =
  createRoomObject
  (
    "storage unit 02",//Room Name
    "room",//Room Type
    [
      createDescriptionObject
      (
        "first-entry",
        "As you enter the room, you quickly realise this may not have been this best idea, you see that several shelves and aisles have collapsed into each other, with large supply crates scattered on the floor blocking any path. This must have been a storage unit."
      ),
      createDescriptionObject
      (
        "second-entry",
        "You re-enter the wrecked storage unit and are greeted by the collapsed shelves once again. "
      )
    ],
    [
        createEnemyObject("Scuttler","will jump at your head",0, 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the scuttler", 5, 60, 0),createBodyPartObject("Legs","The legs of the scuttler", 7, 40, 0)], 40)
    ],//Enemies Value
    [//Exits to current room
      createExitObject("hallway12", "south","You walk through the doorway and enter into the hallway",true,"A locked door prevents your passage."),
      createExitObject("reactor room", "north","You crawl into the dark vent, and crawling forward into the vent you hear a distant low hum.",true,"A vent blocks the way."),
      createExitObject("hallway11", "east","You walk past the cleared rubble and out of the room",true,"Fallen rubble and debris block your exit, looks like you're not going that way.")
    ],
    [//Items in the current room
      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1) ),
      createHealthObject("health pack","A health pack, can be used to heal you by 25% ","images/healthpack.png", 25,1)
    ],
    [
       createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","reactor room","Using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent05"),
       createBlockedPathObject("pile of rubble","You approach the rubble and quickly see there is no way through it, you might be able to clear it with something?","use explosives on rubble","hallway11","You plant the explosives in the centre of the rubble and duck into an alcove, the explosives detonate leaving the way clear","rubble04"),
       createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","hallway12","Using your hacking-tool you successfully hack into the door controls and open the door.","door05"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_s-unit2.png"
  );

  var kitchen =
  createRoomObject
  (
    "kitchen",//Room Name
    "room",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter into the room, the lights flickering, you see pots and pans strewn across the floor with a stove still flaming, providing an eerie dim light.The kitchen, whoever left here left in quite a hurry."
      ),
      createDescriptionObject(
        "second-entry",
        "You Re-enter the kitchen and find the pots and pans lying on the floor just like you left it with the stove still quietly burning."
      ),
    ],
     [  createEnemyObject("Scuttler","will jump at your head",0, 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the scuttler", 5, 60, 0),createBodyPartObject("Legs","The legs of the scuttler", 7, 40, 0)], 40)],//Enemies Value
     [//Exits to current room
       createExitObject("mess hall","north","You walk out of the kitchen through the unlocked door into another room.",true,"A locked door prevents your passage."),
       createExitObject("hallway04", "south"," You slip out of the kitchen back into one of the ship's long hallways",false,"")
     ],
     [//Items in the current room
       createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png",Math.floor((Math.random() * 10) + 1) ),
     ],
     [
       createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","mess hall","Using your hacking-tool you succesfully hack into the door controls and open the door.","door02"),
     ], //Number of interactable items in the room
     false, //Has Room been entered/Discovered?
     "map_kitchen.png"
  );
  var messHall =
  createRoomObject
  (
    "mess hall",//Room Name
    "room",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "As you enter the room you see overturned tables and chairs, clearly thrown out of place by that explosion you heard earlier. Looking further into the room you see that the multiple panels have blown off the wall leaving debris scattered in the room."
      ),
      createDescriptionObject(
        "second-entry",
        "Re-entering the mess hall you find it as you left it, cluttered with debris and overturned tables and chairs"
      ),
    ],
    [
      createEnemyObject("Breather","",0, 0, 70, 20, "Talons", [createBodyPartObject("Eyes","The eyes of the breather", 70, 5, 0),createBodyPartObject("Torso","The Torso of the breather", 25, 65, 0),createBodyPartObject("Left Leg","The left leg of the breather", 10, 40, 0),createBodyPartObject("Right Leg","The right leg of the breather", 10, 40, 0),createBodyPartObject("Head","The Head of the breather", 70, 15, 0),createBodyPartObject("Left Arm","The left arm of the breather", 10, 40, 0),createBodyPartObject("Right Arm","The right arm of the breather", 10, 40, 0)], 60)
    ],//Enemies Value
    [//Exits to current room
      createExitObject("hallway12", "north","You step out of the mess hall into another one of the ship's long corridors.",false,""),
      createExitObject("kitchen","south","",true,"A locked door prevents your passage."),
      createExitObject("hallway08", "east","You leave the mess hall and head into another hallway.",false,"")
    ],
    [//Items in the current room
      //createDataPadObject("torn map","A map of part of the ship","You inspect the torn map and see that the north door leads towards the reactor room and the east door leads to the hangar bay.","images/tornmap.png"),
      createWeaponObject("shotgun",5,5,35,"Ranged",["shoot"],"A shotgun, good for turning anything 2 metres in front of you to dust Mag Size: 5","images/lasershotgun.png"),
      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1) ),
      createHealthObject("health kit","A health kit,  can be used to heal you by 50%","images/healthkit.png", 50,1)

    ],
    [
      createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","kitchen","Using your hacking-tool you succesfully hack into the door controls and open the door.","door02"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_messhall.png"
  );

  var maintenanceBay  =
  createRoomObject
  (
    "maintenance bay",//Room Name
    "room",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter the room, and see a wall decorated with various power and repair tools, in the centre of the room are a series of workbenches with several robot and mechanical parts, the maintenance bay."
      ),
      createDescriptionObject(
        "second-entry",
        "You enter back into the maintence bay finding it exactly as you left it."
      ),
    ],
     [],//Enemies Value
    [//Exits to current room
      createExitObject("hallway10", "north","As you crawl forward into the vent, you hear it creak as you slowly crawl through it. Let's hope nothing hears that...",true,"A vent blocks the way."),
      createExitObject("hallway08", "south","You leave the maintence bay and enter back into the hallway.",false,"")
    ],
    [//Items in the current room
      createAmmoObject("energy cells","An energy cell, used to reload weapons","images/energycell.png", Math.floor((Math.random() * 10) + 1) ),
      createWeaponObject("smg",20,20,35,"Ranged",["shoot"],"A sub-machine gun, good for tearing through anything blocking your path. Mag Size: 20","images/lasersmg.png"),
    ],
    [
       createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","hallway10","Using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent03"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_maintenancebay.png"
  );

  var hangarBay  =
  createRoomObject
  (
     "hangar bay",//Room Name
     "room",//Room Type
     [//Room Descriptions
       createDescriptionObject(
         "first-entry",
         "You quickly enter the hangar bay hoping for an escape, however the room is oddly quiet. Looking around the room you see many ships, all in desperate need of repair, at the end of the bay you see a lone escape pod."
       ),
       createDescriptionObject(
         "second-entry",
         "You re-enter the hangar bay, and notice the one last escape pod."
       ),
     ],
     [
      createEnemyObject("Breather","",0, 0, 70, 20, "Talons", [createBodyPartObject("Eyes","The eyes of the breather", 70, 1, 0),createBodyPartObject("Torso","The Torso of the breather", 25, 65, 0),createBodyPartObject("Left Leg","The left leg of the breather", 10, 40, 0),createBodyPartObject("Right Leg","The right leg of the breather", 10, 40, 0),createBodyPartObject("Head","The Head of the breather", 70, 15, 0),createBodyPartObject("Left Arm","The left arm of the breather", 10, 40, 0),createBodyPartObject("Right Arm","The right arm of the breather", 10, 40, 0)], 60)
     ],//Enemies Value
     [//Exits to current room

       createExitObject("hallway14", "west","You leave the hangar bay and enter back into the hallway.",false),
     ],
     [//Items in the current room

     ],
     [
       createInteractableObject("escape pod","You inspect the escape pod and it appears to be fully functional, so time to get out of here!","go escape pod"),
     ], //Number of interactable items in the room
     false, //Has Room been entered/Discovered?
     "map_hangarbay.png"
   );

  var researchLab  =
  createRoomObject
  (
    "research lab",//Room Name
    "room",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "Entering the room you notice a large bit of the ceiling has caved in, leaving several pieces of scientific equipment scattered on the floor along with several crushed research projects. This must have been the research lab. At the back of the room you notice a table with spare console and reactor parts."
      ),
      createDescriptionObject(
        "second-entry",
        "Entering the research lab you find the scattered projects on the floor as you left them."
      ),
    ],
    [createEnemyObject("Scuttler","will jump at your head",0, 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the scuttler", 5, 60, 0),createBodyPartObject("Legs","The legs of the scuttler", 7, 40, 0)], 40)],//Enemies Value
    [//Exits to current room
      createExitObject("hallway09", "south","With the rubble cleared you make your way out of the research lab and into another hallway.",false,""),
      createExitObject("hallway13", "west","You leave the research lab and enter back into the hallway.",false,"")
    ],
    [//Items in the current room
      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1), ),
      createPuzzleKeyObject("data card","A Console data card.","images/datacard.png")
    ],
    [
      createBlockedPathObject("pile of rubble","You approach the rubble and quickly see there is no way through it, you might be able to clear it with something?","use explosives on rubble","hallway09","You plant the explosives in the centre of the rubble and duck into an alcove, the explosives detonate leaving the way clear","rubble03"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_researchlab.png"
  );

  var reactorRoom =
  createRoomObject
  (
    "reactor room",//Room Name
    "room",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter into the reactor room and are met with further debris and damage from the explosion cluttering the room. In the centre of the room lies the central power source, surrounded by 3 blinking consoles and damaged hanging cables. Inspecting the consoles you see that one of them appears damaged."
      ),
      createDescriptionObject(
        "second-entry",
        "Entering the reactor room once more, you find it in the same state you left it in. The central power source and consoles hum quietly"
      ),
    ],
    [
        createEnemyObject("Breather","",0, 0, 70, 20, "Talons", [createBodyPartObject("Eyes","The eyes of the breather", 70, 5, 0),createBodyPartObject("Torso","The Torso of the breather", 25, 65, 0),createBodyPartObject("Left Leg","The left leg of the breather", 10, 40, 0),createBodyPartObject("Right Leg","The right leg of the breather", 10, 40, 0),createBodyPartObject("Head","The Head of the breather", 70, 15, 0),createBodyPartObject("Left Arm","The left arm of the breather", 10, 40, 0),createBodyPartObject("Right Arm","The right arm of the breather", 10, 40, 0)], 60)
    ],//Enemies Value
    [//Exits to current room
      createExitObject("hallway11", "south", " ",true,"A locked door bars your exit from the room."),
      createExitObject("storage unit 02", "west","You crawl into the dark vent, and hear the hum of the reactor fade.",true,"A vent stands in your way. You can't go that way."),
      createExitObject("hallway13", "east","You leave the research lab and enter into the corridor.",false,"")
    ],
    [//Items in the current room

      createDataPadObject("sticky note","A sticky note about the missing data card","The note reads: 'Control panel broken 17:09, new data card required, there may be a spare in the research lab - Benny Harvey'","images/stickynote.png")
    ],
    [
      createPuzzleLockObject("console","You inspect the console, and see a flashing yellow screen along with an error message: ERROR MISSING DATACARD INSERT NEW DATA CARD","insert data card","You insert the data card into the reactor control panel, and the screen begins to flash green and an alert appears."),
      createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","storage unit 02","Using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent05"),
      createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","hallway11","Using your hacking-tool you succesfully hack into the door controls and open the door.","door04"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_reactorroom.png"
  );

  // hallway instanciation
  var hallway01 =
  createRoomObject
  (
    "hallway01",//Room Name
    "hallway",//Room Type
     [//Room Descriptions
       createDescriptionObject(
         "first-entry",
         "The hallway lies quiet and barren, covered in debris from an explosion of some sort."
       ),
       createDescriptionObject(
         "second-entry",
         "The hallway lies quiet."
       ),
     ],
     [  createEnemyObject("Scuttler","will jump at your head",0, 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the scuttler", 5, 60, 0),createBodyPartObject("Legs","The legs of the scuttler", 7, 40, 0)], 40)],//Enemies Value
     [//Exits to current room
       createExitObject("hallway02", "north", "You continue up the hallway north.",false,""),
       createExitObject("hallway04", "east","You crawl into the vent, it is dark and narrow with very little room to move. Pushing forward you emerge in a hallway.",true,"A vent stands in your way, you cannot continue this path."),
       createExitObject("quarters", "west", "You head west through the hallway into the quarters",false,""),
       createExitObject("hallway03","south", "You head south down the hallway and reach a junction",false,"")
     ],
     [//Items in the current room

     ],
     [
       createInteractableObject("broadcast","You inspect the broadcast it flashes 'WARNING: SHIP INTEGRITY COMPROMISED - HOSTILE CONTACT CONFIRMED - ABANDON SHIP!' That doesn't sound good, better try and make it to the hangar bay","no"),
       createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","hallway04","using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent01")
     ], //Number of interactable items in the room
     false, //Has Room been entered/Discovered?
     "map_hallway01.png"
   );

  var hallway02 =
  createRoomObject
  (
    "hallway02",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You reach the end of the hallway and arrive at a humming force-field. It is a dead end."
      ),
      createDescriptionObject(
        "second-entry",
        "You reach the end of the hallway and arrive at a humming force-field. It is a dead end."
      ),
    ],
    [],//Enemies Value
    [//Exits to current room
      createExitObject("hallway01", "south", "You head south down the hallway.",false,"")
    ],
    [//Items in the current room
    ],
    [  createInteractableObject("force-field","You examine the force field and see that beyond it part of the ship's hull has collapsed, leaving the other side of the hallway open to space. This must have been where the explosion happened.","no")
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_hallway02.png"
  );

  var hallway03 =
  createRoomObject
  (
    "hallway03",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You reach the junction and see three different paths."
      ),
      createDescriptionObject(
        "second-entry",
        "You reach the junction and see three different paths"
      ),
    ],
    [],//Enemies Value
    [//Exits to current room
      createExitObject("hallway01", "north","You head north up the hallway",false,""),
      createExitObject("storage unit 01", "west","You head west towards the storage unit",false,""),
      createExitObject("computer lab", "south","You head south towards the computer lab",false,""),

      createExitObject("hallway04","east","With the door now opened you head east into another hallway.",true,"A locked door blocks your path you cannot go that way, you might be able to open it with something?"),
    ],
    [//Items in the current room

    ],
    [
      createInteractableObject("broadcast","You inspect the broadcast it flashes 'WARNING: SHIP INTEGRITY COMPROMISED - HOSTILE CONTACT CONFIRMED - ABANDON SHIP!' That doesn't sound good, better try and make it to the hangar bay","no"),
      createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","hallway04","Using your hacking-tool you succesfully hack into the door controls and open the door.","door01"),
      createInteractableObject("sign","You examine the sign and and see that the computer lab is to the south, a storage unit lies to the west, and a hallway to the mess hall is to the east.")
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
     "map_hallway03.png"
  );

  var hallway04 =
  createRoomObject
  (
    "hallway04",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You emerge into a dark hallway, your eyes quickly adjust you are surrounded by fallen debris and cables from the bulkheads above."
      ),
      createDescriptionObject(
        "second-entry",
        "You re-enter the dark hallway finding it cluttered with the same debris."
      ),
    ],
    [  createEnemyObject("Scuttler","will jump at your head",0, 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the scuttler", 5, 60, 0),createBodyPartObject("Legs","The legs of the scuttler", 7, 40, 0)], 40)],//Enemies Value
    [//Exits to current room
      createExitObject("kitchen", "north","You head north to the end of the hallway into a room.",false,""),
      createExitObject("hallway05", "east","You head east into another one of the ships long hallways. ",false,""),
      createExitObject("hallway01", "west","You crawl into the vent,it is dark and narrow with very little room to move, pushing forward you emerge in a hallway.",true,"The way is blocked by vent you can't go that direction."),
      createExitObject("hallway03","south","With the door opened you head south into another hallway.",true,"A locked door blocks your path.You can't go that way.")

    ],
    [//Items in the current room
      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1) ),
      createHealthObject("health pack","A health pack it can be used to heal you by 50%","images/healthpack.png", 25,1)
    ],
    [
      createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","hallway01","using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent01"),
      createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","hallway03","Using your hacking-tool you succesfully hack into the door controls and open the door.","door01"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
     "map_hallway04.png"
  );

  var hallway05 =
  createRoomObject
  (
    "hallway05",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You step into the hallway, it is barren, damaged cables hang loose from the ceiling sparking, best watch your step."
      ),
      createDescriptionObject(
        "second-entry",
        "You enter the hallway once more it lies quiet."
      ),
    ],
     [  createEnemyObject("Scuttler","will jump at your head",0, 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the scuttler", 5, 60, 0),createBodyPartObject("Legs","The legs of the scuttler", 7, 40, 0)], 40)],//Enemies Value
     [//Exits to current room
       createExitObject("hallway04", "west","You head north to the end of the hallway into a room.",false,""),
       createExitObject("armory","south","You step out of the hallway and walk into a room.",false,""),
       createExitObject("hallway07", "east","With the rubble cleared and your ears still ringing, you make your way east doen the hall into another corridor.",true,"You can't go that way debris and rubble from the hallway's panelling blocks your path."),
       createExitObject("hallway08", "north","You crawl into the dark vent, and slowly move through it,you emerge into a long hallway.",true,"A vent blocks your path you can't go that way.")
     ],
     [//Items in the current room

     ],
     [
       createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","hallway08","Using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent02"),
       createBlockedPathObject("pile of rubble","You approach the rubble and quickly see there is no way through it, you might be able to clear it with something?","use explosives on rubble","hallway07","You plant the explosives in the centre of the rubble and duck into an alcove, the explosives detonate leaving the way clear","rubble02"),
       createInteractableObject("broadcast","You inspect the broadcast it flashes 'WARNING: SHIP INTEGRITY COMPROMISED HOSTILE CONTACT CONFIRMED ABANDON SHIP! ' That doesn't sound good better try and make it to the hangar bay","no"),
     ], //Number of interactable items in the room
     false, //Has Room been entered/Discovered?
      "map_hallway05.png"
   );

  var hallway06 =
  createRoomObject
  (
    "hallway06",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter into the hallway and find that the emergency lighting has been damaged, leaving the hallway dark besides a single red dim light."
      ),
      createDescriptionObject(
        "second-entry",
        "You enter into the dim hallway once more."
      ),
    ],
     [
          createEnemyObject("Breather","",0, 0, 70, 20, "Talons", [createBodyPartObject("Eyes","The eyes of the breather", 70, 5, 0),createBodyPartObject("Torso","The Torso of the breather", 25, 65, 0),createBodyPartObject("Left Leg","The left leg of the breather", 10, 40, 0),createBodyPartObject("Right Leg","The right leg of the breather", 10, 40, 0),createBodyPartObject("Head","The Head of the breather", 70, 15, 0),createBodyPartObject("Left Arm","The left arm of the breather", 10, 40, 0),createBodyPartObject("Right Arm","The right arm of the breather", 10, 40, 0)], 60)
     ],//Enemies Value
     [//Exits to current room
       createExitObject("armory", "north","you head north out of the dim hallway back into the armory.",false,""),
       createExitObject("computer lab", "west","With the rubble cleared you head out of the hallway into another room.",true,"You cannot go that way large rubble and debris block the path.")
     ],
     [//Items in the current room
       createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1) ),
       createHealthObject("health kit","A health kit it can be used to heal you by 50%","images/healthkit.png", 50,1)
     ],
     [
        createBlockedPathObject("pile of rubble","You approach the rubble and quickly see there is no way through it, you might be able to clear it with something?","use explosives on rubble","computer lab","You plant the explosives in the centre of the rubble and duck into an alcove, the explosives detonate leaving the way clear","rubble01"),
     ], //Number of interactable items in the room
     false, //Has Room been entered/Discovered?
      "map_hallway06.png"
   );

  var hallway07 =
  createRoomObject
  (
    "hallway07",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You arrive at a junction and see multiple paths to take."
      ),
      createDescriptionObject(
        "second-entry",
        "You arrive at a junction and see multiple paths to take."
      ),
    ],
    [
      createEnemyObject("Breather","",0, 0, 70, 20, "Talons", [createBodyPartObject("Eyes","The eyes of the breather", 60, 5, 0),createBodyPartObject("Torso","The Torso of the breather", 25, 65, 0),createBodyPartObject("Left Leg","The left leg of the breather", 10, 40, 0),createBodyPartObject("Right Leg","The right leg of the breather", 10, 40, 0),createBodyPartObject("Head","The Head of the breather", 70, 20, 0),createBodyPartObject("Left Arm","The left arm of the breather", 10, 40, 0),createBodyPartObject("Right Arm","The right arm of the breather", 10, 40, 0)], 60)
    ],//Enemies Value
    [//Exits to current room
      createExitObject("hallway14", "east","You continue west further into the hallway",true,"You can't go that way a powered door prevents your passage, it needs to be powered in order to be opened."),
      createExitObject("hallway09", "north","",true,"A locked door blocks your path you cannot go that way, you might be able to open it with something?"),
      createExitObject("hallway08", "west","You head east down the hallway",false,""),
      createExitObject("hallway05", "south","With the rubble cleared and your hearing damaged, you make your way east doen the hall into another corridor. Maybe get ear muffs next time?",true,"You cannot go that way large rubble and debris block the path.")
    ],
    [//Items in the current room

    ],
    [
      createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","hallway09","Using your hacking-tool you succesfully hack into the door controls and open the door.","door03"),
      createBlockedPathObject("pile of rubble","You approach the rubble and quickly see there is no way through it, you might be able to clear it with something?","use explosives on rubble","hallway05","You plant the explosives in the centre of the rubble and duck into an alcove, the explosives detonate leaving the way clear","rubble02"),
      createInteractableObject("sign","You examine the sign and and see that the hangar bay is to the east end of the hall, the research lab is towards the north end of the hall,the armory is towards the south and the maintenance bay and mess hall are to the east.","no"),
      createInteractableObject("powered door","You examine the door and and see that it is blocking access to the hangar bay. It might open if the ship's power is restored.","no")
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_hallway07.png"
  );

  var hallway08 =
  createRoomObject
  (
    "hallway08",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter into the hallway and find it barren apart from burnt metal and scrap from the supports of the hall. Empty energy cells and plasma marks paint the hallway."
      ),
      createDescriptionObject(
        "second-entry",
        "You enter back into the hall and find it quiet, the plasma marks on the wall still smouldering."
      ),
    ],
    [
        createEnemyObject("Scuttler","will jump at your head",0, 0, 20, 10, "Talons", [createBodyPartObject("Body","The Body of the scuttler", 5, 60, 0),createBodyPartObject("Legs","The legs of the scuttler", 7, 40, 0)], 40)
    ], //Enemies Value
    [//Exits to current room
      createExitObject("maintenance bay", "north"," You head north out of the hallway into a room",false,""),
      createExitObject("mess hall", "west"," You head east down the hallway towards a room",false,""),
      createExitObject("hallway07", "east","You head west down the hallway towards a junction",false,""),
      createExitObject("hallway05","south","You crawl into the dark vent, and slowly move through it,and emerge into a long hallway.",true,"You cannot go that way a vent blocks your path.")
    ],
    [//Items in the current room
      createHealthObject("health pack","A health pack it can be used to heal you by 25%","images/healthpack.png", 25,1)

    ],
    [
      createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","hallway05","Using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent02"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_hallway08.png"
  );

  var hallway09 =
  createRoomObject
  (
    "hallway09",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "The hallway lies desolate, broken computer panels and circuitry scatter the hall."
      ),
      createDescriptionObject(
        "second-entry",
        "The hallway lies desolate, broken computer panels and circuitry scatter the hall."
      ),
    ],
    [], //Enemies Value
    [//Exits to current room
      createExitObject("research lab", "north","You head north down the hall ",true,"You attempt to head north down the hall but are halted by a large pile of debris and metal scrap.You cannot go that way."),
      createExitObject("hallway07", "south","With the door unlocked you continue down the hall.",true,"You attempt to head south down the hall but arrive at a locked door blocking your path."),
      createExitObject("hallway10", "west","You continue west down the hallway",false,"")
    ],
    [//Items in the current room
    ],
    [
      createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","hallway07","Using your hacking-tool you succesfully hack into the door controls and open the door.","door03"),
      createBlockedPathObject("pile of rubble","You approach the rubble and quickly see there is no way through it, you might be able to clear it with something?","use explosives on rubble","research lab","You plant the explosives in the centre of the rubble and duck into an alcove, the explosives detonate leaving the way clear","rubble03"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
      "map_hallway09.png"
  );

  var hallway10 =
  createRoomObject
  (
    "hallway10",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter into the hall and find it cluttered with empty supply cases. Looks like it has been picked clean."
      ),
      createDescriptionObject(
        "second-entry",
        "You enter into the hall and find it cluttered with empty supply cases."
      ),
    ],
    [], //Enemies Value
    [//Exits to current room
      createExitObject("hallway13", "north","You crawl slowly though the vent, the light from the hallway infront of you illuminating your path.",true,"You cannot go that way a damaged vent blocks the way."),
      createExitObject("hallway11","west","You continue west down the hallway towards a junction.",false,""),
      createExitObject("hallway09","east","You continue east down the hallway.",false,""),
      createExitObject("maintenance bay", "south","You crawl into the vent and make your way slowly through the tight space.",true,"You cannot go that way a vent blocks the way.")
    ],
    [//Items in the current room
    ],
    [
      createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","maintenance bay","Using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent03"),
      createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","hallway13","Using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent04")
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?#
     "map_hallway10.png"
  );

  var hallway11 =
  createRoomObject
  (
    "hallway11",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You arrive at a junction and see multiple paths to take."
      ),
      createDescriptionObject(
        "second-entry",
        "You arrive at a junction and see multiple paths to take."
      ),
    ],
    [], //Enemies Value
    [//Exits to current room
      createExitObject("reactor room", "north","With the door unlocked you head north out of the hallway into a room.",true,"You can't go that way it is blocked by a locked door."),
      createExitObject("storage unit 02", "west","With the pile of rubble cleared you head out of the hallway and into a room.",true,"You attempt to head west down the hall but are stopped by a large pile of burnt metal and debris you cannot go that way."),
      createExitObject("hallway10", "east", "you continue east down the hallway.",false,""),
      createExitObject("hallway12", "south", "you continue south down the hallway and see another junction",false,"")
    ],
    [//Items in the current room
    ],
    [
      createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","reactor room","Using your hacking-tool you succesfully hack into the door controls and open the door.","door04"),
      createBlockedPathObject("pile of rubble","You approach the rubble and quickly see there is no way through it, you might be able to clear it with something?","use explosives on rubble","storage unit 02","You plant the explosives in the centre of the rubble and duck into an alcove, the explosives detonate leaving the way clear","rubble04"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_hallway11.png"
  );

  var hallway12 =
  createRoomObject
  (
    "hallway12",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter into the hallway and arrive at a junction with multiple paths."
      ),
      createDescriptionObject(
        "second-entry",
        "You enter into the hallway and arrive at a junction with multiple paths."
      ),
    ],
    [], //Enemies Value
    [//Exits to current room
      createExitObject("hallway11", "north","You head north up the hallway.",false,""),
      createExitObject("storage unit 02", "west","",true,"You attempt to go west up the hallway and are stopped by a locked door you can't go that way."),
      createExitObject("mess hall", "east","You head south down the hallway and enter into a room.",false,"")
    ],
    [//Items in the current room

      createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1) ),
    ],
    [
      createBlockedPathObject("locked door","You walk towards the door and see that the control panel has locked, you might be able to unlock it with something?","use hacking-tool on door","storage unit 02","Using your hacking-tool you succesfully hack into the door controls and open the door.","door05"),
      createInteractableObject("force-field","You examine the force field and see that beyond it part of the ship's hull has collapsed, leaving the other side of the hallway open to space","no"),
    ], //Number of interactable items in the room
    false, //Has Room been entered/Discovered?
    "map_hallway12.png"
  );

  var hallway13 =
  createRoomObject
  (
    "hallway13",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter into the hallway and find it covered in metal scrap and debris"
      ),
      createDescriptionObject(
        "second-entry",
        "You enter into the hallway and find it covered in metal scrap and debris"
      ),
    ],
     [], //Enemies Value
     [//Exits to current room
       createExitObject("research lab", "east","You head west down the hallway into the Research lab.",false,""),
       createExitObject("reactor room", "west","You head east down the hallway into the Reactor room.",false,""),
       createExitObject("hallway10", "south","You crawl slowly though the vent, and see the light from a hallway at the end of the vent.",true,"You cannot go that way a vent blocks your path.")
     ],
     [//Items in the current room
        createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1)),
        createHealthObject("health kit","A health kit, can be used to heal you by 50%","images/healthkit.png", 50,1)
     ],
     [
       createBlockedPathObject("vent","You try to open the vent and remove its screws but they don't budge, you might be able to cut it open with something?","use blowtorch on vent","hallway10","Using your blowtorch you succesfully burn through the vent supports, it falls to the floor leaving the dark vent open.","vent04"),
     ], //Number of interactable items in the room
     false, //Has Room been entered/Discovered?
     "map_hallway13.png"
   );

  var hallway14=
  createRoomObject
  (
    "hallway14",//Room Name
    "hallway",//Room Type
    [//Room Descriptions
      createDescriptionObject(
        "first-entry",
        "You enter into the hallway though the now powered door and see a sign for the hangar bay."
      ),
      createDescriptionObject(
        "second-entry",
        "You enter into the hallway though the now powered door and see a sign for the hangar bay."
      ),
    ],
     [], //Enemies Value
     [//Exits to current room
       createExitObject("hangar bay", "east","You head west into the hangar bay.", false,""),
       createExitObject("hallway07", "west","You head east back into the hallway.", false,""),
     ],
     [//Items in the current room
        createAmmoObject("energy cells","An energy cell, used to reload weapons.","images/energycell.png", Math.floor((Math.random() * 10) + 1) ),
        createHealthObject("health kit","A health kit, can be used to heal you by 50%","images/healthkit.png", 50,1),
        createHealthObject("health pack","A health pack, can be used to heal you by 25%","images/healthpack.png", 50,1)
     ],
     [], //Number of interactable items in the room
     false, //Has Room been entered/Discovered?
     "map_hallway14.png"
   );

  rooms.push(quarters);
  rooms.push(computerLab);
  rooms.push(armory);
  rooms.push(storageUnit1);
  rooms.push(storageUnit2);
  rooms.push(messHall);
  rooms.push(kitchen);
  rooms.push(maintenanceBay);
  rooms.push(hangarBay);
  rooms.push(reactorRoom);
  rooms.push(researchLab);
  rooms.push(hallway01);
  rooms.push(hallway02);
  rooms.push(hallway03);
  rooms.push(hallway04);
  rooms.push(hallway05);
  rooms.push(hallway06);
  rooms.push(hallway07);
  rooms.push(hallway08);
  rooms.push(hallway09);
  rooms.push(hallway10);
  rooms.push(hallway11);
  rooms.push(hallway12);
  rooms.push(hallway13);
  rooms.push(hallway14);

  rooms.forEach((item, i) => {
     if(item.roomName === "computer lab")
     {
       item.interactables.push(createTerminalObject("terminal", "A terminal flickers in the corner of the computer lab with the words 'insert password required' on the screen (try insert password + the password if you find it)", "", ""));
     }
  });


}
function askPlayer()
{
  var text1="The ship is your oyster what would you like to do " + player.username + "?";
  var text2="The floor is yours what would you like to do " + player.username + "?";
  var text3="What now " + player.username + "?";
  var text4="Your move " + player.username + "?";
  var text5="What shall you do " + player.username + ", I wonder?";
  var text6="What next " + player.username +"?";
  var randomTextToPlayer=[];
  randomTextToPlayer.push(text1);
  randomTextToPlayer.push(text2);
  randomTextToPlayer.push(text3);
  randomTextToPlayer.push(text4);
  randomTextToPlayer.push(text5);
  randomTextToPlayer.push(text6);
  var randomNum= randomNumberForArray(randomTextToPlayer.length);
  document.getElementById("text-display").innerHTML += "</br><span id='userTextGame'>>"+randomTextToPlayer[randomNum]+"</span>";

}
function updateObjectives()
{
  if(rooms[getRoomPos("hangar bay")].roomDiscovered==true && player.currentRoom.roomName=="hangar bay"&& document.getElementById("escapeObj")==null){
      document.getElementById("hangarObj").style.display="none";
      document.getElementById("objectivesList").innerHTML+="<li id='escapeObj'>Escape!</li>";
        document.getElementById("text-display").innerHTML+="</br><span id = 'userTextObjective'>+++New Objective+++";
  }
  if(rooms[getRoomPos("hallway07")].roomDiscovered==true && player.currentRoom.roomName=="hallway07" && document.getElementById("doorObj")==null){
     document.getElementById("startObj").style.display="none";
     document.getElementById("objectivesList").innerHTML+="<li id='doorObj'>Go to the reactor room to bring the power back online.</li>";
        document.getElementById("text-display").innerHTML+="</br><span id = 'userTextObjective'>+++New Objective+++";
  }
  if(rooms[getRoomPos("reactor room")].roomDiscovered==true && player.currentRoom.roomName=="reactor room" && document.getElementById("powerObj")==null){
     document.getElementById("doorObj").style.display="none";
     document.getElementById("objectivesList").innerHTML+="<li id='powerObj'>Find a way to bring the power back online.</li>";
        document.getElementById("text-display").innerHTML+="</br><span id = 'userTextObjective'>+++New Objective+++";
  }
}

function displayAllEnemies()
{
  if(player.currentRoom.enemies.length > 0)
  {
    player.currentRoom.enemies.forEach((item, i) => {
      document.getElementById("text-display").innerHTML += "</br>>" +item.enemyType;
    });

  }
}
function getRoomTextDesc(currentRoom,entry)
{
  var roomDesc="";
  var textDescs= currentRoom.roomDescriptions;
  for (let i = 0; i < textDescs.length; i++) {
    if(textDescs[i].action === entry )
    {
      roomDesc=(textDescs[i].text);
    }
  }
  return roomDesc;
}
function outputCurrentRoomDesc()
{
  var scanBool = false;
  directionColourResetBlue();
  document.getElementById("gameMap").src="images/"+player.currentRoom.mapFilePath;
  if(player.currentRoom.roomDiscovered===false)
  {
    roomDesc= getRoomTextDesc(player.currentRoom,"first-entry");
    player.currentRoom.roomDiscovered=true;
  }
  else
  {
    roomDesc= getRoomTextDesc(player.currentRoom,"second-entry");
    var availableDirections = [];
    player.currentRoom.exits.forEach((item, i) => {
      availableDirections.push(item.orientation);
      scanBool = true;
    });
  }
  document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>>" +roomDesc + "</span>";
  if(scanBool === true)
  {
    document.getElementById("text-display").innerHTML += "</br>";
    directionColourAllRed();
    scanning(availableDirections);
    document.getElementById("text-display").innerHTML += "</br>";
  }
  if(player.currentRoom.enemies.length > 0)
  {
    enemyDetectionRoll(0);

  }
  else
  {
    askPlayer();
    document.getElementById("text-display").innerHTML += "</br>";
  }
  randomPlaceHolderText();
  scrollBarAnchor();
}
function outputSmallEnemyDescriptions()
{
  var smallEnemyDescriptions = ["You can hear something scuttling beside you", "Small sinister screeches bounce off the walls simply piercing your ears", "You feel another presence in the area"]
  var length = smallEnemyDescriptions.length;
  var pickedNumber = randomNumberForArray(length);

  if(pickedNumber >= smallEnemyDescriptions.length)
  {
    pickedNumber = pickedNumber -1;
  }

  //document.getElementById("text-display").innerHTML += "</br><span>>"+pickedNumber+"</span>"; - use for debugging
  document.getElementById("text-display").innerHTML += "</br><span id= 'userTextCaution'>>"+ smallEnemyDescriptions[pickedNumber] +"</span>";
  //, if you're not bleeding it definitely hasn't detected you yet

}
function outputBigEnemyDescriptions()
{
  var bigEnemyDescriptions = ["You hear the heavy breath of something somewhere within the vicinity", "You hear the rambling of intelligent noises that you are certain you have never heard before", "As you enter the hallway you can see a large creature moping against a box"];
  var length = bigEnemyDescriptions.length;
  var pickedNumber = randomNumberForArray(length);

  if(pickedNumber >= bigEnemyDescriptions.length)
  {
    pickedNumber = pickedNumber -1;
  }
    //document.getElementById("text-display").innerHTML += "</br><span>>"+pickedNumber+"</span>"; - use for debugging
  document.getElementById("text-display").innerHTML += "</br><span id= 'userTextCaution'>>" + bigEnemyDescriptions[pickedNumber]+"</span>";
}
function enemyAwarenessDescription(typeArray)
{
  if(typeArray.length == 1)
  {
    if(typeArray[0] == 1)
    {
      outputSmallEnemyDescriptions();
    }
    else
    {
      outputBigEnemyDescriptions();
    }
  }
}
function enemyDetection()
{
  var typeArray = [];
  player.currentRoom.enemies.forEach((item, i) => {
    if(item.enemyType == "Scuttler")
    {
      typeArray.push(1);
    }
    else
    {
      typeArray.push(2);
    }
  });
  enemyAwarenessDescription(typeArray);
}
function enemyDetectionRoll(reRollFlag)
{
  var returnType = false;
  var roll = randomNumber(100);
  var spotted = false;
  player.currentRoom.enemies.forEach((item, i) =>
  {
    if(roll <= item.detection)
    {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextCaution'>!You have been spotted by an enemy!</span>";
      //call method to beign combat system
      window.combatSetupV2();
    }
    else
    {
      if(reRollFlag === 0)
      {
        if(item.ambientDescription === 0)
        {
          enemyDetection();
          askPlayer();
        }
        else
        {
          document.getElementById("text-display").innerHTML += "</br><span id= 'userTextCaution'>>"+ item.ambientDescription +"</span>";
          askPlayer();
        }
      }
      else if (reRollFlag === 1)
      {
        document.getElementById("text-display").innerHTML += "</br><span id= 'userTextCaution'>>You pick up the item without getting spotted by the creature in your room</span>";
        returnType = true;

      }
      else {
        document.getElementById("text-display").innerHTML += "</br><span id= 'userTextCaution'>>You examine the item without getting spotted by the creature in your room</span>";
        returnType = true;
      }
    }
  });
  return returnType;
}
function outputCurrentRoomExits()
{
//  document.getElementById("text-display").innerHTML += player.currentRoom.roomDescription;
   //var currentRoom=player.currentRoom.roomName;

   var availableDirections = [];
   if(player.currentRoom.type=="hallway"){
     document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>" + ">You look around the hallway, "+ "</span>";
        document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>------------------------------------------</span>";
   }
   else{
    document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>" + ">You look around the " + player.currentRoom.roomName+"," + "</span>";
    document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>------------------------------------------</span>";
}

   player.currentRoom.exits.forEach((item, i)=> {
   if(player.currentRoom.type=="hallway")
   {
     document.getElementById("text-display").innerHTML += "</br>-" + "there is a path to the <span id= 'userAvailableDirection'>" + item.orientation  + "</span>";
   }
   else
   {
     document.getElementById("text-display").innerHTML += "</br>-" + "there is a door to the <span id= 'userAvailableDirection'>" + item.orientation + "</span>";
   }
   if(item.blocked === true)
   {
     player.currentRoom.interactables.forEach((blockages, i) => {
       if(blockages.exitRoomName == item.exitRoomName)
       {
         document.getElementById("text-display").innerHTML += ", blocked by a <span id= 'userAvailableDirection'>" + blockages.interactableName  + "</span>";

       }
     });
   }
   availableDirections.push(item.orientation);
  });
  ;

  directionColourAllRed();
  document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>------------------------------------------</span>";
  scanning(availableDirections);
  document.getElementById("text-display").innerHTML += "</br>";
  scrollBarAnchor();
}
function scanning(availableDirections)
{
  if(availableDirections.includes("east"))
  {
    document.getElementById("east").style = "background: repeating-linear-gradient(180deg,#082316,#082316 10px,#05170E 10px,#05170E 20px); color: #27910E";
  }
  if(availableDirections.includes("north"))
  {
    document.getElementById("north").style = "background: repeating-linear-gradient(180deg,#082316,#082316 10px,#05170E 10px,#05170E 20px); color: #27910E";
  }
  if(availableDirections.includes("south"))
  {
    document.getElementById("south").style = "background: repeating-linear-gradient(180deg,#082316,#082316 10px,#05170E 10px,#05170E 20px); color: #27910E";
  }
  if(availableDirections.includes("west"))
  {
    document.getElementById("west").style = "background: repeating-linear-gradient(180deg,#082316,#082316 10px,#05170E 10px,#05170E 20px); color: #27910E";
  }
  directionEnemyCaution(availableDirections);
}
function directionBlocked(availableDirections)
{
  player.currentRoom.exits.forEach((item, i) =>
  {
    if(availableDirections.includes(item.orientation))
    {
      if(item.blocked === true)
      {
          document.getElementById(item.orientation).style = "background: repeating-linear-gradient(180deg,#5F2D0A,#5F2D0A 10px,#813D0E 10px,#813D0E 20px); color: #DD6B1C";
      }
    }
  });
}
function directionEnemyCaution(availableDirections)
{
  player.currentRoom.exits.forEach((item, i) =>
  {
    if(availableDirections.includes(item.orientation))
    {
       rooms.forEach((room, i) =>{
         if(item.exitRoomName === room.roomName)
         {
           if(room.enemies.length > 0)
           {
              document.getElementById(item.orientation).style = "background: repeating-linear-gradient(180deg,#25082A,#25082A 10px,#44174C 10px,#44174C 20px); color: #C14CD6";
              document.getElementById("text-display").innerHTML += "</br><span id = 'userTextCaution'>*Enemy "+ item.orientation +" with a " + roomDetectionCalculator(room) + "% chance of detection*" + "</span>";

           }
         }
       });
    }
  });
  directionBlocked(availableDirections);
}
function roomDetectionCalculator(room)
{
  var highestChance = 0;
  room.enemies.forEach((item, i) =>
  {
    if(item.detection > highestChance)
    {
      highestChance = item.detection;
    }
  });
  return highestChance;
}
function directionColourResetBlue()
{
  document.getElementById("north").style = "background: repeating-linear-gradient(180deg,#041114,#041114 10px,#09252B 10px,#09252B 20px); #2EA6BF";
  document.getElementById("east").style = "background: repeating-linear-gradient(180deg,#041114,#041114 10px,#09252B 10px,#09252B 20px); #2EA6BF";
  document.getElementById("south").style = "background: repeating-linear-gradient(180deg,#041114,#041114 10px,#09252B 10px,#09252B 20px); #2EA6BF";
  document.getElementById("west").style = "background: repeating-linear-gradient(180deg,#041114,#041114 10px,#09252B 10px,#09252B 20px); #2EA6BF";
}
function directionColourAllRed()
{
  document.getElementById("north").style = "background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px); color: #C71313";
  document.getElementById("east").style = "background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px); color: #C71313";
  document.getElementById("south").style = "background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px); color: #C71313";
  document.getElementById("west").style = "background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px); color: #C71313";

}
function commandInput()
{
  var rawInput = document.getElementById("gameInput").value.trim();
  var gameInputText = rawInput.toLowerCase();
  document.getElementById("gameInput").value = "";
  if(/^ *$/.test(gameInputText))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userText'>" +">Doing nothing is not an option"+"</span>";
  }
  else
  {
    processCommands(gameInputText);
  }
  var elem = document.getElementById('text-display');
  elem.scrollTop = elem.scrollHeight;
}
function processCommands(input)
{
  var words = input.split(" ");
  var currentRoom=player.currentRoom.roomName;
  if(words.includes("go") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    move(words);
  }
  else if (words.includes("west") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    move(words);
  }
  else if (words.includes("east") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    move(words);
  }
  else if (words.includes("north") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    move(words);
  }
  else if (words.includes("south") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    move(words);
  }
  else if (words.includes("search") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    search(player.currentRoom);
  }
  else if (words.includes("examine") == true|| words.includes("inspect") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    if(words.includes("robot") && robotBoolean===true)
    {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextNormal'>>Examining your buddy you can see a scraped out name on his chest, it reads 'Han-Tyumi'</span>";
    }
    else {
      words.splice(0,1);
      var examinedItem = words.toString().replace(/,/g," ");
      examineInteractables(player.currentRoom.interactables.length,examinedItem);
    }
  }
  else if (words.includes("look") == true)
  {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
      outputCurrentRoomExits();
  }
  else if (words.includes("hint") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    giveHint();

  }
  else if (words.includes("reload") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    reload();
  }
  else if (words.includes("equip") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    words.splice(0,1);
    var weaponToBeEquipped = words.toString().replace(/,/g," ");
    equipWeapon(weaponToBeEquipped);
  }
  else if (words.includes("unequip") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    words.splice(0,1);
    var weaponToBeUnequipped = words.toString().replace(/,/g," ");
    unequipWeapon(weaponToBeUnequipped);
  }
  else if(words[0] == ("pick") && words[1] == ("up") || words.includes("pickup"))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    if(words.includes("pickup"))
    {
      if(words.length === 1)
      {
        document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>Make sure you type in the item you want</span>";

      }
      else
      {
        words.splice(0,2);
        var pickedUpItem = words.toString().replace(/,/g," ");
        pickUpItems(player.currentRoom,pickedUpItem,false);
      }
    }
    else
    {
      if(words.length === 2)
      {
        document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>Make sure you type in the item you want</span>";

      }
      else
      {
        words.splice(0,2);
        var pickedUpItem = words.toString().replace(/,/g," ");
        pickUpItems(player.currentRoom,pickedUpItem,false);
      }
    }
  }
  else if(words.includes("use"))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    useItem(words);
  }
  else if(words.includes("drop"))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    words.splice(0,1);
    var itemBeingDropped = words.toString().replace(/,/g," ");
    dropItem(itemBeingDropped);
  }
  else if(words.includes("take"))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    if(words.length === 1)
    {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>Make sure you type in the item you want</span>";

    }
    else
    {
      words.splice(0,1);
      var pickedUpItem = words.toString().replace(/,/g," ");

      pickUpItems(player.currentRoom,pickedUpItem,false);
    }
  }
  else if(words.includes("read"))
  {
    read(words);
  }
  else if(words.includes("insert"))
  {
    words.splice(0,1);
    var itemToBeInserted = words.toString().replace(/,/g," ");
    insert(itemToBeInserted);
  }
  else if(customCommandInput(words.toString().replace(/,/g," "))!=null)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    processCustomCommand(customCommandInput(words.toString().replace(/,/g," ")));
  }
  else if(words.includes("attack") || words.includes("shoot") || words.includes("punch"))
  {
    sneakAttackEnemy();
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>I don't know this command: '" +input+"'</span>";
  }
  scrollBarAnchor();
}
function insert(words)
{
  var consoleBoolean = false;
  var terminalBoolean = false;
  var consoleInteractable;
  var terminalInteractable;
  console.log(words);
  player.currentRoom.interactables.forEach((interactable, i) => {
    if(interactable.interactableName === "console")
    {
      consoleBoolean = true;
      consoleInteractable = interactable;
    }
    else if (interactable.interactableName === "terminal")
    {
      terminalBoolean = true;
      terminalInteractable = interactable;
    }
  });
  if(consoleBoolean === true)
  {
    if(words.includes("datacard") || words.includes("data card"))
    {
      processCustomCommand(consoleInteractable);
    }
  }
  else if (terminalBoolean === true)
  {
    if(words.includes("password"))
    {
      passwordMatch(words, terminalInteractable);
    }
  }
  else if(terminalBoolean === false || consoleBoolean === false)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You can't use this command here</span>";
  }
}

function passwordMatch(words, interactable)
{
  if(words.includes(interactable.password))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextObjective'>>As you complete the password a large container lights up as robot steps out of it whirring the phrase 'assisting for combat... ready'</span>";
    robotBoolean = true;
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>That is the incorrect pasword beeps the terminal</span>";
  }

}

function read(words)
{
  var selectedItem;
  if(words.includes("passpad") || words.includes("sticky") || words.includes("note") || words.includes("pass") || words.includes("pad"))
  {
    var stickyNote = false;
    var passwordPad = false;
    var tornMap= false;
    if(words.includes("passpad")  || words.includes("pass") || words.includes("pad"))
    {
      passwordPad = true;
    }
    else if (words.includes("sticky") || words.includes("note"))
    {
      stickyNote = true;
    }
    else if(words.includes("tornmap")|| words.includes("torn")|| words.includes("map")){
      tornMap=true;
    }
    if(passwordPad === true)
    {
      player.inventory.forEach((item, i) => {
        if(item.item.itemName === "passPad")
        {
          selectedItem = item;
        }
      });
    }
    else if(stickyNote === true)
    {
      player.inventory.forEach((item, i) => {
        if(item.item.itemName === "sticky note")
        {
          selectedItem = item;
        }
      });
    }
    else if(tornMap === true)
    {
      player.inventory.forEach((item, i) => {
        if(item.item.itemName === "torn map")
        {
          selectedItem = item;
        }
      });
    }
    document.getElementById("text-display").innerHTML += "</br><span id='userTextObjective'>>This item reads: "+selectedItem.information+"</span>";
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You can't read this item</span>";
  }

}

function sneakAttackEnemy(words)
{
  if(player.currentRoom.enemies.length > 0)
  {
    var hitchance;
    if(player.equippedWeapon.item.itemName === "pistol" || player.equippedWeapon.item.itemName === "revolver" || player.equippedWeapon.item.itemName === "shotgun" || player.equippedWeapon.item.itemName === "smg")
    {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You aim your weapon at the imperceptive enemy</span>";
      if(player.charClass !== "SpaceCowboy")
      {
        hitchance = 60;
        if(randomNumber(100)<= hitchance)
        {
          sneakAttack();
        }
        else
        {
          document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You missed and now have alerted the enemy</span>";
        }
      }
      else
      {
        hitchance = 80;
        if(randomNumber(100)<= hitchance)
        {
          sneakAttack();
        }
        else
        {
          document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You missed and now have alerted the enemy</span>";
        }
      }
    }
    else
    {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You aim your fists at the imperceptive enemy</span>";
      sneakAttack();
    }
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>There are no enemies in this room to sneak attack'</span>";
  }
}
function sneakAttack()
{
  document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You successfully hit the enemy</span>";
  if(player.equippedWeapon.item.itemName !== "fist")
  {
    var sneakDamage =  player.equippedWeapon.damage * 1.5;
    var enemyHealthFull = player.currentRoom.enemies[0].health;
    var enemyHealthAfterAttack;
    player.currentRoom.enemies[0].health -= sneakDamage;
    enemyHealthAfterAttack = player.currentRoom.enemies[0].health;
    enemyHealthFull -= enemyHealthAfterAttack;

    var killChance = 1;
    if(randomNumber(4) <= killChance)
    {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>Hit the enemy for all of its health</span>";
      player.currentRoom.enemies.splice(0, 1);
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You manage to kill the enemy stone dead, making it look up to the great space eyes of the sky</span>";
    }
    else
    {

      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>Hit the enemy for "+ enemyHealthFull+" damage</span>";
      if(player.currentRoom.enemies[0].health <= 0)
      {
        player.currentRoom.enemies.splice(0, 1);
        document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You manage to kill the enemy stone dead, making it look up to the great space eyes of the sky</span>";
      }
      else
      {
        document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>Enemy health left: "+player.currentRoom.enemies[0].health+ "</span>";
        window.combatSetupV2();
      }
    }
  }
  else
  {
    hitchance = 5;
    if(randomNumber(100)<= hitchance)
    {
      player.currentRoom.enemies.splice(0, 1);
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You somehow pulverise the enemy into smithereens with your bare fists alone</span>";
    }
    else
    {
      player.currentRoom.enemies[0].health -= 5;
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You smack the enemy with your fists, for some reason? doing little damage and alerting the enemy</span>";
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>Enemy health left: "+player.currentRoom.enemies[0].health+ "</span>";
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>Enter Combat</span>";
      window.combatSetupV2();
    }
  }
  scrollBarAnchor();
}

function dropItem(itemName)
{

  if(checkInventory(itemName)){
    if(itemName===player.equippedWeapon.item.itemName){
      equipFists();
    }
    item=player.inventory[getItemPosFromInventory(itemName)];
    removeItem(item.item.itemName);
    unHighlightSelected();
    player.currentRoom.roomItems.push(item);
    vicinity(player.currentRoom);
    document.getElementById("text-display").innerHTML+="</br><span id='userTextRight'>>Dropped "+itemName+"</span>";

  }
  else{
    document.getElementById("text-display").innerHTML+= "</br><span id='userTextWrong'>>You don't have that item in your inventory!</span>";
  }
}

function removeItem(itemName)
{
  for(var i=0;i<player.inventory.length; i ++)
  {
    if(player.inventory[i].item.itemName === itemName){
      removeItemFromInventory(player.inventory[i]);
      player.inventory.splice(i,1);
    }
  }
}

function removeItemFromInventory(item)
{
  var elements = document.querySelectorAll("#inventory td");
  imageToBeRemoved = "<img src="+ item.item.itemFilePath +" alt=" + item.item.itemDescription + " class='inventoryItem'>";
  for (var i = 0; i < elements.length; i++) {
    if((elements[i].innerHTML).includes(item.item.itemFilePath)){
      elements[i].innerHTML ="";
      break;
    }
  }
  vicinity(player.currentRoom);
}

function losehealthSound(){
  healthLossSound.play();
}

function reload()
{
    var ammoCount =  document.getElementById("energyCellCount").innerHTML;
    //document.getElementById("text-display").innerHTML += "<br>"+   ammoCount;
    ammoCount =ammoCount.substring(1, ammoCount.length);
    var ammo =parseInt(ammoCount);
    if(ammo>0)
    {
      var cellsNeeded=  player.equippedWeapon.magSize-player.equippedWeapon.ammo;//As in to reload weapon completely
      console.log(cellsNeeded);
      if(player.equippedWeapon.magSize == player.equippedWeapon.ammo)
      {
          document.getElementById("text-display").innerHTML +="</br><span id='userTextWrong'>>Your weapon is already loaded!"
      }
      else
      {
        if(ammo >= cellsNeeded){
          ammo=ammo-cellsNeeded;
          player.equippedWeapon.ammo = player.equippedWeapon.ammo + cellsNeeded;
          document.getElementById("currentWeaponMag").innerHTML=player.equippedWeapon.ammo+"/"+player.equippedWeapon.magSize;
          document.getElementById("energyCellCount").innerHTML =  "x" + ammo;
          reloadSound.play();
          document.getElementById("text-display").innerHTML +="</br><span id='userTextRight'>>You reload your weapon"
        }
        else{
          player.equippedWeapon.ammo= player.equippedWeapon.ammo + ammo;
          ammo=0;
          document.getElementById("currentWeaponMag").innerHTML=player.equippedWeapon.ammo+"/"+player.equippedWeapon.magSize;
          document.getElementById("energyCellCount").innerHTML =  "x" + ammo;
          document.getElementById("text-display").innerHTML +="</br><span id='userTextRight'>>You reload your weapon"
          reloadSound.play();
        }
      }
    }
    else{
      document.getElementById("text-display").innerHTML +="</br><span id='userTextWrong'>>You dont have any energy cells to reload!"
    }
    scrollBarAnchor();
}
function equipFists()
{
  document.getElementById("text-display").innerHTML+="</br><span id='userTextRight'> Equipped fists."+"</span>";
  document.getElementById("currentWeapon").innerHTML="Equipped Weapon: Fists";
  document.getElementById("currentWeaponMag").innerHTML="0/0";
  document.getElementById("equippedWeapon").src= 'images/fist.png';
}
function equipWeapon(weaponName)
{
  if(weaponName == "pistol" || weaponName == "smg"|| weaponName == "shotgun"|| weaponName == "plasma cannon"|| weaponName == "revolver"){
    if(checkInventory(weaponName)){
      player.equippedWeapon = player.inventory[getItemPosFromInventory(weaponName)];
      document.getElementById("text-display").innerHTML+="</br><span id='userTextRight'> Equipped "+weaponName+"."+"</span>";
      document.getElementById("currentWeapon").innerHTML="Equipped Weapon: "+weaponName;
      document.getElementById("currentWeaponMag").innerHTML=player.equippedWeapon.ammo+"/"+player.equippedWeapon.magSize;
      document.getElementById("equippedWeapon").src= player.equippedWeapon.item.itemFilePath;

      if(window.inCombat){
        window.checkEquippedWeaponStatus();
      }
    }
    else{
      document.getElementById("text-display").innerHTML+= "</br><span id='userTextWrong'>>You haven't picked up that weapon!</span>";
    }
  }
  else{
    document.getElementById("text-display").innerHTML+= "</br><span id='userTextWrong'>>You can't equip that!</span>";
  }
  scrollBarAnchor();
}
function unequipWeapon()
{
  // if(weaponName == "pistol" || weaponName == "smg"|| weaponName == "shotgun"|| weaponName == "plasma cannon"|| weaponName == "revolver"){
  //   if(checkInventory(weaponName)&& player.equippedWeapon.item.itemName==weaponName){
  //   }
  //   else{
  //     document.getElementById("text-display").innerHTML+= "</br><span id='userTextWrong'>>You don't have that weapon equipped!</span>";
  //   }
  //}
  if(player.equippedWeapon.item.itemName !== "fist")
  {
    document.getElementById("text-display").innerHTML +="</br><span id= 'userTextRight'>>You unequip your "+ player.equippedWeapon.item.itemName + "</span>";
    player.equippedWeapon = createWeaponObject("fist",0, 0, 5, "melee", ["punch"], "Its clobbering time","images/fist.png");
    document.getElementById("currentWeapon").innerHTML="Equipped Weapon: "+player.equippedWeapon.item.itemName;
    document.getElementById("currentWeaponMag").innerHTML=player.equippedWeapon.ammo+"/"+player.equippedWeapon.magSize;
    document.getElementById("equippedWeapon").src= player.equippedWeapon.item.itemFilePath;
    scrollBarAnchor();
  }
  else
  {
    document.getElementById("text-display").innerHTML +="</br><span id= 'userTextWrong'>>You cannot unequip your "+ player.equippedWeapon.item.itemName + "</span>";

  }
  scrollBarAnchor();
}
function getItemPosFromInventory(itemName)
{
  for(var i=0; i<player.inventory.length;i++){
    //document.getElementById("text-display").innerHTML+= "<br>> item:"+player.inventory[i].item.itemName;
    if(player.inventory[i].item.itemName === itemName){
      return i;
    }
  }
}
function getRoomPos(roomName)
{
  for(var i=0; i<rooms.length;i++){
    //document.getElementById("text-display").innerHTML+= "<br>> item:"+player.inventory[i].item.itemName;
    if(rooms[i].roomName === roomName){
      return i;
    }
  }
}
function removeInteractable(interactableName,room)
{
  for(var i=0; i< room.interactables.length;i++){
    //document.getElementById("text-display").innerHTML+= "<br>> item:"+player.inventory[i].item.itemName;
    if(room.interactables[i].interactableName === interactableName){
        room.interactables.splice(i,1);
    }
  }
}
function processCustomCommand(interactable)
{
  if(interactable.interactableName==="console")
  {
    if(checkInventory("data card") && player.currentRoom.roomName === "reactor room")
    {
      removeItem("data card");
      document.getElementById("text-display").innerHTML += "</br>>" + interactable.descriptionUnlocked;
      removeInteractable("console",player.currentRoom);
      player.currentRoom.interactables.push(createInteractableObject
      ("alert","You inspect the console alert it reads: 'SHIP POWER LOSSES DETECTED: RESET MASTER SWITCH'","no"));
      player.currentRoom.interactables.push(createLeverObject
      ("master switch",
       "You Inspect the switch, pulling it should reset the ship's power."
       ,"pull master switch",
       false,"You pull the master switch and hear the hum of the ship as it's systems come back online. Hopefully the hangar bay door is open now."));
      document.getElementById("objectivesList").innerHTML+="<li id='switchObj'>Reset the master switch.</li>";
      document.getElementById("powerObj").style.display="none";
    }
  }
  else if(interactable.interactableName === "master switch" )
  {
    if( player.currentRoom.roomName === "reactor room" )
    {
      document.getElementById("switchObj").style.display="none";
      interactable.pulledState=true;
      document.getElementById("text-display").innerHTML += "<br>>" + interactable.pulledDescription;
      var blockedPath={exitRoomName:"hallway14"};
      clearExit(blockedPath,rooms[getRoomPos("hallway07")]);
      removeInteractable("powered door",rooms[getRoomPos("hallway07")]);
      removeInteractable("master switch",player.currentRoom);
      removeInteractable("alert",player.currentRoom);
      document.getElementById("objectivesList").innerHTML="<li id='hangarObj'>Return to the hanger bay.</li>";
    }
  }
  else if(interactable.interactableName === "escape pod" ){
    if(player.currentRoom.roomName === "hangar bay" ){
      gameFinished(true);
    }
  }
}
function clearExit(blockedPath,room)
{
      for(var j = 0; j < room.exits.length; j++)
      {
        if(room.exits[j].exitRoomName === blockedPath.exitRoomName)
        {
            room.exits[j].blocked=false;
        }
      }
}
function customCommandInput(words)
{
  var stop = false;
  var i = 0;
  do{
    //  document.getElementById("text-display").innerHTML+= "<br>> words:"+words;
    //  document.getElementById("text-display").innerHTML+= "<br>> custom command:"+player.currentRoom.interactables[i].customCommand;
      if(player.currentRoom.interactables[i].customCommand === words)
      {
        stop = true;
      //  document.getElementById("text-display").innerHTML+="MATCH";
        return player.currentRoom.interactables[i];
      }
      i++;
  }while(i < player.currentRoom.interactables.length);
  if(stop == false){
    //return null;
  }
}
function removeBlockage(blockedPath)
{
  var availableDirections = [];
  document.getElementById("text-display").innerHTML += "<br>>"+ blockedPath.descriptionOpen ;
  scrollBarAnchor();
  for(var i = 0; i < rooms.length; i++)
  {
    for(var j = 0; j < rooms[i].interactables.length; j++)
    {
      if(rooms[i].interactables[j].id === blockedPath.id)
      {
         clearExit(rooms[i].interactables[j],rooms[i]);

         rooms[i].interactables.splice(j, 1);
      }
    }
  }
  player.currentRoom.exits.forEach((exit, i) => {
      availableDirections.push(exit.orientation);
  });
  directionColourAllRed();
  scanning(availableDirections);
  scrollBarAnchor();
}
function checkInventory(item)
{
  for(var i=0; i<player.inventory.length;i++){
  //  document.getElementById("text-display").innerHTML+= "<br>> item:"+player.inventory[i].item.itemName;
    if(player.inventory[i].item.itemName === item){
      return true;
    }
  }
}
function checkInventoryType(item,type)
{
  for(var i=0; i<player.inventory.length;i++){
    //document.getElementById("text-display").innerHTML+= "<br>> item:"+player.inventory[i].item.itemName;
    if(player.inventory[i].item.itemName.includes(item) && player.inventory[i].item.itemType === type){
      return true;
    }
  }
}
function useItem(words)
{
  if(words.includes("health kit"))
  {
    var healthKitCount=document.getElementById("healthKitCount").innerHTML;
    healthKitCount =healthKitCount.substring(1, healthKitCount.length);
    var newHealthKitCount= parseInt(healthKitCount);
      if(newHealthKitCount>0)
      {
        if(!window.inCombat){
          newHealthKitCount=newHealthKitCount-1;
          var newHealth = player.health + 50;
          if(newHealth>100){
            player.health=100;
          }
          else {
            player.health = newHealth;
          }
          healthGainSound.play();
          document.getElementById("healthKitCount").innerHTML= "x"+newHealthKitCount;
          updateHP();
        }
        else{
          window.healType(1);
        }
        document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You feel rejuvenated, you gain 50HP </span>";
      }
      else{
        document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You don't have any health kits!</span>";
      }
  }
  else if(words.includes("health pack"))
  {
      var healthPackCount=document.getElementById("healthPackCount").innerHTML;
      healthPackCount =healthPackCount.substring(1, healthPackCount.length);
      var newHealthPackCount= parseInt(healthPackCount);
      if(newHealthPackCount>0)
      {
        if(!window.inCombat){
          newHealthPackCount=newHealthPackCount-1;
          var newHealth = player.health + 25;
          if(newHealth>100){
            player.health=100;
          }
          else {
            player.health = newHealth;
          }
            healthGainSound.play();
          document.getElementById("healthPackCount").innerHTML= "x"+newHealthPackCount;
          updateHP();
        }
        else{
          window.healType(0);
        }
          document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>You feel rejuvenated, you gain 25HP </span>";
      }
      else{
          document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You don't have any health packs!</span>";
      }
  }
  else if( words.includes("blowtorch") )
  {
    var match = false;
    if(checkInventory("blowtorch"))
    {
      player.currentRoom.interactables.forEach((interactable, i) =>
      {
        if(words.includes(interactable.interactableName) && interactable.interactableName === "vent")
        {
            removeBlockage(interactable);
            match=true;
        }
        else if(interactable.interactableName === "vent")
        {
          removeBlockage(interactable);
          match=true;
        }
      });
      if(match==false){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You can't use that item on that.</span>";
      }
    }
    else{
      document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You don't have that item.</span>";
    }
  }
  else if(words.includes("explosive") || words.includes("explosives"))
  {
    var match = false;
    if(checkInventory("explosives"))
    {
      player.currentRoom.interactables.forEach((interactable, i) =>
      {
        if(words.includes(interactable.interactableName) && interactable.interactableName === "rubble")
        {
            removeBlockage(interactable);
            match=true;
        }
        else if(interactable.interactableName.includes("rubble"))
        {
          removeBlockage(interactable);
          match=true;
        }
      });
      if(match==false){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You can't use that item on that.</span>";
      }
    }
    else{
      document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You don't have that item.</span>";
    }
  }
  else if(words.includes("hacking tool") || words.includes("hack") || words.includes("tool"))
  {
    var match = false;
    if(checkInventory("hacking tool"))
    {
      player.currentRoom.interactables.forEach((interactable, i) =>
      {
        if(words.includes(interactable.interactableName) && interactable.interactableName === "door")
        {
            removeBlockage(interactable);
            match=true;
        }
        else if(interactable.interactableName === "locked door")
        {
          removeBlockage(interactable);
          match=true;
        }
      });
      if(match==false){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You can't use that item on that.</span>";
      }
    }
    else if (words.includes("terminal"))
    {
      player.currentRoom.interactables.forEach((item, i) => {
        if(item.interactableName==="terminal")
        {
          document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>></span>";

        }
      });

    }
    else{
      document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>You don't have that item.</span>";
    }
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>I don't know that command</span>";
  }
  scrollBarAnchor();
}

function examineInteractables(roomInteractables, words)
{
  if(roomInteractables >= 1)
  {
    player.currentRoom.interactables.forEach((interactable, i) =>
    {
      if(words === interactable.interactableName)
      {
        if(player.currentRoom.enemies.length > 0)
        {
          enemyDetectionRoll(2);
        }
        else
        {

        }
        document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>>"+interactable.description+"</span>";
      }
    });
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id = 'userTextWrong'>>There is nothing to interact with in this room</span>";
  }
  if(words.length < 1)
  {
    document.getElementById("text-display").innerHTML += "</br><span id = 'userTextWrong'>>Please enter what you want to examine</span>";

  }
  scrollBarAnchor();
}
function pickUpItems(playerRoom,words,dragged)
{
      playerRoom.roomItems.forEach((item, i) => {
      if(item.item.itemName.includes(words) && item.item.itemSearched==true && (item.item.itemType=="Gadget" || item.item.itemType=="Weapon"||item.item.itemType=="Ammo"||item.item.itemType=="Health"||item.item.itemType=="Puzzle"||item.item.itemType=="Datapad"))
      {
        if(player.currentRoom.enemies.length > 0)
        {
          if(!window.inCombat){
            if(!enemyDetectionRoll(1)){
              return;
            }
          }
        }

        if(item.item.itemType ==="Weapon"){
          var counter=0;
          if(checkInventory("words") && item.item.itemName==="words")
          {
            document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>"+"You're already carrying that!"+"</span>";
          }
          for(var j=0; j<player.inventory.length; j++){
            if(player.inventory[j].item.itemType === "Weapon"){
              counter++;
            }
          }
          if(counter == 3){
            document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>"+"You can only carry 3 weapons at a time!"+"</span>";
          }
          else{
            document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +item.item.itemName +" added to inventory"+"</span>";
            pickUpItemSound.play();
            player.inventory.push(item);
            playerRoom.roomItems.splice(i, 1);
            if(!dragged)
            {
              addItemToInventory(item.item);
            }
          }
        }
        else if(item.item.itemType === "Ammo")
        {
          document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>"+ item.amount +" "+ item.item.itemName +" added to inventory"+"</span>";
          pickUpAmmoSound.play();
          var ammoCount =  document.getElementById("energyCellCount").innerHTML;
          ammoCount =ammoCount.substring(1, ammoCount.length);
          var newAmmo =parseInt(ammoCount);
          newAmmo = newAmmo + item.amount;
          document.getElementById("energyCellCount").innerHTML =  "x" + newAmmo;
          playerRoom.roomItems.splice(i, 1);

        }

        else if(item.item.itemType === "Health")
        {
          document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>"+ item.item.itemName +" added to inventory"+"</span>";
          if(item.item.itemName=="health pack"){
            var healthPackCount =  document.getElementById("healthPackCount").innerHTML;
            healthPackCount =healthPackCount.substring(1, healthPackCount.length);
            var newHealthPackCount =parseInt(healthPackCount);
            newHealthPackCount = newHealthPackCount + item.amount;
            document.getElementById("healthPackCount").innerHTML =  "x" +  newHealthPackCount;
            playerRoom.roomItems.splice(i, 1);
          }
          else{
            var healthKitCount =  document.getElementById("healthKitCount").innerHTML;
            healthKitCount =healthKitCount.substring(1, healthKitCount.length);
            var newHealthKitCount =parseInt(healthKitCount);
            newHealthKitCount = newHealthKitCount + item.amount;
            document.getElementById("healthKitCount").innerHTML =  "x" +  newHealthKitCount;
            playerRoom.roomItems.splice(i, 1);
          }
        }
        else if(item.item.itemType!="Ammo" && item.item.itemType!="Health" && item.item.itemType!="Weapon")
        {
          document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +item.item.itemName +" added to inventory"+"</span>";
          if(item.item.itemType !== "Puzzle" && item.item.itemType!== "Gadget")
          {
            document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>(You can read these items by typing read + item name)</span>";
          }
          pickUpItemSound.play();
          player.inventory.push(item);
          playerRoom.roomItems.splice(i, 1);
          if(!dragged)
          {
            addItemToInventory(item.item);
          }
        }
      }
      scrollBarAnchor();
      vicinity(playerRoom);
  });

}

function search(playerRoom)
{
  document.getElementById("text-display").innerHTML += "</br><span id='userTextNormal'>>Searching the vicinity you find that...</span>";
  document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>------------------------------------------</span>";
  if(playerRoom.roomItems.length >=1)
  {
    playerRoom.roomItems.forEach((item, i) => {
        if(item.item.itemType == "Gadget" ){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextGadget'>>You notice a '" +item.item.itemName+"'</span>";
        }
        else if(item.item.itemType == "Weapon" ){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextWeapon'>>You notice a '" +item.item.itemName+"'</span>";
        }
        else if(item.item.itemType == "Ammo" ){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextWeapon'>>You notice some '" +item.item.itemName+"'</span>";
        }
        else if(item.item.itemType == "Health" )
        {
          document.getElementById("text-display").innerHTML += "</br><span id='userTextHealth'>>You notice a '" +item.item.itemName+"'</span>";
        }
        else if(item.item.itemType =="Datapad"){
            document.getElementById("text-display").innerHTML += "</br><span id='userTextDatapad'>>You notice a '" +item.item.itemName+"'</span>";
        }
        else if(item.item.itemType =="Puzzle"){
            document.getElementById("text-display").innerHTML += "</br><span id='userTextPuzzle'>>You notice a '" +item.item.itemName+"'</span>";
        }
        item.item.itemSearched = true;
      });
      vicinity(playerRoom);
  }
  else
  {
    document.getElementById( "text-display" ).innerHTML += "</br><span id ='userTextWeapon'>>There are no items in this room</span>";
  }
  if(playerRoom.interactables.length >= 1)
  {
    playerRoom.interactables.forEach((item, i) => {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextInteractable'>>You notice a '" +item.interactableName+"'</span>";
    });
  }
  else
  {
    {
      document.getElementById("text-display").innerHTML += "</br><span id = 'userTextInteractable'>>There is nothing interesting to interact with</span>";
    }
  }
  document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>------------------------------------------</span>";
  scrollBarAnchor();
}
function getDetailsOfItem(imgPath)
{
  var found = false;
  player.currentRoom.roomItems.forEach((item, i) => {
      if(imgPath.includes(item.item.itemFilePath)){
        document.getElementById('hoverInfo').innerHTML = item.item.itemDescription;
        found = true;
      }
  });
  if(!found){
    for(var i=0; i<player.inventory.length;i++){
      if(imgPath.includes(player.inventory[i].item.itemFilePath)){
        document.getElementById('hoverInfo').innerHTML = player.inventory[i].item.itemDescription;
        found = true;
      }
    }
  }
  return found;
}
var previous;
function showEquip(thisElement){
  var itemName = thisElement.id.split('_');
  var parent = thisElement.parentNode;
  selectedItem = itemName[0];
  if(checkInventoryType(itemName[0],"Weapon"))
  {
    document.getElementById('equipBtn').classList.remove('hideMe');
    if(player.equippedWeapon.item.itemName == itemName[0]){
      document.getElementById('equipBtn').innerHTML = 'unequip';
    }
    else{
      document.getElementById('equipBtn').innerHTML = 'equip';
    }
  }
  else if(checkInventoryType(itemName[0],"Gadget")){
    document.getElementById('equipBtn').classList.remove('hideMe');
    document.getElementById('equipBtn').innerHTML = 'use';
  }
  else{
    document.getElementById('equipBtn').classList.add('hideMe');
  }

  if(previous != null){
    previous.style.backgroundColor = '#272727';
  }
  parent.style.backgroundColor = 'red';
  previous = parent;
}

function unHighlightSelected()
{
  if(previous != null){
    previous.style.backgroundColor = '#272727';
  }
}

function useSelected(){
  if(checkInventoryType(selectedItem,"Weapon")){
    if(player.equippedWeapon.item.itemName == selectedItem){
      unequipWeapon(selectedItem);
      document.getElementById('equipBtn').innerHTML = 'equip';
    }
    else{
      equipWeapon(selectedItem);
      document.getElementById('equipBtn').innerHTML = 'unequip';
    }
  }
  else if(checkInventoryType(selectedItem,"Gadget")){
    useItem(selectedItem);
  }

}

var itemsAdded = 0;
function vicinity(playerRoom)
{
  //get the correct table using a query
  var elements = document.querySelectorAll("#other1 td");
  var tableIndex = 0;

  playerRoom.roomItems.forEach((item, i) => {
    if(item.item.itemSearched == true )
    {
      //add inventory item to vicinity
      var name = item.item.itemName + "_img" + itemsAdded;
      itemsAdded++;
      elements[tableIndex].innerHTML = "<img src="+ item.item.itemFilePath +" alt=" + item.item.itemName + " class='inventoryItem' draggable='true' ondragstart='drag(event)' onmouseover='displayInfo(this)' onmouseleave='hideInfo(this)' onclick='showEquip(this);' id="+ name+">";
      tableIndex++;
    }
    else{
    }
  });
  clearVicinity(tableIndex);
}
function clearVicinity(startIndex)
{
  var elements = document.querySelectorAll("#other1 td");
  //clear all other inventory items
  for (var i = startIndex; i < 4; i++) {
    elements[i].innerHTML = '';
  }
}
function move(words)
{
  var direction = "";
  var checkDirection = 0;
  if(words.includes("north") == true)
  {
    direction += "north";
    checkDirection++;
  }
  if (words.includes("east") == true)
  {
    direction += "east";
    checkDirection++;
  }
  if (words.includes("south") == true)
  {
    direction += "south";
    checkDirection++;
  }
  if (words.includes("west") == true)
  {
    direction += "west";
    checkDirection++;
  }
  if(words.includes("escape") && words.includes("pod") || words.includes("escapepod"))
  {
    player.currentRoom.interactables.forEach((item, i) => {
      if(item.interactableName === "escape pod")
      {
        gameFinished(true);
      }
    });
    document.getElementById("text-display").innerHTML+= "</br><span id='userTextWrong'>>Where on earth is that?</span>";
  }
  if(checkDirection===1)
  {
    goDirection(direction);
  }
  else if(checkDirection > 1)
  {
    document.getElementById("text-display").innerHTML+= "</br><span id='userTextWrong'>>You can't go in multiple directions...</span>";
  }
  else if(checkDirection === 0)
  {
    document.getElementById("text-display").innerHTML+= "</br><span id='userTextWrong'>>I guess you're staying here then...</span></br>";
  }
  scrollBarAnchor();
}
function goDirection(direction)
{
  var exitExistsFlag = 0;
  var openOrientations = "";

  player.currentRoom.exits.forEach((item, i) => {
    openOrientations += item.orientation;
    openOrientations  += " ";
  });
  var possibleExits = openOrientations.split(" ");

  possibleExits.forEach((orientationAvailable, i) => {
    if(direction===orientationAvailable)
    {
      exitExistsFlag++;
    }
  });

  var newCurrent = (0,0,0,0,0,0,0,0,0);
  if(exitExistsFlag === 1)
  {
      player.currentRoom.exits.forEach((roomExit, i) => {
          if(roomExit.orientation === direction && roomExit.blocked === false)
          {

            newCurrent = returnNewRoom(roomExit.exitRoomName);
            document.getElementById("text-display").innerHTML +="</br><span id = 'userTextNormal'>>"+ roomExit.description + "</span>";
            document.getElementById("text-display").innerHTML += "</br>";
            document.getElementById("text-display").innerHTML += "</br><span id = 'userTextNormal'>>>Entering "+ newCurrent.roomName+"</span>";
            document.getElementById("text-display").innerHTML += "</br>";

            player.currentRoom = newCurrent;
            if(player.currentRoom.roomDiscovered==true)
            {
            //  document.getElementById("text-display").innerHTML+= "</br>>" +player.currentRoom.roomDescription;
              vicinity(player.currentRoom);
            }
            else
            {
              clearVicinity(0);
            //  document.getElementById("text-display").innerHTML+= "</br>>" +player.currentRoom.roomDescription;
            }

            outputCurrentRoomDesc();
            document.getElementById("currentRoomDisplay").innerHTML ="Current Room: "+ player.currentRoom.roomName;
            randomFootstepSelector();
          }
          //CHANGE
          if(roomExit.orientation === direction && roomExit.blocked===true){
                  document.getElementById("text-display").innerHTML +="</br><span id='userTextWrong'>>"+ roomExit.blockedDescription;

          }
      });
  }
  else
  {
    document.getElementById("text-display").innerHTML+= "</br><span id = 'userTextWrong'>>There is nowhere in that direction...</span>";
  }
  scrollBarAnchor();
  updateObjectives();
}
function returnNewRoom(roomExit)
{
  var newRoom =  createRoomObject(0,0,0,0,0,0,0);
  rooms.forEach((existingRoom, i) => {
    if(roomExit == existingRoom.roomName)
      newRoom = existingRoom;
  });
  return newRoom;
}
function charHealth()
{
  var className = document.getElementById("charClass");
  if (className == "Hacker" || className == "Engineer")
  {
    return 100;
  }
  else
  {
    return 120;
  }
}
var itemNumAdded = 0;
function addItemToInventory(item)
{

    var elements = document.querySelectorAll("#inventory td");

    for (var i = 0; i < elements.length; i++) {
      if(elements[i].innerHTML == ''){
        var itemid = item.itemName + "_"+ itemNumAdded;
        itemNumAdded++;
        elements[i].innerHTML += "<img src="+ item.itemFilePath +" alt=" + item.itemDescription + " class='inventoryItem' draggable='true' ondragstart='drag(event)' onclick='showEquip(this);' id='"+ itemid +"'>";
        break;
      }
    }
    vicinity(player.currentRoom);
}
function randomNumber(range)
{
  return Math.round(Math.random() * range) + 1;
}
function randomNumberForArray(range)
{
  return Math.floor(Math.random() * range);
}
function randomPlaceHolderText()
{
  var number = randomNumber(5);

  if (number === 1)
  {
    document.getElementById("gameInput").placeholder = "Enter your action";
  }
  else if (number === 2)
  {
    document.getElementById("gameInput").placeholder = "Do your worst";
  }
  else if (number === 3)
  {
    document.getElementById("gameInput").placeholder = "The end is never";
  }
  else if (number === 4)
  {
    document.getElementById("gameInput").placeholder = "Enter your command";
  }
  else if (number === 5)
  {
    document.getElementById("gameInput").placeholder = "Dont mess yourself up some";
  }
}
function sound(src)
{
  this.sound = document.createElement("audio");
  this.sound.src = src;

  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  console.log(volume);
  this.sound.volume= volume;
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
function scrollBarAnchor()
{
  var elem = document.getElementById('text-display');
  elem.scrollTop = elem.scrollHeight;
}
function generatePasswordPad()
{
  var passwordArray = ["password117", "meaningoflife42", "gizzardlizard", "iamcool12", "spaceshipduties101", "unguessable5", "terminalpassword", "darkestsoul", "whatisapassword"];
  var roomSelector = ["storage unit 01"];
  var selectedRoomName = roomSelector[randomNumberForArray(roomSelector.length)];
  var password = passwordArray[randomNumberForArray(passwordArray.length)];
  rooms.forEach((item, i) => {
    if(item.roomName === selectedRoomName)
    {
      item.roomItems.push(createDataPadObject("passPad", "A datapad containing useful information for accessing a terminal", "''The password for the terminal in the computer lab is '"+ password+"'''", "images/datapad.png"))
    }
  });
  return password;
}
function randomFootstepSelector()
{
  var randomSound = footstepSounds[randomNumberForArray(footstepSounds.length)];
  randomSound.play();
}
