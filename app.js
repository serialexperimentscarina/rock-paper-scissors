// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}
