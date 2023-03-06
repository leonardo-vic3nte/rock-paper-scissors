const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

function getComputerChoice() {
  const validOutputs = [rock, paper, scissors];
  const randomIndex = Math.floor(Math.random() * validOutputs.length);
  return validOutputs[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const validChoices = [rock, paper, scissors];
  if (!validChoices.includes(playerChoice)) {
    return 'invalid';
  }
  if (playerChoice === computerSelection) {
    return 'This round is a tie!';
  }
  if (playerSelection === rock) {
    if (computerSelection === scissors) {
      return 'You won! Rock beat scissors';
    }
    return 'You lost! Rock loses to paper';
  }
  if (playerSelection === paper) {
    if (computerSelection === rock) {
      return 'You won! Paper beat Rock';
    }
    return 'You lost! Paper loses to scissors';
  }
  if (playerSelection === scissors) {
    if (computerSelection === paper) {
      return 'You win! Scissors beats paper';
    }
    return 'You lost! Scissors loses to paper';
  }
  return 'Something went wrong...';
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const playerChoice = prompt('Choose rock, paper or scissors'); // PlayRound() already handles input validation
    if (playerChoice === null) {
      throw new Error('Game cancelled');
    }
    console.log(`${i}º round`);
    const roundResult = playRound(playerChoice, getComputerChoice());
    if (roundResult === 'invalid') {
      console.log('Invalid input, skipping this round');
      continue;
    }
    if (roundResult === 'This round is a tie!') {
      console.log(roundResult);
    } else if (roundResult.startsWith('You won')) {
      playerScore++;
      console.log(roundResult);
    } else {
      computerScore++;
    }
    console.log(
      `Current score is: Player ${playerScore} Computer ${computerScore}`
    );
  }
  console.log('------------------------------------');
  console.log('Game ended!');
  console.log(
    `You scored ${playerScore} points and the computer scored ${computerScore} points`
  );
  if (playerScore === computerScore) {
    console.log('It is a tie');
  } else if (playerScore > computerScore) {
    console.log('You won! Congratulations!');
  } else {
    console.log('You lost...Feel free to try again though!');
  }
}
