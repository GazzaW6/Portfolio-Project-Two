let computerChoiceDisplay= document.getElementById("computer-choice");
let userChoiceDisplay= document.getElementById("user-choice");
let resultDisplay= document.getElementById("result");
let possibleChoices= document.querySelectorAll("button");
let userChoice

//generate user choice for game //
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
}));

//generate a random computer choice //

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }
  