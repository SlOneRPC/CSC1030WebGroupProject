var player = createPlayerObject("Luke", 100, "Engineer", "", [], createStatObject(0, 0, 0, 0), 0, 0);
var rooms = [];
var roomDescriptions = [];

function gameStart()
{
 //method will decide and pick between starter rooms based on class
 //player.username = sessionStorage.getItem("name");
 //player.charClass = sessionStorage.getItem("class");

 addRooms();
 var newCurrent = createRoomObject(0,0,0,0,0,0,0,0,0);
 if (player.charClass == "Hacker")
 {
   rooms.forEach((item, i) => {
     if(item.roomName == "computer lab")
     {
       newCurrent = item;
       item.roomDiscovered = true;
     }
   });
 }
 else if (player.charClass == "Engineer")
 {
   rooms.forEach((item, i) => {
     if(item.roomName == "quarters")
     {
       newCurrent = item;
       item.roomDiscovered = true;
     }
   });
 }
 else if (player.charClass == "SpaceCowboy")
 {
   rooms.forEach((item, i) => {
     if(item.roomName == "armory")
     {
       newCurrent = item;
       item.roomDiscovered = true;
     }
   });
 }
 player.currentRoom = newCurrent;
 document.getElementById("text-display").innerHTML += "</br>>" +player.currentRoom.roomName;
}
function createPlayerObject(usernameValue, healthValue, charClassValue, currentRoomValue, inventoryValue, statsValue, attackValue, defenseValue)
{
  var playerObject = {username:usernameValue, health:healthValue, charClass:charClassValue, currentRoom:currentRoomValue, inventory:inventoryValue, stats:statsValue, attack:attackValue, defense:defenseValue};
  return playerObject;
}
function createStatObject(areasExploredValue, itemsCollectedValue, enemiesDefeatedValue, timeLeftValue)
{
  var statsObject = {areasExplored:areasExploredValue, itemsCollected:itemsCollectedValue, enemiesDefeated:enemiesDefeatedValue, timeLeft:timeLeftValue};
  return statsObject;
}
function createRoomObject(roomNameValue, typeValue, roomDescriptionValue, enemiesValue, exitsValue, roomItemsValue, interactableRoomObjectsValue, roomDiscoveredValue, lookedValue)
{
  var roomObject = {roomName:roomNameValue, type:typeValue, roomDescription:roomDescriptionValue, enemies:enemiesValue, exits:exitsValue, roomItems:roomItemsValue, interactables:interactableRoomObjectsValue, roomDiscovered:roomDiscoveredValue, looked:lookedValue};
  return roomObject;
}
function createExitObject(exitRoomNameValue, orientationValue)
{
  var exitObject = {exitRoomName:exitRoomNameValue, orientation:orientationValue};
  return exitObject;
}
function createItemObject(itemNameValue, itemTypeValue, itemDescriptionValue, itemSearchedValue, itemFilePathValue)
{
  var itemObject = {itemName:itemNameValue, itemType:itemTypeValue, itemDescription:itemDescriptionValue, itemSearched:itemSearchedValue, itemFilePath:itemFilePathValue};
  return itemObject;
}
function createWeaponObject(itemNameValue, damageValue, weaponTypeValue, attackKeyValue, descriptionValue, itemFilePathValue)
{
  var weaponObject = {item:createItemObject(itemNameValue, "Weapon", descriptionValue, false, itemFilePathValue),  damage:damageValue, weaponType:weaponTypeValue, attackKey:attackKeyValue};
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
function createDataPadObject(itemNameValue,descriptionValue, informationValue, itemFilePathValue)
{
  var dataPadObject =  {item:createItemObject(itemNameValue, "Datapad", descriptionValue, false, itemFilePathValue), information:informationValue};
  return dataPadObject;
}
function createInteractableObject(interactableNameValue, descriptionValue, customCommandValue)
{
  var interactableObject =  {interactableName:interactableNameValue, description:descriptionValue,customCommand:customCommandValue};
  return interactableObject;
}
function createModifierObject(itemNameValue, descriptionValue, changeValue, mechanicChangeValue)
{
  var modifierObject = {item:createItemObject(itemNameValue, "Modifier", descriptionValue, false, ""), change:changeValue, mechanicChange:mechanicChangeValue};
  return modifierObject;
}

const textDescs = [
  //quarters
  {
    action:"first-entry",
    room: "quarters",
    text: "you, have just been sleeping after a long shift, when you are thrown suddenly to the floor with a bang that could wake the dead.You stumble to your feet, bleary-eyed, with no idea what’s going on, but whatever it is, it isn’t going to be fun."
  },
//  {
    //EXAMINE LOOK
//    action:"look",
//    room:"quarters",
//    text:'You glance quickly around the room, eyes still adjusting the emergency lighting that has now appeared above you. From where you stand now, there is a doorway to the WEST, the only exit to the room you are in.'
//  },
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
    action: "look",
    room: "hallway01",
    text: "You look around the hall and see there is a path to the NORTH and a path to the SOUTH."
  },
  {
    action: "examine broadcast",
    room: "hallway01",
    text: "You inspect the broadcast it flashes “WARNING: SHIP INTEGRITY COMPROMISED ABANDON SHIP” That doesn’t sound good better try and make it to the hanger bay",
  },
]

