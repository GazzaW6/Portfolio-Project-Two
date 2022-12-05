
let computerChoiceDisplay= document.getElementById("computer-choice");
let userChoiceDisplay= document.getElementById("user-choice");
let resultDisplay= document.getElementById("result");
let possibleChoices= document.querySelectorAll("button");

let userChoice
let computerChoice
let result


//generate user choice for game //
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}));

//generate a random computer choice //

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    if (randomNumber === 0) {
      computerChoice = "Rock"
    }
    if (randomNumber === 1) {
      computerChoice = 'Scissors'
    }
    if (randomNumber === 2) {
      computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Spock'
    }
    if (randomNumber === 4) {
        computerChoice = 'Lizard'
    } 

    computerChoiceDisplay.innerHTML = computerChoice
  }
  
  //get result of game //

function getResult() {
    if (computerChoice === userChoice) {
      result = "It's a draw!"
    }

    if (computerChoice === "Rock" && userChoice === "Paper") {
      result = "You win!"
    }
    if (computerChoice === "Rock" && userChoice === "Scissors") {
      result = "You lost! Try again."
    }
    if (computerChoice === "Rock" && userChoice === "Lizard") {
        result = "You lost! Try again."
      }
      if (computerChoice === "Rock" && userChoice === "Spock") {
        result = "You win!"
      }
    if (computerChoice === "Paper" && userChoice === "Scissors") {
      result = "You win!"
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
      result = "You lost! Try again."
    }
    if (computerChoice === 'Paper' && userChoice === "Lizard") {
        result = "You win!"
      }
      if (computerChoice === 'Paper' && userChoice === "Spock") {
        result = "You lost! Try again."
      }
    if (computerChoice === 'Scissors' && userChoice === "Rock") {
      result = "You win!"
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper") {
      result = "You lost! Try again."
    }
    if (computerChoice === 'Scissors' && userChoice === "Lizard") {
        result = "You lost! Try again."
      }
    if (computerChoice === 'Lizard' && userChoice === "Spock") {
        result = "You lost! Try again."
    }
    if (computerChoice === 'Lizard' && userChoice === "Paper") {
        result = "You lost! Try again."
    }
    if (computerChoice === 'Lizard' && userChoice === "Rock") {
        result = "You win!"
    }
    if (computerChoice === 'Lizard' && userChoice === "Scissors") {
        result = "You win!"
    }
    if (computerChoice === 'Spock' && userChoice === "Lizard") {
        result = "You win! "
    }
    if (computerChoice === 'Spock' && userChoice === "Paper") {
        result = "You win! "
    }
    if (computerChoice === 'Spock' && userChoice === "Rock") {
        result = "You lost! Try again."
    }
    if (computerChoice === 'Spock' && userChoice === "Scissors") {
        result = "You lost! Try again."
    }

    resultDisplay.innerHTML = result
  }