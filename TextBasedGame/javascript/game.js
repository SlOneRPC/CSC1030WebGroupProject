var stats = new statsObject(1, 1, 1, 1);
var inventory = [];
var item = new itemObject(1,1,11);
var interactable =  new interactableObject(4);

var rooms = [];

var enemies = [];
var exits = [];
var roomItems = [];
var interactableRoomObjects = [];
var verb = [];

function playerObject(username, health, charClass, currentRoom, inventory, stats)
{

}
function statsObjects(areasExplored, endingAchieved, enemiesDefeated, timeLeft)
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
  if (document.getElementById("Hacker").checked)
  {
    return document.getElementById("Hacker").value;
  }
  else if (document.getElementById("Engineer").checked)
  {
    return document.getElementById("Engineer").value;
  }
  else
  {
    return document.getElementById("SpaceCowboy").value;
  }
}
function addItemInventory(item)
{


}

function createPlayer()
{
  var player = new playerObject(document.getElementById("name").value, charHealth(), document.getElementById("charClass"), inventory, stats);
}

function nameOutput()
{
  var nameInput = document.getElementById("name").value;
  var classSelect = charStart();
  alert(nameInput + " " + classSelect);
}
