let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection); // testing computer's input
  let result = document.querySelector("#result");
  let score = document.querySelector("#score");
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    result.textContent = "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    result.textContent = "You won! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    result.textContent = "You won! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    result.textContent = "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    result.textContent = "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    result.textContent = "You won! Scissors beat Paper";
  }
  score.textContent = `${playerScore} : ${computerScore}`;

  if (playerScore >= 5) {
    result.textContent = "You won!";
    document
      .querySelectorAll("button")
      .forEach((button) => (button.disabled = true));
    startAgain();
  } else if (computerScore >= 5) {
    result.textContent = "You lose!";
    document
      .querySelectorAll("button")
      .forEach((button) => (button.disabled = true));
    startAgain();
  }
}

function startAgain() {
  let btnStartAgain = document.createElement("button");
  btnStartAgain.textContent = "Start again";
  document.querySelector(".game-area").appendChild(btnStartAgain);
  btnStartAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    score.textContent = `${playerScore} : ${computerScore}`;
    document
      .querySelectorAll("button")
      .forEach((button) => (button.disabled = false));
    btnStartAgain.style.display = "none";
  });
}

const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value, computerPlay());
  });
});
