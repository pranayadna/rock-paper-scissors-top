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

    console.log(player);
    console.log(cpu);

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
    let playerScore = 0, cpuScore = 0, roundCount = 0;

    for (let i = 0; i < 5; i++) {
        let round = playRound(prompt('Insert selection: '), getComputerChoice())
        
        if (round === "Player") {
            playerScore++
            roundCount++
        } else if (round === "CPU") {
            cpuScore++
            roundCount++
        } else {
            roundCount++
        } 
    }

    if (roundCount === 5) {
        
        if(playerScore > cpuScore){
            return `Player Wins: ${playerScore}`
        } else if (playerScore < cpuScore){
            return `CPU Wins: ${cpuScore}`
        } else if(playerScore === cpuScore){
            return `TIE: ${playerScore}, ${cpuScore}`
        }
    } else {
        return 'not 5 rounds'
    }
}

console.log((playGame()));
