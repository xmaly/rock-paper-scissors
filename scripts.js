function getComputerChoice() {
    let possibilities = ["rock", "paper", "scissors"];

    return possibilities[Math.floor(Math.random() * 3)];
}

const playerPoints = document.getElementById("player-points");
const computerPoints = document.getElementById("computer-points");
const message = document.getElementById("message");

function checkWin() {
    return playerPoints.textContent >= 5 || computerPoints.textContent >= 5;
};

const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach(button => {
    button.addEventListener('click', () => playRound(button.textContent.toLowerCase(), getComputerChoice()));
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        message.textContent = "Round was a draw.";
        return "Draw.";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            message.textContent = "Player won.";
            playerPoints.textContent = parseInt(playerPoints.textContent) + 1;
            if (checkWin()) {
                choiceButtons.forEach(button => {
                    button.disabled = true;
                });
            }
            return "Player won.";
    } else {
        message.textContent = "Computer won.";
        computerPoints.textContent = parseInt(computerPoints.textContent) + 1;
        if (checkWin()) {
            choiceButtons.forEach(button => button.disabled = true);
        }
        return "Computer won.";
    } 
}

const startButton = document.querySelector('.start');
startButton.addEventListener('click', () => {
    playerPoints.textContent = 0;
    computerPoints.textContent = 0;  
    choiceButtons.forEach(button => {
        button.disabled = false;
    });  
});