var player = createPlayerObject("Luke", 100, "Engineer", "", [], createStatObject(0, "not finished", 0, 0), 0, 0);
var rooms =[];
var roomDescriptions = [];

function gameOverStats(){
  document.getElementById("timeSpent").textContent = passedValue;
}

function gameStart() {
 //method will decide and pick between starter rooms based on class

 if (document.getElementById("Hacker").checked)
 {
   player.charClass = "Hacker";
   player.currentRoom = "computer lab";
 }
 else if (document.getElementById("Engineer").checked)
 {
   player.charClass = "Engineer";
   player.currentRoom = "quarters";
 }
 else if (document.getElementById("SpaceCowboy").value)
 {
   player.charClass = "SpaceCowboy";
   player.currentRoom = "armory";
 }

 window.location.href = "mainGame.html";


 outputCurrentRoomDesc("first-entry");

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
function createRoomObject(roomNameValue, typeValue, roomDescriptionValue, enemiesValue, exitsValue, roomItemsValue, interactableRoomObjectsValue,roomDiscoveredValue)
{
  var roomObject = {roomName:roomNameValue, type:typeValue, roomDescription:roomDescriptionValue, enemies:enemiesValue, exits:exitsValue, roomItems:roomItemsValue, interactableRoomObjects:interactableRoomObjectsValue, roomDiscovered:roomDiscoveredValue};
  return roomObject;
}
function createExitObject(exitRoomNameValue, orientationValue)
{
  var exitObject = {exitRoomName:exitRoomNameValue, orientation:orientationValue};
  return exitObject;
}
function createItemObject(itemNameValue, itemTypeValue, itemDescriptionValue, itemSearchedValue,itemTakenValue)
{
  var itemObject = {itemName:itemNameValue, itemType:itemTypeValue, itemDescription:itemDescriptionValue, itemSearched:itemSearchedValue,itemTaken:itemTakenValue};
  return itemObject;
}
function createWeaponObject(itemNameValue, damageValue, weaponTypeValue, attackKeyValue, descriptionValue)
{
  var weaponObject = {item:createItemObject(itemNameValue, "Weapon", descriptionValue, false, false),  damage:damageValue, weaponType:weaponTypeValue, attackKey:attackKeyValue};
  return weaponObject;
}
function createArmourObject(itemNameValue, bodyPartValue, defenseValue, descriptionValue)
{
  var armourObject = {item:createItemObject(itemNameValue, "Armour", descriptionValue, false), bodyPart:bodyPartValue, defense:defenseValue};
  return armourObject;
}
function createGadgetObject(itemNameValue, descriptionValue)
{
  var gadgetObject = {item:createItemObject(itemNameValue, "Gadget", descriptionValue, false, false)};
  return gadgetObject;
}
function createDataPadObject(itemNameValue,descriptionValue)
{
  var dataPadObject =  {item:createItemObject(itemNameValue, "Datapad", descriptionValue, false, false)};
  return dataPadObject;
}
function createInteractableObjectt(itemNameValue,descriptionValue)
{
  var interactableObject =  {item:createItemObject(itemNameValue, "Interact", descriptionValue, false, false)};
  return interactableObject;
}
function createModifierObject(itemNameValue, descriptionValue, changeValue, mechanicChangeValue)
{
  var modifierObject = {item:createItemObject(itemNameValue, "Modifier", descriptionValue, false), change:changeValue, mechanicChange:mechanicChangeValue};
  return modifierObject;
}
const textDescs = [
  //quarters
  {
    action:"first-entry",
    room: "quarters",
    text: "you, have just been sleeping after a long shift, when you are thrown suddenly to the floor with a bang that could wake the dead.You stumble to your feet, bleary-eyed, with no idea what’s going on, but whatever it is, it isn’t going to be fun."
  },
  {
    //EXAMINE LOOK
    action:"look",
    room:"quarters",
    text:'You glance quickly around the room, eyes still adjusting the emergency lighting that has now appeared above you. From where you stand now, there is a doorway to the WEST, the only exit to the room you are in.'
  },
  {
    //PICK UP blowtorch
    action:"pick up blowtorch",
    room:"quarters",
    text:"You pick up the BLOWTORCH."
  },
  {
    //Pick up pistol
    action:"pick up pistol",
    room:"quarters",
    text:"You pick up the PISTOL"
  },
  {
    //Go west
    action:"go west",
    room:"quarters",
    text:"You venture out the room, and prepare yourself for whatever is to come next."
  },
  {
    //Second-Entry
    action:"second-entry",
    room:"quarters",
    text:"You re-nter the quarters finding them exactly as you left them."
  },

  //Hallway01
  {
    action: "first-entry",
    room: "hallway01",
    text: "You walk out of your quarters and head into the hallway."
  },
  {
    action: "second-entry",
    room: "hallway01",
    text: "You walk out of your quarters and head into the hallway."
  },
  {
    action: "examine broadcast",
    room: "hallway01",
    text: "You inspect the broadcast it flashes “WARNING: SHIP INTEGRITY COMPROMISED ABANDON SHIP” That doesn’t sound good better try and make it to the hanger bay",
  },
/*/
  //Hallway02
  {
    action:,
    room:,
    text:,
  },
  //Hallway03
  {
    action:,
    room:,
    text:,
  },
  //Hallway04
  {
    action:,
    room:,
    text:,
  },
/*/
]
addRooms();


function addRooms()
{

  // start room instanciation
  var quarters = createRoomObject("quarters", "room", roomDescriptions[0], 0, [createExitObject("hallway01", "west")], [createWeaponObject("pistol",  10, "Ranged", ["shoot"], "It is a gun"), createGadgetObject("blowtorch","This is a blowtorch")],0,false);
  var armory = createRoomObject("armory","room","This is the Armory", 0, [createExitObject("hallway08", "north"), createExitObject("hallway09", "south")], [], 0,false);
  var computerLab = createRoomObject("computer lab", "room", "This is the Computer Lab", 0, [createExitObject("hallway04", "north"), createExitObject("rubble 01", "west")], [], 0,false);

  // other room instanciation
  //createWeaponObject(itemNameValue, damageValue, weaponTypeValue, attackKeyValue, descriptionValue)
  //createRoomObject(roomNameValue, typeValue, roomDescriptionValue, enemiesValue, exitsValue, roomItemsValue, interactableRoomObjectsValue,roomDiscoveredValue)
  //createItemObject(itemNameValue, itemTypeValue, itemDescriptionValue, itemSearchedValue,itemTakenValue)
  //createDataPadObject(itemNameValue, descriptionValue, informationValue)
  var storageUnit1 = createRoomObject("storage unit 01","room","This is storage unit 1", 0, [createExitObject("hallway04", "west")], [], 0,false);
  var storageUnit2 = createRoomObject("storage unit 02","room","This is storage unit 2", 0, [createExitObject("vent 05", "north"), createExitObject("door 05", "south"), createExitObject("rubble 04", "west")], [], 0,false);
  var kitchen = createRoomObject("kitchen","room","This is the kitchen", 0, [createExitObject("mess hall", "north"), createExitObject("hallway06", "south")], [], 0,false);
  var messHall = createRoomObject("mess hall","room","This is the mess hall", 0, [createExitObject("hallway17", "north"), createExitObject("kitchen", "south"), createExitObject("hallway10", "west")], [], 0,false);
  var maintenanceBay  = createRoomObject("maintenance bay","room","This is the maintenance bay", 0, [createExitObject("vent 03", "north"), createExitObject("hallway11", "south")], [], 0,false);
  var hangerBay  = createRoomObject("hanger bay","room","This is the hanger bay", 0, [createExitObject("hallway12", "east"), createExitObject("exit", "west")], [], 0,false);
  var researchLab  = createRoomObject("research lab","room","This is the research lab", 0, [createExitObject("rubble 03", "south"), createExitObject("hallway17", "east")], [], 0,false);
  var reactorRoom = createRoomObject("reactor room","room","This is the reactor room", 0, [createExitObject("door 04", "south"), createExitObject("vent 05", "east"), createExitObject("hallway15", "west")], [], 0,false);

  // hallway instanciation
  var hallway01 = createRoomObject("hallway01","hallway","hallway01", 0, [createExitObject("hallway02", "north"), createExitObject("hallway03", "south"), createExitObject("quarters", "east")],[createInteractableObject("broadcast","This is a broadcast")], 1,false);
  var hallway02 = createRoomObject("hallway02","hallway","hallway02", 0, [createExitObject("hallway01", "south")], 0, 0,false);
  var hallway03 = createRoomObject("hallway03","hallway","hallway03", 0, [createExitObject("hallway01", "north"), createExitObject("hallway04", "south"), createExitObject("vent 01", "west")], [], 0,false);
  var hallway04 = createRoomObject("hallway04","hallway","hallway04", 0, [createExitObject("hallway03", "north"), createExitObject("computer lab", "south"), createExitObject("storage unit 01", "east"), createExitObject("door 01", "west")], [], 0,false);
  var hallway05 = createRoomObject("hallway05","hallway","hallway05", 0, [createExitObject("hallway06", "north"), createExitObject("door 01", "south"), createExitObject("vent 01", "east")], [], 0,false);
  var hallway06 = createRoomObject("hallway06","hallway","hallway06", 0, [createExitObject("kitchen", "north"), createExitObject("hallway05", "south"), createExitObject("hallway07", "west")], [], 0,false);
  var hallway07 = createRoomObject("hallway07","hallway","hallway07", 0, [createExitObject("vent 02", "north"), createExitObject("hallway06", "east"), createExitObject("hallway08", "west")], [], 0,false);
  var hallway08 = createRoomObject("hallway08","hallway","hallway08", 0, [createExitObject("armory", "south"), createExitObject("hallway07", "east"), createExitObject("rubble 02", "west")], [], 0,false);
  var hallway09 = createRoomObject("hallway09","hallway","hallway09", 0, [createExitObject("armory", "north"), createExitObject("hallway07", "east"), createExitObject("rubble 02", "west")], [], 0,false);
  var hallway10 = createRoomObject("Armory","Room","This is the Armory", 0, [createExitObject("Armory", "north"), createExitObject("Armory", "south")], [], 0,false);
  var hallway11 = createRoomObject("Armory","Room","This is the Armory", 0, [createExitObject("Armory", "north"), createExitObject("Armory", "south")], [], 0,false);
  var hallway12 = createRoomObject("Armory","Room","This is the Armory", 0, [createExitObject("Armory", "north"), createExitObject("Armory", "south")], [], 0,false);
  var hallway13 = createRoomObject("Armory","Room","This is the Armory", 0, [createExitObject("Armory", "north"), createExitObject("Armory", "south")], [], 0,false);
  // sample room instanciation code
  //var nextRoom = createRoomObject("Next Room","Room","This is the next room", 0, [createExitObject("Starting Room", "south")], 0, 0);
  //var startRoom = createRoomObject("Starting Room","Room","This is the starting room", 0, [createExitObject("Next Room", "north")], 0, 0);

  rooms.push(quarters);
  rooms.push(hallway01);
  rooms.push(hallway02);
  rooms.push(hallway03);
  rooms.push(hallway04);

    player.currentRoom = quarters;
}

function getRoomTextDesc(roomName,action)
{
  var roomDesc
  document.getElementById("text-display").innerHTML += ">" + action;
  document.getElementById("text-display").innerHTML +=  ">" +roomName;
  for (let i = 0; i < textDescs.length; i++) {
  //  document.getElementById("text-display").innerHTML += ">" +textDescs[i].action;
  //  document.getElementById("text-display").innerHTML += ">" +textDescs[i].room;
    if(textDescs[i].room === roomName && textDescs[i].action === action)
    {
    //  document.getElementById("text-display").innerHTML += ">" +textDescs[i].text;
      roomDesc=(textDescs[i].text);
    }
  }
  return roomDesc;
}


function outputCurrentRoomDesc(action)
{
  var currentRoomName=player.currentRoom.roomName;
  if(action=="first-entry"){
    player.currentRoom.roomDiscovered=true;
  }
    document.getElementById("text-display").innerHTML += currentRoomName;
    roomDesc= getRoomTextDesc(currentRoomName,action);
    document.getElementById("text-display").innerHTML += ">" +roomDesc;
//  player.currentRoom.exits.forEach((item, i)=> {
//  document.getElementById("text-display").innerHTML += "</br>" + "There is an exit to the " + item.orientation;
//  });
  //;
}
//function outputCurrentAndNextRoom()
//{
//  document.getElementById("text-display").innerHTML += player.currentRoom.roomDescription;
//  player.currentRoom.exits.forEach((item, i)=> {
//    document.getElementById("text-display").innerHTML += "</br>" + "There is an exit to the " + item.orientation;
//  });
//  ;
//}

function commandInput()
{
  var gameInputText = document.getElementById("gameInput").value;
  gameInputText.trim();
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
  else if (words.includes("search") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    search(player.currentRoom);
  }
  else if (words.includes("examine") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    outputCurrentRoomDesc(input);

  }
  else if (words.includes("look") == true)
  {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
      outputCurrentRoomDesc("look");
  }
    else if (words.includes("Hint") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";

  }
  else if(words[0] == ("pick") && words[1] == ("up"))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    pickUpItems(player.currentRoom,input);
  }
  else if(words[0] == ("take") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    pickUpItems(player.currentRoom,words);
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>I don't know this command: '" +input+"'</span>";
  }
}

