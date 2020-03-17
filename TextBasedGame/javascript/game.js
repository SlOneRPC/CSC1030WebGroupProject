var player = createPlayerObject("Luke", 100, "Hacker", "", [], "yes", 0, 0);
var rooms = [];
var roomDescriptions = [];
addRooms();



// this method populates the string array roomDescriptions
function addDescriptions(){
  var quartersDesc = "Wake up sir";
  roomDescriptions.push(quartersDesc);
}

function addRooms()
{
  addDescriptions();
  // start room instanciation
  var quarters = createRoomObject("quarters", "Room", roomDescriptions[0], 0, [createExitObject("hallway01", "west")], [createWeaponObject("Gun", false, 10, "Ranged", ["shoot"], "It is a gun"), createWeaponObject("Gun2", false, 10, "Ranged", ["shoot"], "It is a gun")], 0);
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
  var hallway09 = createRoomObject("hallway09","Room","hallway09", 0, [createExitObject("armory", "north"), createExitObject("rubble 01", "east")], 0, 0);
  var hallway10 = createRoomObject("hallway10","Room","hallway10", 0, [createExitObject("vent 02", "south"), createExitObject("mess hall", "east"), createExitObject("hallway11", "west")], 0, 0);
  var hallway11 = createRoomObject("halllway11","Room","hallway11", 0, [createExitObject("maintenance bay ", "north"), createExitObject("hallway10", "east"), createExitObject("hallway12", "west")], 0, 0);
  var hallway12 = createRoomObject("hallway12","Room","hallway12", 0, [createExitObject("door 03", "north"), createExitObject("rubble 02", "south"), createExitObject("hallway11", "east")], 0, 0);
  var hallway13 = createRoomObject("hallway13","Room","hallway13", 0, [createExitObject("rubble 03", "north"), createExitObject("hallway14", "east"), createExitObject("door 03", "west")], 0, 0);
  var hallway14 = createRoomObject("hallway14","Room","hallway14", 0, [createExitObject("vent 04", "north"), createExitObject("vent 03", "south"), createExitObject("vent 03", "south"), createExitObject("hallway16", "east"), createExitObject("hallway13", "west")], 0, 0);
  var hallway15 = createRoomObject("hallway15","Room","hallway15", 0, [createExitObject("vent 04", "south"), createExitObject("reactor room", "east"), createExitObject("research lab", "west")], 0, 0);
  var hallway16 = createRoomObject("hallway16","Room","hallway16", 0, [createExitObject("door 04", "north"), createExitObject("hallway17", "south"),createExitObject("rubble 04", "east"), createExitObject("hallway14", "west")], 0, 0);
  var hallway17 = createRoomObject("hallway17","Room","hallway17", 0, [createExitObject("hallway16", "north"), createExitObject("hallway18", "east"), createExitObject("mess hall", "west")], 0, 0);
  var hallway18 = createRoomObject("hallway18","Room","hallway18", 0, [createExitObject("hallway19", "south"), createExitObject("door 05", "east"), createExitObject("hallway17", "west")], 0, 0);
  var hallway19 = createRoomObject("hallway19","Room","hallway19", 0, [createExitObject("hallway18", "north")], 0, 0);

  // vent instanciation
  var vent01 = createRoomObject("vent 01","Vent","vent 01", 0, [createExitObject("hallway03", "east"), createExitObject("hallway05", "west")], 0, 0);
  var vent02 = createRoomObject("vent 02","Vent","vent 02", 0, [createExitObject("hallway10", "north"), createExitObject("hallway07", "south")], 0, 0);
  var vent03 = createRoomObject("vent 03","Vent","vent 03", 0, [createExitObject("hallway14", "north"), createExitObject("maintenance bay", "west")], 0, 0);
  var vent04 = createRoomObject("vent 04","Vent","vent 04", 0, [createExitObject("hallway15", "north"), createExitObject("hallway14", "south")], 0, 0);
  var vent05 = createRoomObject("vent 05","Vent","vent 05", 0, [createExitObject("storage unit 01", "south"), createExitObject("reactor room", "west")], 0, 0);
  // rubble instanciation
  var rubble01 = createRoomObject("rubble 01","Rubble","rubble 01", 0, [createExitObject("computer lab", "east"), createExitObject("hallway09", "west")], 0, 0);
  var rubble02 = createRoomObject("rubble 02","Rubble","rubble 02", 0, [createExitObject("hallway12", "north"), createExitObject("hallway08", "south")], 0, 0);
  var rubble03 = createRoomObject("rubble 03","Rubble","rubble 03", 0, [createExitObject("research lab", "north"), createExitObject("hallway13", "south")], 0, 0);
  var rubble04 = createRoomObject("rubble 04","Rubble","rubble 04", 0, [createExitObject("storage unit 02", "east"), createExitObject("hallway16", "west")], 0, 0);

  // door instanciation
  var door01 = createRoomObject("door 01","Door","door 01", 0, [createExitObject("hallway04", "east"), createExitObject("hallway05", "west")], 0, 0);
  var door02 = createRoomObject("door 02","Door","door 02", 0, [createExitObject("mess hall", "north"), createExitObject("kitchen", "south")], 0, 0);
  var door03 = createRoomObject("door 03","Door","door 03", 0, [createExitObject("hallway13", "north"), createExitObject("hallway12", "south")], 0, 0);
  var door04 = createRoomObject("door 04","Door","door 04", 0, [createExitObject("research lab", "north"), createExitObject("hallway16", "south")], 0, 0);
  var door05 = createRoomObject("door 05","Door","door 05", 0, [createExitObject("storage unit 02", "east"), createExitObject("hallway18", "west")], 0, 0);

  // sample room instanciation code
  //var nextRoom = createRoomObject("Next Room","Room","This is the next room", 0, [createExitObject("Starting Room", "south")], 0, 0);
  //var startRoom = createRoomObject("Starting Room","Room","This is the starting room", 0, [createExitObject("Next Room", "north")], 0, 0);

  rooms.push(quarters);
  rooms.push(armory);
  rooms.push(computerLab);
  rooms.push(storageUnit1);
  rooms.push(storageUnit2);
  rooms.push(kitchen);
  rooms.push(messHall);
  rooms.push(maintenanceBay);
  rooms.push(hangerBay);
  rooms.push(researchLab);
  rooms.push(reactorRoom);

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
  rooms.push(hallway15);
  rooms.push(hallway16);
  rooms.push(hallway17);
  rooms.push(hallway18);
  rooms.push(hallway19);

  rooms.push(vent01);
  rooms.push(vent02);
  rooms.push(vent03);
  rooms.push(vent04);
  rooms.push(vent05);

  rooms.push(rubble01);
  rooms.push(rubble02);
  rooms.push(rubble03);
  rooms.push(rubble04);

  rooms.push(door01);
  rooms.push(door02);
  rooms.push(door03);
  rooms.push(door04);
  rooms.push(door05);

  player.currentRoom = quarters;
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
  var text = document.getElementById("gameInput").value.trim();
  var gameInputText = text.toLowerCase();
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
  else if (words.includes("search") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>" +input+"</span>";
    search(player.currentRoom)
  }
  else if(words[0] == ("pick") && words[1] == ("up"))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>" +input+"</span>";
    alert("Yes!");
  }
  else if(words[0] == ("take") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>" +input+"</span>";
    alert("fe");
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>I don't know this command: '" +input+"'</span>";
  }
}

