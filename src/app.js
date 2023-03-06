'use strict';

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
