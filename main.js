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

function playGame(playerSelection) {
    let playerScore = 0, cpuScore = 0

    let round_1 = playRound(playerSelection, getComputerChoice())
    console.log(round_1);

    let round_2 = playRound(playerSelection, getComputerChoice())
    console.log(round_2);

    let round_3 = playRound(playerSelection, getComputerChoice())
    console.log(round_3);

    let round_4 = playRound(playerSelection, getComputerChoice())
    console.log(round_4);

    let round_5 = playRound(playerSelection, getComputerChoice())
    console.log(round_5);

    if (round_1 === "Player") {
        playerScore++
    } else if (round_1 === "CPU") {
        cpuScore++
    } 

    if (round_2 === "Player") {
        playerScore++
    } else if (round_2 === "CPU") {
        cpuScore++
    }
    
    if (round_3 === "Player") {
        playerScore++
    } else if (round_3 === "CPU") {
        cpuScore++
    }

    if (round_4 === "Player") {
        playerScore++
    } else if (round_4 === "CPU") {
        cpuScore++
    }

    if (round_5 === "Player") {
        playerScore++
    } else if (round_5 === "CPU") {
        cpuScore++
    }

    if(playerScore > cpuScore){
        return `Player Wins: ${playerScore}`
    } else if (playerScore < cpuScore){
        return `CPU Wins: ${cpuScore}`
    } else if(playerScore === cpuScore){
        return `TIE: ${playerScore}, ${cpuScore}`
    }
}

console.log(playGame(prompt("Insert Selection: ")));