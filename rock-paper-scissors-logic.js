document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const resultDiv = document.getElementById('result');
    const scoreToWin = 5;
    const choices = ['rock', 'paper', 'scissors'];

    let userScore = 0;
    let computerScore = 0;

    function displayResult(userChoice, computerChoice, result) {
        if (userScore === scoreToWin) {
            userScore = 0;
            computerScore = 0;
            resultDiv.innerHTML = `
                <p>Congratulations! You won the game!</p>
                <p>Click a button to play again!</p>
            `;

        }
        else if (computerScore === scoreToWin) {
            userScore = 0;
            computerScore = 0;
            resultDiv.innerHTML = `
                <p>Sorry! You lost the game!</p>
                <p>Click a button to play again!</p>
            `;
        }
        else{
            resultDiv.innerHTML = `
                <p>You chose: ${userChoice}</p>
                <p>Computer chose: ${computerChoice}</p>
                <p>${result}</p>
                <p>User score: ${userScore}</p>
                <p>Computer score: ${computerScore}</p>
            `;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);
            displayResult(userChoice, computerChoice, result);
        });
    });

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (userChoice === choices[0] && computerChoice === choices[2]) ||
            (userChoice === choices[1] && computerChoice === choices[0]) ||
            (userChoice === choices[2] && computerChoice === choices[1])
        ) {
            userScore++;
            return 'You win!';
        } else {
            computerScore++;
            return 'You lose!';
        }
    }

});