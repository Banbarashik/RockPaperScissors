function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

// initializing one round of a game
function playRound(playerSelection, computerSelection) {
  console.log(computerSelection); // testing computer's input
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You won! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You won! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You won! Scissors beat Paper";
  } else {
    return "You made a mistake";
  }
}

// 5 rounds of a game
function game(numOfRounds) {
  for (i = 0; i < numOfRounds; i++) {
    const playerInput = prompt("Player's selection");
    console.log(playRound(playerInput, computerPlay()));
  }
  return "The game is over";
}

console.log(game(3));
