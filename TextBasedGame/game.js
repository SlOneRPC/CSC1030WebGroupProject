<<<<<<< HEAD
var player = new playerObject(document.getElementById("name").value, charHealth, document.getElementById("charClass") inventory, stats);
=======
var player = new playerObject(document.getElementById("name").value, charHealth(), document.getElementById("charClass") inventory, stats);
>>>>>>> 7c3bc27000b52fe8d30bed1ed5967254e98f1dd9
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
<<<<<<< HEAD
function statsObjects(areasExplored, endingAchieved)
=======
function statsObjects(areasExplored, endingAchieved, enemiesDefeated, timeLeft,)
>>>>>>> 7c3bc27000b52fe8d30bed1ed5967254e98f1dd9
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
<<<<<<< HEAD

=======
>>>>>>> 7c3bc27000b52fe8d30bed1ed5967254e98f1dd9
function addItemInventory(item)
{

}
<<<<<<< HEAD
=======
function getPlayerDetails()
{
  var player = new playerObject(document.getElementById("name").value, charHealth(), document.getElementById("charClass") inventory, stats);
  var nameInput = document.getElementById("name").value;
  alert(nameInput);
};
>>>>>>> 7c3bc27000b52fe8d30bed1ed5967254e98f1dd9
