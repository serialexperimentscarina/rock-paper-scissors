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
      alert("Invalid Input");
  }
}

// Win round
function win(playerSelection, computerSelection) {
  alert(`You Win! ${playerSelection} beats ${computerSelection}`);
  return "win";
}

// Lose round
function loss(playerSelection, computerSelection) {
  alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return "loss";
}

// Tie round
function tie() {
  alert("It's a tie!");
  return "tie";
}

// Plays a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection, computerSelection, roundResult;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      `Round ${i + 1} out of 5. Rock, paper or scissors?`,
      "Rock"
    );
    computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);

    if (roundResult == "win") {
      playerScore += 1;
    } else if (roundResult == "loss") {
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    alert("End of game, player wins!");
  } else if (computerScore > playerScore) {
    alert("End of game, computer wins!");
  } else {
    alert("End of game, it's a tie!");
  }
}

game();
