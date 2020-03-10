var player = new playerObject(document.getElementById("name").value, charHealth(), document.getElementById("charClass") inventory, stats);
var stats = new statsObject();
<<<<<<< HEAD
var stats = new statsObject(1, 1, 1, 1);
=======
>>>>>>> 060920b933c91162ff8913627bb3cff021f5ad2c
var inventory = [];
var item = new itemObject();
var interactable =  new interactableObject();

<<<<<<< HEAD
var item = new itemObject(1,1,11);
var interactable =  new interactableObject(4);
=======
>>>>>>> 060920b933c91162ff8913627bb3cff021f5ad2c

var rooms = [];

var interactableRoomObjects = [];
var verb = [];

function playerObject(username, health, class, currentRoom, inventory, stats)
{

}
function statsObjects(areasExplored, endingAchieved, enemiesDefeated, timeLeft,)
{

}

function charStart()
{
  var className = document.getElementById("charClass");
  if (className == "Hacker")
<<<<<<< HEAD
  if (document.getElementById("Hacker").checked)
  {
    return ;
    return document.getElementById("Hacker").value;
  }
  else if (classHealth == "Engineer")
  else if (document.getElementById("Engineer").checked)
  {
    return ;
    return document.getElementById("Engineer").value;
=======
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
>>>>>>> 060920b933c91162ff8913627bb3cff021f5ad2c
  }
  else
  {
    return ;
<<<<<<< HEAD
    return document.getElementById("SpaceCowboy").value;
  }
}
function addItemInventory(item)
=======
  }
}
function addItemInventory(item)
{
>>>>>>> 060920b933c91162ff8913627bb3cff021f5ad2c

}

function startGame(){
  charStart();
  document.getElementById("wrapper").style.display = "none";
}

function getPlayerDetails()
{
  var player = new playerObject(document.getElementById("name").value, charHealth(), document.getElementById("charClass") inventory, stats);
  var nameInput = document.getElementById("name").value;
  alert(nameInput);
<<<<<<< HEAD
  var classSelect = charStart();
  alert(nameInput + " " + classSelect);
}
=======
};
>>>>>>> 060920b933c91162ff8913627bb3cff021f5ad2c
