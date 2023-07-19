function getComputerChoice() {
    let possibilities = ["rock", "paper", "scissors"];

    return possibilities[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw.";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "stone" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return "Player won.";
    } else {
        return "Computer won.";
    } 
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    console.log("Game begins");
    while (playerPoints < 5 && computerPoints < 5) {
        let playerTool = prompt("Select tool:").toLowerCase();
        let computerTool = getComputerChoice();

        let roundResult = playRound(playerTool, computerTool);
        if (roundResult.includes("Player")) {
            playerPoints++;
        } else if (roundResult.includes("Computer")) {
            computerPoints++;
        }
    }

    let winner = playerPoints === 5 ? "Player" : "Computer";

    console.log(`Game over. ${winner} has won! The final score was ${playerPoints}:${computerPoints}`)
}