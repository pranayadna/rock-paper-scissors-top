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
    if (typeof playerSelection !== "string") {
        return "input not string"
    }

    const player = playerSelection.toLowerCase()
    const cpu = computerSelection.toLowerCase()

    // console.log(player);
    // console.log(cpu);

    if (player === cpu) {
        return "TIE"
    }

    if (player === "rock" && cpu === "scissors") {
        return "Player"
    } else if (player === "paper" && cpu === "scissors") {
        return "CPU"
    } else if (cpu === "rock" && player === "scissors") {
        return "CPU"
    } else if (cpu === "paper" && player === "scissors") {
        return "Player"
    } else if (player === "paper" && cpu === "rock") {
        return "Player"
    } else if (player === "rock" && cpu === "paper") {
        return "CPU"
    } else {
        return "wrong input"
    } 
}

function playGame() {
    let playerScore = 0, cpuScore = 0, clickCount = 0;

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
    const result = document.querySelector('#result');
    
    

    // container.appendChild(displayResult);

    // const ul = document.createElement('ul');
    // result.appendChild(ul);
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            
            
            let player = button.value;
            let cpu = getComputerChoice();
            let round = playRound(player, cpu);
            // console.log(round);

            // const li = document.createElement('li');

            
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

            
            if (round === "Player") {
                playerScore++
                // roundCount++
            } else if (round === "CPU") {
                cpuScore++
                // roundCount++
            } else {
                // roundCount++
            } 

            const displayResult = document.createElement('div')
            const lineBreak1 = document.createElement('br');
            const lineBreak2 = document.createElement('br');
            
            displayResult.appendChild(spanResult);

            result.appendChild(spanPlayer);
            result.appendChild(document.createTextNode(' VS '));
            result.appendChild(spanCPU);
            result.appendChild(document.createTextNode(' = '));
            result.appendChild(spanRound);
            result.appendChild(lineBreak2);

            if (playerScore === 5 || cpuScore === 5) {
                
                result.appendChild(displayResult);
                result.appendChild(lineBreak1);
                
                if(playerScore > cpuScore){
                    spanResult.textContent = `Player Wins: ${playerScore}`;
                    clickCount = 0;
                    playerScore = 0;
                    cpuScore = 0;
                } else if (playerScore < cpuScore){
                    spanResult.textContent = `CPU Wins: ${cpuScore}`;
                    clickCount = 0;
                    playerScore = 0;
                    cpuScore = 0;
                } 
                // else if(playerScore === cpuScore){
                //     spanResult.textContent = `TIE: ${playerScore}, ${cpuScore}`;
                //     clickCount = 0;
                //     playerScore = 0;
                //     cpuScore = 0;
                // }
            } 
            
            // else {
            //     result.appendChild(displayScore);
            // }
            clickCount++;
            console.log(clickCount);
            

            // result.appendChild(lineBreak);

            // result.appendChild(displayResult);

            // result.appendChild(document.createElement('br'));
            // li.appendChild(spanPlayer);
            // li.appendChild(spanCPU);

            // ul.appendChild(li);

            // else {
            //     return 'not 5 rounds'
            // }
        })
    }) 

    console.log(playerScore);
    console.log(cpuScore);

    const spanPlayerScore = document.createElement('span');
    spanPlayerScore.setAttribute('class', 'player-score');
    spanPlayerScore.textContent = 'Player Score: ' + playerScore;

    const spanCpuScore = document.createElement('span');
    spanCpuScore.setAttribute('class', 'cpu-score');
    spanCpuScore.textContent = 'CPU Score: ' + cpuScore;
    
    const displayScore = document.createElement('div')

    displayScore.appendChild(spanPlayerScore);
    displayScore.appendChild(document.createTextNode(' '));
    displayScore.appendChild(spanCpuScore);

    result.appendChild(displayScore);

    // for (let i = 0; i < 5; i++) {
    //     let round = playRound('rock', getComputerChoice())
        
    // }

    // console.log(clickCount);

}

// console.log(playGame());
playGame();
