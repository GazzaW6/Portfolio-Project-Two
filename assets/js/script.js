let computerChoiceDisplay= document.getElementById("computer-choice");
let userChoiceDisplay= document.getElementById("user-choice");
let resultDisplay= document.getElementById("result");
let possibleChoices= document.querySelectorAll("button");
let userChoice
//generate user choice for game //
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
}))