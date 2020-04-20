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
  }
}
// this method checks if the user has input a name and selected a class, if not lets them know that
function inputValidation(){
  var issue = false;
  if(document.getElementById("name").value===""){
    desc = "You must enter a name before you begin";
    document.getElementById("name").style="background: repeating-linear-gradient(180deg,#590606,#590606 10px,#320303 10px,#320303 20px)";

    issue = true;
  }
  else if(!document.getElementById("Hacker").checked && !document.getElementById("Engineer").checked && !document.getElementById("SpaceCowboy").checked)
  {
    desc = "You must select a class before you begin";
    issue = true;
  }
  else{
    changeTextDescription();
    desc = document.getElementById("CharacterDesc").innerHTML;
  }
  document.getElementById("CharacterDesc").innerHTML = desc;

  return issue;
}
