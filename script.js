const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let results = document.getElementById("results")

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

let playRound = (e) => {

    results.innerHTML = ""
    let humanChoice = e
    let computerChoice = getComputerChoice()
    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        results.innerHTML += `<p>You win! ${humanChoice} beats ${computerChoice}.</p>`
        humanScore++
    } else {
        results.innerHTML += `<p>You Lose! ${computerChoice} beats ${humanChoice}.</p>`
        computerScore++
    }

    results.innerHTML += `<p>Player score: ${humanScore}. Computer score: ${computerScore}</p>`
    if (humanScore == 5) {
        humanScore = 0
        computerScore = 0
        results.innerHTML = "<p>You win uwu</p>"
        
    } else if (computerScore == 5) {
        humanScore = 0
        computerScore = 0
        results.innerHTML = "<p>You lose :((</p>"
        
    }
}



rock.addEventListener("click", e => {
    playRound("rock")
})

paper.addEventListener("click", e => {
    playRound("paper")
})

scissors.addEventListener("click", e => {
    playRound("scissors")
})

