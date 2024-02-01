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

console.log(getComputerChoice());