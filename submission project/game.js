// link to the submission game - https://www.freecodecamp.org/learn/the-odin-project/top-build-a-rock-paper-scissors-game/top-build-a-rock-paper-scissors-game

const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // const hand = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3); // Random index between 0 and 2
  return hand[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(humanChoice)) {
    humanChoice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }
    
  if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++; // Player wins
      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++; // Computer wins
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
  // Reset scores each time the game starts
  humanScore = 0;
  computerScore = 0;

  // Play 3 rounds
  for (let i = 0; i < 3; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  // returns the winner of the game based on who won the most rounds.
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie game!");
    
  }
}

