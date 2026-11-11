
import { cardsData } from "./card-data";
import "./styles/scss/main.scss";
import { players } from "./player-data";

let firstCard;
let secondCard;
let choosingCard = 2;
let matchedCards = [];

const params = new URLSearchParams(window.location.search);

const theme = params.get("theme");
const boardSize = Number(params.get("boardSize"));

let currentPlayer = players[0].name;

if (params.get("player") === players[1].name) {
  currentPlayer = players[1].name;
}

document.body.dataset.theme = theme;

function createBoard() {
  showCurrentPlayer();

  let gameBoardRef = document.getElementById("gameBoard");

  gameBoardRef?.classList.add(`game-board--${boardSize}`);

  cardsData.slice(0, boardSize).forEach((cardData) => {
    gameBoardRef.innerHTML += getCardHTML(cardData);
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });

  getScore();
}

function showCurrentPlayer() {
  const currentPlayerRef = document.getElementById("currentPlayer");

  if (currentPlayer == players[0].name) {
    currentPlayerRef.innerHTML = `
      <img src="public/assets/icons/${players[0].image}" alt="${currentPlayer}">
    `;
  } else {
    currentPlayerRef.innerHTML = `
      <img src="public/assets/icons/${players[1].image}" alt="${currentPlayer}">
    `;
  }
}

function getCardHTML(cardData) {
  return `
    <button class="card" data-card="${cardData.card}">
      <div class="card__inner">
        <div class="card__face"></div>
        <div class="card__face card__face--back">
          <img src="${cardData.image}" alt="${cardData.alt}">
        </div>
      </div>
    </button>
  `;
}

createBoard();

function flipCard() {
  if (matchedCards.includes(this.dataset.card)) {
    return;
  } else if (choosingCard == 2) {
    this.classList.add("flip");
    firstCard = this;
    choosingCard--;
  } else if (choosingCard == 1 && this !== firstCard) {
    secondCard = this;
    this.classList.add("flip");
    choosingCard--;
    compareCards();
  }
}

function compareCards() {
  const firstCardFaceRef = firstCard.querySelector(".card__face--back");
  const secondCardFaceRef = secondCard.querySelector(".card__face--back");

  if (firstCard.dataset.card === secondCard.dataset.card) {
    firstCardFaceRef.classList.add("card__face--back-match");
    secondCardFaceRef.classList.add("card__face--back-match");

    matchedCards.push(firstCard.dataset.card);

    addScore();

  } else {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      switchPlayer();
    }, 700);
  }

  choosingCard = 2;
}

function getScore() {
  const playerOneRef = document.getElementById("playerOne");
  const playerTwoRef = document.getElementById("playerTwo");

  playerOneRef.innerHTML = `<p><img src="public/assets/icons/${players[0].image}"> ${players[0].name} ${players[0].score}</p>`;
  playerTwoRef.innerHTML = `<p><img src="public/assets/icons/${players[1].image}"> ${players[1].name} ${players[1].score}</p>`;
}

function addScore() {
  if (currentPlayer == players[0].name) {
    players[0].score++;
  } else {
    players[1].score++;
  }

  getScore();
}

function switchPlayer() {
  if (currentPlayer == players[0].name) {
    currentPlayer = players[1].name;
  } else {
    currentPlayer = players[0].name;
  }

  showCurrentPlayer();
}


function exitGame() {
  const exitRef = document.getElementById("exitGame");

  exitRef?.addEventListener("click", () => {
    window.location.href = "settings.html";
  });
}

exitGame();