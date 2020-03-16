var player = createPlayerObject("Luke", 100, "Hacker", "", [], "yes");
var rooms = [];
var roomDescriptions = [];
addRooms();



// this method populates the string array roomDescriptions
function addDescriptions(){
  var quartersDesc = "******, you, have just been sleeping after a long shift fixing the troublesome vacuum seal on\n the ship, the SS Viper, when you are woken up. "
  + "It is a subtle vibration at first, enough to nudge you into a semi-awakened state. It escalates more and more, with bedding from other beds falling onto the floor, and the very mattress you are on leaping to and fro. "
  + "You are thrown suddenly to the floor with a bang that could wake the dead.You stumble to your feet, bleary-eyed, with no idea what’s going on, but whatever it is, it isn’t going to be fun.";
  roomDescriptions.push(quartersDesc);
}

function addRooms()
{
  addDescriptions();
  // start room instanciation
  var quarters = createRoomObject("quarters", "Room", roomDescriptions[0], 0, [createExitObject("hallway01", "west")], 0, 0);
  var armory = createRoomObject("armory","Room","This is the Armory", 0, [createExitObject("hallway08", "north"), createExitObject("hallway09", "south")], 0, 0);
  var computerLab = createRoomObject("computer lab", "Room", "This is the Computer Lab", 0, [createExitObject("hallway04", "north"), createExitObject("rubble 01", "west")], 0, 0);

  // other room instanciation
  var storageUnit1 = createRoomObject("storage unit 01","Room","This is storage unit 1", 0, [createExitObject("hallway04", "west")], 0, 0);
  var storageUnit2 = createRoomObject("storage unit 02","Room","This is storage unit 2", 0, [createExitObject("vent 05", "north"), createExitObject("door 05", "south"), createExitObject("rubble 04", "west")], 0, 0);
  var kitchen = createRoomObject("kitchen","Room","This is the kitchen", 0, [createExitObject("mess hall", "north"), createExitObject("hallway06", "south")], 0, 0);
  var messHall = createRoomObject("mess hall","Room","This is the mess hall", 0, [createExitObject("hallway17", "north"), createExitObject("kitchen", "south"), createExitObject("hallway10", "west")], 0, 0);
  var maintenanceBay  = createRoomObject("maintenance bay","Room","This is the maintenance bay", 0, [createExitObject("vent 03", "north"), createExitObject("hallway11", "south")], 0, 0);
  var hangerBay  = createRoomObject("hanger bay","Room","This is the hanger bay", 0, [createExitObject("hallway12", "east"), createExitObject("exit", "west")], 0, 0);
  var researchLab  = createRoomObject("research lab","Room","This is the research lab", 0, [createExitObject("rubble 03", "south"), createExitObject("hallway17", "east")], 0, 0);
  var reactorRoom = createRoomObject("reactor room","Room","This is the reactor room", 0, [createExitObject("door 04", "south"), createExitObject("vent 05", "east"), createExitObject("hallway15", "west")], 0, 0);

  // hallway instanciation
  var hallway01 = createRoomObject("hallway01","Room","hallway01", 0, [createExitObject("hallway02", "north"), createExitObject("hallway03", "south"), createExitObject("quarters", "east")], 0, 0);
  var hallway02 = createRoomObject("hallway02","Room","hallway02", 0, [createExitObject("hallway01", "south")], 0, 0);
  var hallway03 = createRoomObject("hallway03","Room","hallway03", 0, [createExitObject("hallway01", "north"), createExitObject("hallway04", "south"), createExitObject("vent 01", "west")], 0, 0);
  var hallway04 = createRoomObject("hallway04","Room","hallway04", 0, [createExitObject("hallway03", "north"), createExitObject("computer lab", "south"), createExitObject("storage unit 01", "east"), createExitObject("door 01", "west")], 0, 0);
  var hallway05 = createRoomObject("hallway05","Room","hallway05", 0, [createExitObject("hallway06", "north"), createExitObject("door 01", "south"), createExitObject("vent 01", "east")], 0, 0);
  var hallway06 = createRoomObject("hallway06","Room","hallway06", 0, [createExitObject("kitchen", "north"), createExitObject("hallway05", "south"), createExitObject("hallway07", "west")], 0, 0);
  var hallway07 = createRoomObject("hallway07","Room","hallway07", 0, [createExitObject("vent 02", "north"), createExitObject("hallway06", "east"), createExitObject("hallway08", "west")], 0, 0);
  var hallway08 = createRoomObject("hallway08","Room","hallway08", 0, [createExitObject("armory", "south"), createExitObject("hallway07", "east"), createExitObject("rubble 02", "west")], 0, 0);
  var hallway09 = createRoomObject("hallway09","Room","hallway09", 0, [createExitObject("armory", "north"), createExitObject("hallway07", "east"), createExitObject("rubble 02", "west")], 0, 0);
  var hallway10 = createRoomObject("Armory","Room","This is the Armory", 0, [createExitObject("Armory", "north"), createExitObject("Armory", "south")], 0, 0);
  var hallway11 = createRoomObject("Armory","Room","This is the Armory", 0, [createExitObject("Armory", "north"), createExitObject("Armory", "south")], 0, 0);
  var hallway12 = createRoomObject("Armory","Room","This is the Armory", 0, [createExitObject("Armory", "north"), createExitObject("Armory", "south")], 0, 0);
  var hallway13 = createRoomObject("Armory","Room","This is the Armory", 0, [createExitObject("Armory", "north"), createExitObject("Armory", "south")], 0, 0);
  // sample room instanciation code
  //var nextRoom = createRoomObject("Next Room","Room","This is the next room", 0, [createExitObject("Starting Room", "south")], 0, 0);
  //var startRoom = createRoomObject("Starting Room","Room","This is the starting room", 0, [createExitObject("Next Room", "north")], 0, 0);

  rooms.push(quarters);
  rooms.push(hallway01);
  rooms.push(hallway02);
  rooms.push(hallway03);
  rooms.push(hallway04);

  // if statement used to assign correct first rooms
  //if (character == "Hacker"){
    //player.currentRoom = computerLab;
  //}
//  else if (character == "SpaceCowboy"){
//    player.currentRoom = armory;
//  }
//  else{
    player.currentRoom = quarters;
//  }
}

