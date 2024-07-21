// JavaScript code for the Rock-Paper-Scissors game

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to play the game
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    const gameMessage = document.getElementById('gameMessage');
    const playerScoreValue = document.getElementById('yourScoreValue');
    const computerScoreValue = document.getElementById('computerScoreValue');
    let playerScore = parseInt(playerScoreValue.textContent);
    let computerScore = parseInt(computerScoreValue.textContent);

    if (winner === 'player') {
        gameMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    } else if (winner === 'computer') {
        gameMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    } else {
        gameMessage.textContent = `It's a draw! You both chose ${playerChoice}`;
    }

    playerScoreValue.textContent = playerScore;
    computerScoreValue.textContent = computerScore;
}

// Function to show the rules modal
function showRules() {
    var modal = document.getElementById("rulesModal");
    modal.style.display = "block";
}

// Function to close the rules modal
function closeRules() {
    var modal = document.getElementById("rulesModal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("rulesModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
