var startRoom = createRoomObject("Starting Room","Room","This is the starting room", 0, [createExitObject(nextRoom, "north")], 0, 0);
var nextRoom = createRoomObject("Next Room","Room","This is the next room", 0, [createExitObject(startRoom, "south")], 0, 0);
var player = createPlayerObject("Luke", 100, "Hacker", startRoom, [], "yes");

var rooms = [];

var enemies = [];
var exits = [];
var roomItems = [];
var interactableRoomObjects = [];
var verb = [];

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
function createExitObject(exitRoomValue, orientationValue)
{
  var exitObject = {exitRoom:exitRoomValue, orientation:orientationValue};
  return exitObject;
}
function createItemObject(itemNameValue, itemTypeValue, interactionValue)
{
  var itemObject = {itemName:itemNameValue, itemType:itemTypeValue, interactions:interactionValue};
  return itemObject;
}
function createInteractableObject(verbValue)
{
  var interactableObject = {verb:verbValue};
  return interactableObject;
}

function addRooms()
{
  var startRoom = new roomObject("Starting Room","Room","This is the starting room", 0, [exitObject(nextRoom, "north")], 0, 0);
  var nextRoom = new roomObject("Next Room","Room","This is the next room", 0, [exitObject(startRoom, "south")], 0, 0);
  rooms.push(startRoom);
  rooms.push(nextRoom);
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
  alert(gameInputText);
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
