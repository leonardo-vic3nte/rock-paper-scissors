const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const gamePrompt = document.getElementById('game-prompt');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const validOutputs = [rock, paper, scissors];
  const randomIndex = Math.floor(Math.random() * validOutputs.length);
  return validOutputs[randomIndex];
}

// Outputs 1 for win, 0 for tie, -1 for loss //
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  }
  if (playerSelection === rock) {
    if (computerSelection === scissors) {
      return 1;
    }
    return -1;
  }
  if (playerSelection === paper) {
    if (computerSelection === rock) {
      return 1;
    }
    return -1;
  }
  if (playerSelection === scissors) {
    if (computerSelection === paper) {
      return 1;
    }
    return -1;
  }

  return new Error('Something went wrong...');
}

function handleResult(result) {
  switch (result) {
    case 0:
      gamePrompt.innerText = 'This round was a tie...';
      break;

    case 1:
      playerScore += 1;
      playerScoreDisplay.innerText = playerScore;
      gamePrompt.innerText = 'You won this round!';
      break;

    case -1:
      computerScore += 1;
      computerScoreDisplay.innerText = computerScore;
      gamePrompt.innerText = 'You lost this round...';
      break;

    default:
      throw new Error('Something went wrong...');
  }
}

function isOver() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      gamePrompt.innerText = 'You won the game! Congratulations';
    } else {
      gamePrompt.innerText =
        'You lost the game... Feel free to try again though!';
    }

    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
  }
}

function main() {
  rockBtn.addEventListener('click', () => {
    const result = playRound('rock', getComputerChoice());
    handleResult(result);
    isOver();
  });

  paperBtn.addEventListener('click', () => {
    const result = playRound('paper', getComputerChoice());
    handleResult(result);
    isOver();
  });

  scissorsBtn.addEventListener('click', () => {
    const result = playRound('scissors', getComputerChoice());
    handleResult(result);
    isOver();
  });
}

main();
