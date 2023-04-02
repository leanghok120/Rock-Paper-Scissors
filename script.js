const computerChoices = ["paper", "scissors", "rock"];
const result = document.getElementById("result");
const totalWinsElement = document.getElementById("totalWins");
let totalWins = 0;

const totalWinsStorage = localStorage.getItem("totalWins");
if (totalWinsStorage !== null) {
  totalWins = parseInt(totalWinsStorage);
}

// Makes the computer choose a random choice

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return computerChoices[randomIndex];
}

// Activates when the user clicks paper

function userPaper() {
  const computer = computerChoice();
  if (computer === "rock") {
    result.textContent = "You win!";
    increaseWins();
  } else if (computer === "paper") {
    result.textContent = "Tie!";
  } else {
    result.textContent = "You lose!";
  }
}

// Activates when the user clicks rock

function userRock() {
  const computer = computerChoice();
  if (computer === "scissors") {
    result.textContent = "You win!";
    increaseWins();
    totalWins.textContent = parseInt(totalWins.textContent) + 1;
  } else if (computer === "rock") {
    result.textContent = "Tie!";
  } else {
    result.textContent = "You lose!";
  }
}

// Activates when the user clicks scissors

function userScissors() {
  const computer = computerChoice();
  if (computer === "paper") {
    result.textContent = "You win!";
    increaseWins();
  } else if (computer === "scissors") {
    result.textContent = "Tie!";
  } else {
    result.textContent = "You lose!";
  }
}

function increaseWins() {
  totalWins += 1;
  totalWinsElement.textContent = totalWins;
  localStorage.setItem("totalWins", totalWins);
}
