var ROCK = 1;
var PAPER = 2;
var SCISSORS = 3;
var NONE = 0;
//Step one: Take input from player
function getHumanChoice(e) {
    console.log(e.target.textContent);
    if (e.target.textContent == "Rock") {
        playerChoice = ROCK;
    }
    else if (e.target.textContent == "Paper") {
        playerChoice = PAPER;
    }
    else if (e.target.textContent == "Scissors") {
        playerChoice = SCISSORS;
    }
    console.log(determineWinner(playerChoice, getComputerChoice()));
}
//Step two: Get computer choice
function getComputerChoice() {
    var computerChoice = Math.round(Math.random() * 3) + 1;
    return computerChoice;
}
//Step three: Calculate results
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
var playerChoice = NONE;
var buttons = document.querySelectorAll(".option");
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        var element = e.target;
    });
    button.addEventListener("click", getHumanChoice);
});
