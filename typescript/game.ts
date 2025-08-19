const ROCK: number = 1;
const PAPER: number = 2;
const SCISSORS: number = 3;
const NONE: number = 0;
//Step one: Take input from player

function getHumanChoice(e): void {
    if (playerScore == 5 || computerScore == 5) {
        return;
    }

    if (e.target.textContent == "Rock") {
        playerChoice = ROCK;
    } else if (e.target.textContent == "Paper") {
        playerChoice = PAPER;
    } else if (e.target.textContent == "Scissors") {
        playerChoice = SCISSORS;
    }

    resultText.textContent = determineWinner(playerChoice, getComputerChoice())
    playerScoreText.textContent = playerScore.toString();
    computerScoreText.textContent = computerScore.toString();

    if (playerScore == 5) {
        finalResultText.textContent = "YOU WIN!"
    } else if (computerScore == 5) {
        finalResultText.textContent = "COM WINS!";
    }
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

let playerChoice = NONE;

const playerScoreText: any = document.querySelector("#human");
const computerScoreText: any = document.querySelector("#computer");
const resultText: any = document.querySelector(".result");
const finalResultText: any = document.querySelector(".final");

let buttons: NodeList = document.querySelectorAll(".option");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const element = e.target as HTMLElement;
    });
    button.addEventListener("click", getHumanChoice);
});