let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.querySelector(".result-text");
const roundDisplay = document.querySelector(".round-count");
const scoreDisplay = document.querySelector(".score-count");

// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

// Plays a single round of Rock Paper Scissors
function playRound(e) {
  let playerSelection = e.target.id[0].toUpperCase() + e.target.id.slice(1);
  let computerSelection = getComputerChoice();
  roundCount++;

  switch (playerSelection) {
    case "Rock":
      switch (computerSelection) {
        case "Rock":
          tie();
          break;
        case "Paper":
          loss(playerSelection, computerSelection);
          break;
        case "Scissors":
          win(playerSelection, computerSelection);
          break;
      }
      break;
    case "Paper":
      switch (computerSelection) {
        case "Rock":
          win(playerSelection, computerSelection);
          break;
        case "Paper":
          tie();
          break;
        case "Scissors":
          loss(playerSelection, computerSelection);
          break;
      }
      break;
    case "Scissors":
      switch (computerSelection) {
        case "Rock":
          loss(playerSelection, computerSelection);
          break;
        case "Paper":
          win(playerSelection, computerSelection);
          break;
        case "Scissors":
          tie();
          break;
      }
      break;
  }

  if (roundCount == 5) endGame();
}

// Win round
function win(playerSelection, computerSelection) {
  playerScore++;
  showResults(`You Win! ${playerSelection} beats ${computerSelection}!`);
}

// Lose round
function loss(playerSelection, computerSelection) {
  computerScore++;
  showResults(`You Lose! ${computerSelection} beats ${playerSelection}!`);
}

// Tie round
function tie() {
  showResults("It's a tie!");
}

function showResults(result) {
  resultDisplay.textContent = result;
  roundDisplay.textContent = `Round ${roundCount + 1}`;
  scoreDisplay.textContent = `Player score: ${playerScore} - Computer score: ${computerScore}`;
}

function endGame() {
  if (playerScore > computerScore) {
    alert(
      `Congratulations! You won the game! Player score: ${playerScore} - Computer score: ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    alert(
      `I'm sorry, you lost! Player score: ${playerScore} - Computer score: ${computerScore}`
    );
  } else {
    alert(
      `Wow! It's a tie! Player score: ${playerScore} - Computer score: ${computerScore}`
    );
  }
  resetGame();
}

function resetGame() {
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
  showResults("");
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", playRound));
