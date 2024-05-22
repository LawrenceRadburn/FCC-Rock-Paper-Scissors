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

function showResults(userOption) {
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = getRoundResults("Rock");
};

console.log(showResults("Rock"));