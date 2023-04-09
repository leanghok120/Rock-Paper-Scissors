// Choices

const computerChoices = ["paper", "scissors", "rock"];
// H3 Elements

const result = document.getElementById("result");
const totalWinsElement = document.getElementById("totalWins");
const userChoiceElement = document.getElementById("userChoice");
const computerChoiceElement = document.getElementById("computerChoice");

let totalWins = 0;

const totalWinsStorage = localStorage.getItem("totalWins");
if (totalWinsStorage !== null) {
  totalWins = parseInt(totalWinsStorage);
  increaseWins(0);
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
    increaseWins(1);
    choice("paper", computer);
  } else if (computer === "paper") {
    result.textContent = "Tie!";
    choice("paper", computer);
  } else {
    result.textContent = "You lose!";
    choice("paper", computer);
  }
}

// Activates when the user clicks rock

function userRock() {
  const computer = computerChoice();
  if (computer === "scissors") {
    result.textContent = "You win!";
    increaseWins(1);
    choice("rock", computer);
  } else if (computer === "rock") {
    result.textContent = "Tie!";
    choice("rock", computer);
  } else {
    result.textContent = "You lose!";
    choice("rock", computer);
  }
}

// Activates when the user clicks scissors

function userScissors() {
  const computer = computerChoice();
  if (computer === "paper") {
    result.textContent = "You win!";
    increaseWins(1);
    choice("scissors", computer);
  } else if (computer === "scissors") {
    result.textContent = "Tie!";
    choice("scissors", computer);
  } else {
    result.textContent = "You lose!";
    choice("scissors", computer);
  }
}

// Increases the total wins

function increaseWins(amount) {
  totalWins += amount;
  totalWinsElement.textContent = `Total Wins: ${totalWins}`;
  localStorage.setItem("totalWins", totalWins);
}

// Displays the choices

function choice(userChoices, computerChoices) {
  userChoiceElement.textContent = `You: ${userChoices}`;
  computerChoiceElement.textContent = `Computer: ${computerChoices}`;
}
