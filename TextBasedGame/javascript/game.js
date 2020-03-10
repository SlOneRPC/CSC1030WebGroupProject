
var stats = new statsObject(1, 1, 1, 1);
var inventory = [];


var item = new itemObject(1,1,11);
var interactable =  new interactableObject(4);

var rooms = [];

var interactableRoomObjects = [];
var verb = [];

function playerObject(username, health, charClass, currentRoom, inventory, stats)
{

}
function statsObjects(areasExplored, endingAchieved, enemiesDefeated, timeLeft)
{

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
