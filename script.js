


function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const min = 0
    const max = 3
    return options[Math.floor((Math.random(options) * (max - min) + min))];
    // return options[Math.floor(Math.random(options))];
};

console.log(getRandomComputerResult());