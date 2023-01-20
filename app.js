// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

// Plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
  switch (playerSelection) {
    case "Rock":
      switch (computerSelection) {
        case "Rock":
          return tie();
        case "Paper":
          return loss(playerSelection, computerSelection);
        case "Scissors":
          return win(playerSelection, computerSelection);
      }
    case "Paper":
      switch (computerSelection) {
        case "Rock":
          return win(playerSelection, computerSelection);
        case "Paper":
          return tie();
        case "Scissors":
          return loss(playerSelection, computerSelection);
      }
    case "Scissors":
      switch (computerSelection) {
        case "Rock":
          return loss(playerSelection, computerSelection);
        case "Paper":
          return win(playerSelection, computerSelection);
        case "Scissors":
          return tie();
      }
    default:
      return "Something went wrong";
  }
}

// Win message
function win(playerSelection, computerSelection) {
  return `You Win! ${playerSelection} beats ${computerSelection}`;
}

// Loss message
function loss(playerSelection, computerSelection) {
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

// Tie message
function tie() {
  return "It's a tie!";
}
