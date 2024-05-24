function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const min = 0
    const max = 3
    return options[Math.floor((Math.random(options) * (max - min) + min))];
    // return options[Math.floor(Math.random(options))];
};

console.log(getRandomComputerResult());

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound (player, computer) {
    if (player == "Rock" && computer == "Scissors") {
        return true;
    }
    if (player == "Scissors" && computer == "Paper") {
        return true;
    }
    if (player == "Paper" && computer == "Rock") {
        return true;
    }
    else {
        return false;
    }
};


console.log(hasPlayerWonTheRound("Rock", "Paper"));


function getRoundResults(userOption) {
    const computerResult = "Scissors";
    const playerWins = hasPlayerWonTheRound(userOption, computerResult);
    if (playerWins) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`
    }
    if (userOption == computerResult) {
        return `It's a tie! Both chose ${userOption}"`;
    }
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score ", computerScore);

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = getRoundResults(userOption);
    if (playerScore === 3) {
        winnerMsgElement.innerText = "Player has won the game!";
        resetGameBtn.style.display = "show";
        optionsContainer.style.display = "none";
    }
    else if (computerScore === 3) {
        winnerMsgElement.innerText = "Computer has won the game!";
        resetGameBtn.style.display = "show";
        optionsContainer.style.display = "none";
    }
};

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function() {
    showResults("Rock");
});

paperBtn.addEventListener("click", function() {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function() {
    showResults("Scissors");
});



console.log(showResults("Rock"));