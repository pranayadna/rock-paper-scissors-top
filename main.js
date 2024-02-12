let playerScore = 0; 
let cpuScore = 0; 
let clickCount = 0;

// UI
const divContainer = document.createElement('div');
divContainer.setAttribute('id', 'container');
document.body.appendChild(divContainer);
const container = document.querySelector('#container');

const rockBtn = document.createElement('button');
rockBtn.value = 'Rock';
rockBtn.textContent = 'Rock';
rockBtn.style.margin = '10px';

const paperBtn = document.createElement('button');
paperBtn.value = 'Paper';
paperBtn.textContent = 'Paper';
paperBtn.style.margin = '10px';

const scissorsBtn = document.createElement('button');
scissorsBtn.value = 'Scissors';
scissorsBtn.textContent = 'Scissors';
scissorsBtn.style.margin = '10px';

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result');
container.appendChild(resultDiv);
const resultScore = document.querySelector('#result');

const spanPlayerScore = document.createElement('span');
spanPlayerScore.setAttribute('class', 'player-score');

const spanCpuScore = document.createElement('span');
spanCpuScore.setAttribute('class', 'cpu-score');

const displayScore = document.createElement('div')

displayScore.appendChild(spanPlayerScore);
displayScore.appendChild(document.createTextNode(' '));
displayScore.appendChild(spanCpuScore);

resultScore.appendChild(displayScore);

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1

    switch (random) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const cpu = computerSelection.toLowerCase();
    let result = '';

    if (player === cpu) {
        return "TIE"
    }

    if (player === "rock" && cpu === "scissors") {
        result = "Player"
    } else if (player === "paper" && cpu === "scissors") {
        result = "CPU"
    } else if (cpu === "rock" && player === "scissors") {
        result = "CPU"
    } else if (cpu === "paper" && player === "scissors") {
        result = "Player"
    } else if (player === "paper" && cpu === "rock") {
        result = "Player"
    } else if (player === "rock" && cpu === "paper") {
        result = "CPU"
    }

    if (result === "Player") {
        playerScore++;
        return result;
    } else if (result === "CPU") {
        cpuScore++;
        return result;
    }

}

function updateScore() {
    spanPlayerScore.textContent = 'Player Score: ' + playerScore;
    spanCpuScore.textContent = 'CPU Score: ' + cpuScore;
}
    
function handleClick(buttonValue) {
    let player = buttonValue;
    let cpu = getComputerChoice();
    let round = playRound(player, cpu);
    
    const spanPlayer = document.createElement('span');
    spanPlayer.setAttribute('class', 'player');
    spanPlayer.textContent = player;

    const spanCPU = document.createElement('span');
    spanCPU.setAttribute('class', 'cpu');
    spanCPU.textContent = cpu;
    
    const spanRound = document.createElement('span');
    spanRound.setAttribute('class', 'round');
    spanRound.textContent = round;
    
    const spanResult = document.createElement('span');
    spanResult.setAttribute('class', 'round');

    const displayResult = document.createElement('div')
    const lineBreak1 = document.createElement('br');
    const lineBreak2 = document.createElement('br');
    
    displayResult.appendChild(spanResult);

    resultScore.appendChild(spanPlayer);
    resultScore.appendChild(document.createTextNode(' VS '));
    resultScore.appendChild(spanCPU);
    resultScore.appendChild(document.createTextNode(' = '));
    resultScore.appendChild(spanRound);
    resultScore.appendChild(lineBreak2);

    if (playerScore === 5 || cpuScore === 5) {
        
        resultScore.appendChild(displayResult);
        resultScore.appendChild(lineBreak1);
        
        if(playerScore > cpuScore){
            spanResult.textContent = `Player Wins: ${playerScore}`;
            playerScore = 0;
            cpuScore = 0;
        } else if (playerScore < cpuScore){
            spanResult.textContent = `CPU Wins: ${cpuScore}`;
            playerScore = 0;
            cpuScore = 0;
        }
    }
}

function playGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let buttonValue = button.value;
           
            handleClick(buttonValue);
            updateScore();
        })
    }) 
}

playGame();