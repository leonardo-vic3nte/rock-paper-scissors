'use strict';

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

function getComputerChoice() {
	const validOutputs = [rock, paper, scissors];
	const randomIndex = Math.floor(Math.random() * validOutputs.length);
	return validOutputs[randomIndex];
}
