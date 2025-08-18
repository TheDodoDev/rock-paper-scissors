const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
//Step one: Take input from player
let getHumanChoice = () => {
    let playerChoice = window.prompt("Make your move! Pick:\n1) Rock\n2) Paper\n3)Scissors");
    return parseInt(playerChoice) ?? 1;
}
//Step two: Get computer choice
let getComputerChoice = () => {
    let computerChoice = Math.round(Math.random() * 3) + 1;
    return computerChoice;
}
//Step three: Calculate results
let determineWinner = (humanChoice, computerChoice) => {
    if (humanChoice == ROCK) {
        if (computerChoice == SCISSORS) {
            return "You Win! Rocks smashes Scissors!";
        }
        else if (computerChoice == PAPER) {
            return "You Lose! Rock gets smothered by Paper!";
        }
    }
    else if (humanChoice == PAPER) {
        if (computerChoice == ROCK) {
            return "You Win! Paper smothers Rock!";
        }
        else if (computerChoice == SCISSORS) {
            return "You Lose! Paper gets cut by Scissors!";
        }
    }
    else if (humanChoice == SCISSORS) {
        if (computerChoice == PAPER) {
            return "You Win! Scissors cut Paper!";
        }
        else if (computerChoice == ROCK) {
            return "You Lose! Scissors gets smashed by Rock!";
        }
    }
    return "Tie! You both picked the same thing!";
}
//Step four: Repeat previous steps for a total of N rounds