function pickUpItems(playerRoom,words)
{
      playerRoom.roomItems.forEach((item, i) => {
      if(words.includes(item.item.itemName) && item.item.itemSearched==true && (item.item.itemType=="Gadget" || item.item.itemType=="Weapon"))
      {
        outputCurrentRoomDesc(words);
        item.item.itemTaken=true;
        player.inventory.push(item);
        document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +item.item.itemName +"Added to inventory"+"</span>";
      }
      if(words.includes(item.item.itemName) && item.item.itemtaken==true)
      {
        document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>" +"You already have that item"+"</span>";
      }
      if(words.includes(item.item.itemName) && item.item.itemSearched==true && (item.item.itemType=="Datapad"))
      {
        document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>" +"You cannot pick up the "+item.item.itemName +"</span>";
        document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>" +"Try examining it instead!" +"</span>";

      }

  });
}
//Might need to be kept for search function
///function pickUpItems(words)
//{
//  playerRoom.roomItems.forEach((item, i) => {
//    if(item.item.itemSearched = true)
//    document.getElementById("text-display").innerHTML += "</br><span id='userTextBlue'>"+ i + ". " +item.item.itemName+"'</span>";
//  });
//}
function search(playerRoom)
{
  playerRoom.roomItems.forEach((item, i) => {
    if(item.item.itemTaken != true){
      if(item.item.itemType =="Gadget"){
        document.getElementById("text-display").innerHTML += "</br><span id='userTextBlue'>>You notice a '" +item.item.itemName+"'</span>";
      }
      if(item.item.itemType =="Weapon"){
        document.getElementById("text-display").innerHTML += "</br><span id='userTextYellow'>>You notice a '" +item.item.itemName+"'</span>";
      }
      if(item.item.itemType =="Interact"){
        document.getElementById("text-display").innerHTML += "</br><span id='userTextOrange'>>You notice a '" +item.item.itemName+"'</span>";
      }
      item.item.itemSearched = true;
    }
  });
}
function vicinity(playerRoom){

      playerRoom.roomItems.forEach((item, i) => {
      if(item.item.itemSearched == true && item.item.itemTaken == false )
      {
        if(item.item.itemType =="Gadget"){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextBlue'>>The '" +item.item.itemName+ " is still in the "+playerRoom.type +"</span>";
        }
        if(item.item.itemType =="Weapon"){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextYellow'>>The '" +item.item.itemName+ " is still in the "+playerRoom.type +"</span>";
        }
        if(item.item.itemType =="Datapad"){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextOrange'>>The '" +item.item.itemName+ " is still in the "+playerRoom.type +"</span>";
        }
        //Update vicinity html not yet added
      }
      else{
      }
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
    document.getElementById("text-display").innerHTML+= "</br>>You can't go in multiple directions...";
  }
  else if(checkDirection === 0)
  {
    document.getElementById("text-display").innerHTML+= "</br>>I guess you're staying here then...</br>";
    //outputCurrentAndNextRoom(words);
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
    if(newCurrent.roomDiscovered==true){
      outputCurrentRoomDesc("second-entry");
      document.getElementById("text-display").innerHTML+= "</br>";
    //  document.getElementById("text-display").innerHTML+= newCurrent.roomDiscovered;
    //  document.getElementById("text-display").innerHTML+= newCurrent.roomName;
      vicinity(newCurrent);
    }
    if(newCurrent.roomDiscovered==false){
      document.getElementById("text-display").innerHTML+= "</br>";
    //  document.getElementById("text-display").innerHTML+= newCurrent.roomDiscovered;
    //  document.getElementById("text-display").innerHTML+= newCurrent.roomName;
      outputCurrentRoomDesc("first-entry");
    }

  }
  else
  {
    document.getElementById("text-display").innerHTML+= "</br>>There is nowhere in that direction..";
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