function addRooms()
{

  // start room instanciation
  var quarters = createRoomObject("quarters", "room", "quarters", 0, [createExitObject("hallway01", "west")], [createWeaponObject("pistol",  10, "Ranged", ["shoot"], "It is a gun","images/laserpistol.png"), createGadgetObject("blowtorch","This is a blowtorch","images/blowtorch.png")],0,false);
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
  var hallway01 = createRoomObject("hallway01","hallway","hallway01", 0, [createExitObject("hallway02", "north"), createExitObject("hallway03", "south"), createExitObject("quarters", "east")],[],[createInteractableObject("broadcast","You inspect the broadcast it flashes “WARNING: SHIP INTEGRITY COMPROMISED ABANDON SHIP” That doesn’t sound good better try and make it to the hanger bay","no")], 1,false);
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

}

function getRoomTextDesc(roomName,action)
{
  var roomDesc
//  document.getElementById("text-display").innerHTML += ">" + action;
//  document.getElementById("text-display").innerHTML +=  ">" +roomName;
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

//function outputCurrentRoomDesc(action)
//{
  //var currentRoomName = player.currentRoom.roomName;
//  if(action=="first-entry"){
  //  player.currentRoom.roomDiscovered=true;
  //}
    //document.getElementById("text-display").innerHTML += currentRoomName;
    //roomDesc= getRoomTextDesc(currentRoomName,action);
    //document.getElementById("text-display").innerHTML += "</br>>" +roomDesc;
//  });
  //;
  //document.getElementById("text-display").innerHTML += "</br>>" +player.currentRoom.roomName;
//}

function outputCurrentRoomExits()
{
//  document.getElementById("text-display").innerHTML += player.currentRoom.roomDescription;
   //var currentRoom=player.currentRoom.roomName;
   var currentRoom=player.currentRoom;
   if(currentRoom.type=="hallway"){
     document.getElementById("text-display").innerHTML += "</br>" + "You look around the hallway, ";
   }
   else{
    document.getElementById("text-display").innerHTML += "</br>" + "You look around the " + player.currentRoom.roomName+",";
   }
   player.currentRoom.exits.forEach((item, i)=> {
   if(currentRoom.type=="hallway")
   {
     document.getElementById("text-display").innerHTML += "</br>" + " there is a pathway to the " + item.orientation;
   }
   else
   {
     document.getElementById("text-display").innerHTML += "</br>" + " there is a doorway to the " + item.orientation;
   }
  });
  ;
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
  else if (words.includes("search") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    search(player.currentRoom);
  }
  else if (words.includes("examine") == true)//|| words.includes("inspect") == true
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    examineInteractables(player.currentRoom.interactables.length, words);
  }
  else if (words.includes("look") == true)
  {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
      outputCurrentRoomExits();
  }
    else if (words.includes("Hint") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";

  }
  else if(words[0] == ("pick") && words[1] == ("up"))
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    pickUpItems(player.currentRoom,words,false);
  }
  else if(words[0] == ("take") == true)
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +input+"</span>";
    pickUpItems(player.currentRoom,words,false);
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>I don't know this command: '" +input+"'</span>";
  }
}


