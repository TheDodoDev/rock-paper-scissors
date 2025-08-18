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

//Step four: Repeat previous steps for a total of N rounds
