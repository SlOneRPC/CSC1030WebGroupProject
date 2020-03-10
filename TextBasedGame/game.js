var player = new playerObject(document.getElementById("name").value, charHealth, document.getElementById("charClass") inventory, stats);
var stats = new statsObject();
var inventory = [];
var item = new itemObject();
var interactable =  new interactableObject();

var rooms = [];

var enemies = [];
var exits = [];
var roomItems = [];
var interactableRoomObjects = [];
var verb = [];

function playerObject(username, health, class, currentRoom, inventory, stats)
{

}
function statsObjects(areasExplored, endingAchieved)
{

}
function roomObject(type, description, enemies, exits, roomItems, interactableRoomObjects)
{

}
function itemObject(name, type, interactions)
{

}
function interactableObject(verb)
{

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
  var className = document.getElementById("charClass");
  if (className == "Hacker")
  {
    return ;
  }
  else if (classHealth == "Engineer")
  {
    return ;
  }
  else
  {
    return ;
  }
}

function addItemInventory(item)
{

}