function pickUpItems(words)
{
  playerRoom.roomItems.forEach((item, i) => {
    if(item.item.itemSearched = true)
    document.getElementById("text-display").innerHTML += "</br><span id='userTextBlue'>"+ i + ". " +item.item.itemName+"'</span>";
  });
}

function search(playerRoom)
{
  playerRoom.roomItems.forEach((item, i) => {
    item.item.itemSearched = true;
    document.getElementById("text-display").innerHTML += "</br><span id='userTextBlue'>You notice a '" +item.item.itemName+"'</span>";
  });

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

function createPlayerObject(usernameValue, healthValue, charClassValue, currentRoomValue, inventoryValue, statsValue, attackValue, defenseValue)
{
  var playerObject = {username:usernameValue, health:healthValue, charClass:charClassValue, currentRoom:currentRoomValue, inventory:inventoryValue, stats:statsValue, attack:attackValue, defense:defenseValue};
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
function createItemObject(itemNameValue, itemTypeValue, itemDescriptionValue, itemSearchedValue)
{
  var itemObject = {itemName:itemNameValue, itemType:itemTypeValue, itemDescription:itemDescriptionValue, itemSearched:itemSearchedValue};
  return itemObject;
}
function createWeaponObject(itemNameValue, twoHandedValue, damageValue, weaponTypeValue, attackKeyValue, descriptionValue)
{
  var weaponObject = {item:createItemObject(itemNameValue, "Weapon", descriptionValue, false), twoHanded:twoHandedValue, damage:damageValue, weaponType:weaponTypeValue, attackKey:attackKeyValue};
  return weaponObject;
}
function createArmourObject(itemNameValue, bodyPartValue, defenseValue, descriptionValue)
{
  var armourObject = {item:createItemObject(itemNameValue, "Armour", descriptionValue, false), bodyPart:bodyPartValue, defense:defenseValue};
  return armourObject;
}
function createGadgetObject(itemNameValue, descriptionValue)
{
  var gadgetObject = {item:createItemObject(itemNameValue, "Gadget", descriptionValue, false)};
  return gadgetObject;
}
function createDataPadObject(itemNameValue, descriptionValue, informationValue)
{
  var dataPadObject = {item:createItemObject(itemNameValue, "DataPad", descriptionValue, false), information:informationValue};
  return dataPadObject;
}
function createModifierObject(itemNameValue, descriptionValue, changeValue, mechanicChangeValue)
{
  var modifierObject = {item:createItemObject(itemNameValue, "Modifier", descriptionValue, false), change:changeValue, mechanicChange:mechanicChangeValue};
  return modifierObject;
}
function createInteractableObject(verbValue)
{
  var interactableObject = {verb:verbValue};
  return interactableObject;
}