function examineInteractables(roomInteractables, words)
{
  if(roomInteractables >= 1)
  {
    player.currentRoom.interactables.forEach((interactable, i) =>
    {
      if(words.includes(interactable.interactableName))
      {
        document.getElementById("text-display").innerHTML += "</br><span>>"+interactable.description+"</span>";
      }
    });
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span>>There is nothing to interact with in this room</span>";
  }
}


function pickUpItems(playerRoom,words,dragged)
{
      playerRoom.roomItems.forEach((item, i) => {
      if(words.includes(item.item.itemName) && item.item.itemSearched==true && (item.item.itemType=="Gadget" || item.item.itemType=="Weapon"))
      {
        player.inventory.push(item);
        playerRoom.roomItems.splice(i, 1);
        document.getElementById("text-display").innerHTML += "</br><span id='userTextRight'>>" +item.item.itemName +" added to inventory"+"</span>";
        if(!dragged)
          addItemToInventory(item.item);
      }
      /*if(words.includes(item.item.itemName) && item.item.itemSearched==true && (item.item.itemType=="Interact"))
      {
        document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>" +"You cannot pick up the "+item.item.itemName +"</span>";
        document.getElementById("text-display").innerHTML += "</br><span id='userTextWrong'>>" +"Try examining it instead!" +"</span>";

      }*/

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
  if(playerRoom.roomItems.length >=1)
  {
    playerRoom.roomItems.forEach((item, i) => {
        if(item.item.itemType =="Gadget"){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextBlue'>>You notice a '" +item.item.itemName+"'</span>";
        }
        else if(item.item.itemType =="Weapon"){
          document.getElementById("text-display").innerHTML += "</br><span id='userTextYellow'>>You notice a '" +item.item.itemName+"'</span>";
        }
        item.item.itemSearched = true;
      });
      vicinity(playerRoom);
  }
  else
  {
    document.getElementById("text-display").innerHTML += "</br><span>>There are no items in this room</span>";
  }
  if(playerRoom.interactables.length >= 1)
  {
    playerRoom.interactables.forEach((item, i) => {
      document.getElementById("text-display").innerHTML += "</br><span id='userTextOrange'>>You notice a '" +item.interactableName+"'</span>";
    });
  }
  else
  {
    {
      document.getElementById("text-display").innerHTML += "</br><span>>There is nothing interesting to look at</span>";
    }
  }
}

function vicinity(playerRoom)
{
  //get the correct table using a query
  var elements = document.querySelectorAll("#other1 td");
  var tableIndex = 0;

  playerRoom.roomItems.forEach((item, i) => {
    if(item.item.itemSearched == true)
    {
      //add inventory item to vicinity
      var name = item.item.itemName + "_img";
      elements[tableIndex].innerHTML = "<img src="+ item.item.itemFilePath +" alt=" + item.item.itemDescription+ " class='inventoryItem' draggable='true' ondragstart='drag(event)' id="+ name+">";
      tableIndex++;
    }
    else{
    }
  });


  clearVicinity(tableIndex);
}

function clearVicinity(startIndex){
  var elements = document.querySelectorAll("#other1 td");
  //clear all other inventory items
  for (var i = startIndex; i < 8; i++) {
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
          if(roomExit.orientation === direction)
          {
            newCurrent = returnNewRoom(roomExit.exitRoomName);
          }
      });
    player.currentRoom = newCurrent;
    if(player.currentRoom.roomDiscovered==true)
    {
      document.getElementById("text-display").innerHTML+= "</br>>" +player.currentRoom.roomDescription;
      vicinity(player.currentRoom);
    }
    else
    {
      clearVicinity(0);
      document.getElementById("text-display").innerHTML+= "</br>>" +player.currentRoom.roomDescription;
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

function addItemToInventory(item){

    var elements = document.querySelectorAll("#inventory td");

    for (var i = 0; i < elements.length; i++) {
      if(elements[i].innerHTML == ''){
        elements[i].innerHTML += "<img src="+ item.itemFilePath +" alt=" + item.itemDescription+ " class='inventoryItem'>";
        break;
      }
    }

    vicinity(player.currentRoom);
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
