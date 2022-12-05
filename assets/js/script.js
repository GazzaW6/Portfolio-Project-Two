// 

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
      computerChoice = 'rock'
    }
    if (randomNumber === 1) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
      computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'spock'
      }
      if (randomNumber === 4) {
        computerChoice = 'lizard'
      }  
    computerChoiceDisplay.innerHTML = computerChoice
  }
  
  //get result of game //

function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
    }

    if (computerChoice === "rock" && userChoice === "paper") {
      result = "you win!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
      result = 'you lost!'
    }
    if (computerChoice === "rock" && userChoice === "lizard") {
        result = 'you lost!'
      }
      if (computerChoice === "rock" && userChoice === "spock") {
        result = 'you win!'
      }
    if (computerChoice === "paper" && userChoice === "scissors") {
      result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice === "lizard") {
        result = 'you win!'
      }
      if (computerChoice === 'paper' && userChoice === "spock") {
        result = 'you lose!'
      }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "lizard") {
        result = 'you lose!'
      }
      if (computerChoice === 'scissors' && userChoice === "spock") {
        result = 'you win!'
      }
    resultDisplay.innerHTML = result
  }