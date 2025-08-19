var ROCK = 1;
var PAPER = 2;
var SCISSORS = 3;
//Step one: Take input from player
var getHumanChoice = function () {
    var _a;
    var playerChoice = window.prompt("Make your move! Pick:\n1) Rock\n2) Paper\n3)Scissors");
    return (_a = parseInt(playerChoice)) !== null && _a !== void 0 ? _a : 1;
};
//Step two: Get computer choice
var getComputerChoice = function () {
    var computerChoice = Math.round(Math.random() * 3) + 1;
    return computerChoice;
};
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice == ROCK) {
        if (computerChoice == SCISSORS) {
            playerScore++;
            return "You Win! Rocks smashes Scissors!";
        }
        else if (computerChoice == PAPER) {
            computerScore++;
            return "You Lose! Rock gets smothered by Paper!";
        }
    }
    else if (humanChoice == PAPER) {
        if (computerChoice == ROCK) {
            playerScore++;
            return "You Win! Paper smothers Rock!";
        }
        else if (computerChoice == SCISSORS) {
            computerScore++;
            return "You Lose! Paper gets cut by Scissors!";
        }
    }
    else if (humanChoice == SCISSORS) {
        if (computerChoice == PAPER) {
            playerScore++;
            return "You Win! Scissors cut Paper!";
        }
        else if (computerChoice == ROCK) {
            computerScore++;
            return "You Lose! Scissors gets smashed by Rock!";
        }
    }
    return "Tie! You both picked the same thing!";
}
//Step four: Repeat previous steps for a total of N rounds
var playerScore = 0;
var computerScore = 0;
for (var i = 0; i < 5; i++) {
    var humanChoice = getHumanChoice();
    var computerChoice = getComputerChoice();
    console.log(determineWinner(humanChoice, computerChoice));
}
if (playerScore > computerScore) {
    console.log("You Win the Game!");
}
else if (playerScore < computerScore) {
    console.log("COM Wins the game!");
}
else {
    console.log("Tie Game!");
}
