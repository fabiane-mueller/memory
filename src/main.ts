import "./styles/scss/main.scss";



const startButton = document.getElementById("startGame");

startButton?.addEventListener("click", startGame);



function startGame() {
  window.location.href = "settings.html";
}



