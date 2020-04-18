// this method is used to instantiate the player's details
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

// this method checks if the user has input a name and selected a class, if not lets them know that
function inputValidation(){
  var issue = false;
  if(document.getElementById("name").value===""){
    desc = "You must enter a name before you begin";
    issue = true;
  }
  else if(!document.getElementById("Hacker").checked && !document.getElementById("Engineer").checked && !document.getElementById("SpaceCowboy").checked)
  {
    desc = "You must select a class before you begin";
    issue = true;
  }
  document.getElementById("CharacterDesc").innerHTML = desc;

  return issue;
}
