import "./styles/scss/main.scss";

const startButton = document.getElementById("startGame");

startButton?.addEventListener("click", startGame);



function startGame() {
  const selectedTheme = document.querySelector<HTMLInputElement>(
    'input[name="theme"]:checked'
  );

  const selectedPlayer = document.querySelector<HTMLInputElement>(
    'input[name="player"]:checked'
  );

  const selectedBoardSize = document.querySelector<HTMLInputElement>(
    'input[name="boardSize"]:checked'
  );

  if (!selectedTheme || !selectedPlayer || !selectedBoardSize) {
    return;
  }

  const theme = selectedTheme.value;
  const player = selectedPlayer.value;
  const boardSize = selectedBoardSize.value;

  window.location.href =
    `game.html?theme=${theme}&player=${player}&boardSize=${boardSize}`;
}


const themeRef = document.getElementById("csettingTheme");
const playerRef = document.getElementById("csettingPlayer");
const boardSizeRef = document.getElementById("csettingBoardSize");

const themeRadios = document.querySelectorAll('input[name="theme"]');
const playerRadios = document.querySelectorAll('input[name="player"]');
const boardSizeRadios = document.querySelectorAll('input[name="boardSize"]');

themeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    themeRef.classList.add("checked");
  });
});

playerRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    playerRef.classList.add("checked");
  });
});

boardSizeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    boardSizeRef.classList.add("checked");
  });
});