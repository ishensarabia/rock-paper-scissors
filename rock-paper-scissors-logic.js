
var choices = {
    1 : "rock",
    2 : "paper",
    3 : "scissors"

}

const numberOfRounds = 5

var humanScore = 0
var computerScore = 0

function getHumanChoice() {
	var humanChoice = prompt("Enter your choice")
    humanChoice = humanChoice.toLowerCase()
	console.log(humanChoice)
    return humanChoice
}

function playGame() {
    for (let index = 0; index < numberOfRounds; index++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        
    }
}

function getComputerChoice() {
    var computerChoice = "";
    var randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        computerChoice = choices[1];
    }
    else if (randomChoice >= 0.66){
        computerChoice = choices[2];
    }
    else {
        computerChoice = choices[3];
    }

    console.log(computerChoice);
	return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
	if (humanChoice == choices[1] & computerChoice == choices[3] | 
        humanChoice == choices[2] & computerChoice == choices[1] | 
        humanChoice == choices[3] & computerChoice == choices[2]) {
        console.log("You win");
    }
    else if (humanChoice == computerChoice) {
        console.log("Draw!");
    }
    else {
        console.log("You lose");
    }
}

playGame();

