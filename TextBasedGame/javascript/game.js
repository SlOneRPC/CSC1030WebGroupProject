var player = createPlayerObject("Luke", 100, "Hacker", "", [], "yes");
var rooms = [];
addRooms();

function addRooms()
{
  var nextRoom = createRoomObject("Next Room","Room","This is the next room", 0, [createExitObject("Starting Room", "south")], 0, 0);
  var startRoom = createRoomObject("Starting Room","Room","This is the starting room", 0, [createExitObject("Next Room", "north")], 0, 0);

  rooms.push(nextRoom);
  rooms.push(startRoom);

  player.currentRoom = startRoom;
}

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
function createExitObject(exitRoomNameValue, orientationValue)
{
  var exitObject = {exitRoomName:exitRoomNameValue, orientation:orientationValue};
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
}

function processCommands(input)
{
  var words = input.split(" ");
  if(words.includes("go") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userText'>" +input+"</span>";
    move(words);
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userText'>I don't know this command: '" +input+"'</span>";
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
