function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const min = 0
    const max = 3
    return options[Math.floor((Math.random(options) * (max - min) + min))];
    // return options[Math.floor(Math.random(options))];
};

console.log(getRandomComputerResult());

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