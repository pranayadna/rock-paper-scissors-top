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

    if (player === cpu) {
        return "Same selection. The result is Tie!"
    }

    if (player === "rock" && cpu === "scissors") {
        return "rock wins"
    } else if (player === "paper" && cpu === "scissors") {
        return "scissor wins"
    } else if (cpu === "rock" && player === "scissors") {
        return "rock wins"
    } else if (cpu === "paper" && player === "scissors") {
        return "scissor wins"
    } else if (player === "paper" && cpu === "rock") {
        return "paper wins"
    } else if (player === "rock" && cpu === "paper") {
        return "paper wins"
    } else {
        return "wrong input"
    } 
    
}

const playerSelection = "scissors"
const computerSelection = getComputerChoice()

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));