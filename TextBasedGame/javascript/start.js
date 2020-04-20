// this method is used to instantiate the player's details
// document.getElementById("name").addEventListener('input', ))

function startGame(){
  if(inputValidation()){
    return;
  }
  sessionStorage.setItem("name", document.getElementById("name").value);

  if (document.getElementById("Hacker").checked)
  {
    sessionStorage.setItem("class", document.getElementById("Hacker").value);
  }
  else if (document.getElementById("Engineer").checked)
  {
    sessionStorage.setItem("class", document.getElementById("Engineer").value);
  }
  else if (document.getElementById("SpaceCowboy").checked)
  {
    sessionStorage.setItem("class", document.getElementById("SpaceCowboy").value);
  }

  window.location.href = "mainGame.html";
}

function checkLength(){
  var value = document.getElementById("name").value;
  if(value.length > -1)
  {
    document.getElementById("name").style="background: repeating-linear-gradient(180deg,#082316,#082316 10px,#05170E 10px,#05170E 20px)";
    document.getElementById("characterCreator").style="box-shadow: 0 0 10px 2px #4edaf9";

  }
}
// this method checks if the user has input a name and selected a class, if not lets them know that
function inputValidation(){
  var issue = false;
  if(document.getElementById("name").value===""){
    desc = "You must enter a name before you begin";
    document.getElementById("name").style="background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px)";
    document.getElementById("characterCreator").style="box-shadow: 0 0 10px 2px red";
    issue = true;
  }
  else if(!document.getElementById("Hacker").checked && !document.getElementById("Engineer").checked && !document.getElementById("SpaceCowboy").checked)
  {
    desc = "You must select a class before you begin";
    document.getElementById("characterCreator").style="box-shadow: 0 0 10px 2px red";
    document.getElementById("hackLabel").style="background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px)";
    document.getElementById("engiLabel").style="background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px)";
    document.getElementById("spaceLabel").style="background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px)";

    issue = true;
  }
  else{
    changeTextDescription();
    desc = document.getElementById("CharacterDesc").innerHTML;
  }
  document.getElementById("CharacterDesc").innerHTML = desc;

  return issue;
}

function nameInput(){
  if (documment.getElementById("name").value==="") {
    document.getElementById("name").background = "repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px)";
  }
  else{
    // need to change to green colours
    //document.getElementById("name").background = "repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px)";

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
}function nameOutput()
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
    desc = "Tasked with maintaining the ship’s computer systems, he knows his tech like the back of his hand and will use it to keep himself up and running from whatever is out there.";
  }
  else if(charStart() == "Engineer")
  {
    desc = "Armed with his blowtorch, he uses his know how to hold the ship together, and with his smarts, he can take on anything in his path.";
  }
  else if(charStart() =="SpaceCowboy")
  {
    desc = "Travelling through space is a risky business to most, but unlike the rest, he can outshoot bandits, criminals and things that go bump in the night before they have the chance to blink.";
  }
  document.getElementById("CharacterDesc").innerHTML = desc;
}
