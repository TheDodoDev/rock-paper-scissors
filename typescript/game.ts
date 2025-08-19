const ROCK: number = 1;
const PAPER: number = 2;
const SCISSORS: number = 3;

//Step one: Take input from player

function getHumanChoice(): number {
    let playerChoice: any = window.prompt("Make your move! Pick:\n1) Rock\n2) Paper\n3)Scissors");
    return parseInt(playerChoice) ?? 1;
}

//Step two: Get computer choice

function getComputerChoice(): number {
    let computerChoice: number = Math.round(Math.random() * 3) + 1;
    return computerChoice;
}

//Step three: Calculate results

function determineWinner(humanChoice: number, computerChoice: number): string {
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
let playerScore: number = 0;
let computerScore: number = 0;