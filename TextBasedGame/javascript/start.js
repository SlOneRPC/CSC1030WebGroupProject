// this method is used to  
function startGame(){
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