function outputCurrentAndNextRoom()
{
  document.getElementById("text-display").innerHTML += player.currentRoom.roomDescription;
  player.currentRoom.exits.forEach((item, i)=> {
    document.getElementById("text-display").innerHTML += "</br>" + "There is an exit to the " + item.orientation;
  });
  ;
}

function commandInput()
{
  var gameInputText = document.getElementById("gameInput").value;
  gameInputText.trim();
  document.getElementById("gameInput").value = "";
  if(/^ *$/.test(gameInputText))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userText'>" +"Doing nothing is not an option"+"</span>";
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
  if(words.includes("go") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>" +input+"</span>";
    move(words);
  }
  else if (words.includes("continue") == true){
    rooms.forEach((existingRoom, i) => {
      if(existingRoom.roomName === player.currentRoom.exits[0].exitRoomName){
        player.currentRoom = player.currentRoom.exits[0];
      }
    });

  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>I don't know this command: '" +input+"'</span>";
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
  if(checkDirection===1)
  {
    goDirection(direction);
  }
  else if(checkDirection > 1)
  {
    document.getElementById("text-display").innerHTML+= "</br>You can't go in multiple directions...";
  }
  else if(checkDirection === 0)
  {
    document.getElementById("text-display").innerHTML+= "</br>I guess you're staying here then...</br>";
    outputCurrentAndNextRoom();
  }
}

function goDirection(direction)
{
  var exitExistsFlag = 0;
  var openOrientations = "";
  var newCurrent = "";
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
var newCurrent = createRoomObject(0,0,0,0,0,0,0)
  if(exitExistsFlag === 1)
  {
      player.currentRoom.exits.forEach((roomExit, i) => {
          if(roomExit.orientation === direction)
          {
            newCurrent = returnNewRoom(roomExit.exitRoomName);
          }
      });
    player.currentRoom = newCurrent;
    document.getElementById("text-display").innerHTML+= "</br>";
    outputCurrentAndNextRoom();
  }
  else
  {
    document.getElementById("text-display").innerHTML+= "</br>There is nowhere in that direction..";
  }
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
  if (className == "Hacker")
  {
    return 100;
  }
  else if (classHealth == "Engineer")
  {
    return 100;
  }
  else
  {
    return 120;
  }
}

function charStart()
{
  if (document.getElementById("Hacker").checked)
  {
    return document.getElementById("Hacker").value;
  }
  else if (document.getElementById("Engineer").checked)
  {
    return document.getElementById("Engineer").value;
  }
  else if (document.getElementById("SpaceCowboy").value)
  {
    return document.getElementById("SpaceCowboy").value;
  }
}

function addItemInventory(item)
{

}

function nameOutput()
{
  var nameInput = document.getElementById("name").value;
  var classSelect = charStart();
  alert(nameInput + " " + classSelect);
}

function changeTextDescription()
{
  var desc = "";
  if(charStart() == "Hacker")
  {
    desc = "Hacks Tings";
  }
  else if(charStart() == "Engineer")
  {
    desc = "Fix Tings";
  }
  else if(charStart() =="SpaceCowboy")
  {
    desc = "Kill Tings";
  }
  document.getElementById("CharacterDesc").innerHTML = desc;
}

function createPlayerObject(usernameValue, healthValue, charClassValue, currentRoomValue, inventoryValue, statsValue)
{
  var playerObject = {username:usernameValue, health:healthValue, charClass:charClassValue, currentRoom:currentRoomValue, inventory:inventoryValue, stats:statsValue};
  return playerObject;
}
function createStatObject(areasExploredValue, endingAchievedValue, enemiesDefeatedValue, timeLeftValue)
{
  var statsObject = {areasExplored:areasExploredValue, endingAchieved:endingAchievedValue, enemiesDefeated:enemiesDefeatedValue, timeLeft:timeLeftValue};
  return statsObject;
}
function createRoomObject(roomNameValue, typeValue, roomDescriptionValue, enemiesValue, exitsValue, roomItemsValue, interactableRoomObjectsValue)
{
  var roomObject = {roomName:roomNameValue, type:typeValue, roomDescription:roomDescriptionValue, enemies:enemiesValue, exits:exitsValue, roomItems:roomItemsValue, interactableRoomObjects:interactableRoomObjectsValue};
  return roomObject;
}
function createExitObject(exitRoomNameValue, orientationValue)
{
  var exitObject = {exitRoomName:exitRoomNameValue, orientation:orientationValue};
  return exitObject;
}
function createItemObject(itemNameValue, itemTypeValue, itemDescriptionValue)
{
  var itemObject = {itemName:itemNameValue, itemType:itemTypeValue, itemDescription:itemDescriptionValue};
  return itemObject;
}
function createWeaponObject(itemNameValue, twoHandedValue, damageValue, weaponTypeValue, attackKeyValue, descriptionValue)
{
  var weaponObject = {item:createItemObject(itemNameValue, "Weapon", descriptionValue), twoHanded:twoHandedValue, damage:damageValue, weaponType:weaponTypeValue, attackKay:attackKeyValue};
  return weaponObject;
}
function createArmourObject(itemNameValue, bodyPartValue, defenseValue, descriptionValue)
{
  var armourObject = {item:createItemObject(itemNameValue, "Armour", descriptionValue), bodyPart:bodyPartValue, defense:defenseValue};
  return armourObject;
}
function createGadgetObject(itemNameValue, descriptionValue)
{
  var gadgetObject = {item:createItemObject(itemNameValue, "Gadget", descriptionValue)};
  return gadgetObject;
}
function createDataPadObject(itemNameValue, descriptionValue, informationValue)
{
  var dataPadObject = {item:createItemObject(itemNameValue, "DataPad", descriptionValue), information:informationValue};
  return dataPadObject;
}
function createModifierObject(itemNameValue, descriptionValue, changeValue, mechanicChangeValue)
{
  var modifierObject = {item:createItemObject(itemNameValue, "Modifier", descriptionValue), change:changeValue, mechanicChange:mechanicChangeValue};
  return modifierObject;
}
function createInteractableObject(verbValue)
{
  var interactableObject = {verb:verbValue};
  return interactableObject;
}
