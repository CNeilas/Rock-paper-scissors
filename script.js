let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice == 1) {
        return "rock"
    } else if (choice == 2) {
        return "paper"
    } else if (choice == 3) {
        return "scissors"
    }
}

const getHumanChoice = () => {
    let humanChoice = +prompt("1 = rock, 2 = paper, 3 = scissors")
    if (humanChoice == 1) {
        return "rock"
    } else if (humanChoice == 2) {
        return "paper"
    } else if (humanChoice == 3) {
        return "scissors"
    } else {
        alert("refresh and start again dumbass")
    }
}

let playRound = () => {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore++
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore++
    }

    console.log(`Player score: ${humanScore}. Computer score: ${computerScore}`)
}

playRound()
playRound()
playRound()
playRound()
playRound()


