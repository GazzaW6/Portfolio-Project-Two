//based off lesson from "Code with Ania Kubów" - https://www.youtube.com/watch?v=RwFeg0cEZvQ//

let computerChoiceDisplay= document.getElementById("computer-choice");
let userChoiceDisplay= document.getElementById("user-choice");
let resultDisplay= document.getElementById("result");
let possibleChoices= document.querySelectorAll("button");

let userChoice
let computerChoice
let result


//generate user choice for game //
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

//generate a random computer choice //

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    if (randomNumber === 0) {
      computerChoice = 'Rock';
    }
    if (randomNumber === 1) {
      computerChoice = 'Scissors';
    }
    if (randomNumber === 2) {
      computerChoice = 'Paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'Spock';
    }
    if (randomNumber === 4) {
        computerChoice = 'Lizard';
    } 

    computerChoiceDisplay.innerHTML = computerChoice;
  }
  
  //get result of game and image sources//

  var image= document.getElementById("computer-image");
  var image=document.getElementById("user-image");

function getResult() {
    if (computerChoice === userChoice) {
      result = "It's a draw!";
      var image= document.getElementById("computer-image");
      image.src="assets/images/cover-image.png";
      var image=document.getElementById("user-image");
      image.src="assets/images/cover-image.png";
    }
    if (computerChoice === "Rock" && userChoice === "Paper") {
      result = "You win!";
      var image= document.getElementById("computer-image");
      image.src="assets/images/rock.png";
      var image=document.getElementById("user-image");
      image.src="assets/images/paper.png";
    }
    if (computerChoice === "Rock" && userChoice === "Scissors") {
      result = "You lost! Try again.";
      var image= document.getElementById("computer-image");
      image.src="assets/images/rock.png";
      var image=document.getElementById("user-image");
      image.src="assets/images/scissors.png";
    }
    if (computerChoice === "Rock" && userChoice === "Lizard") {
        result = "You lost! Try again.";
        var image= document.getElementById("computer-image");
        image.src="assets/images/rock.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/lizard.png";
      }
    if (computerChoice === "Rock" && userChoice === "Spock") {
        result = "You win!";
        var image= document.getElementById("computer-image");
        image.src="assets/images/rock.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/spock.png";
      }
    if (computerChoice === "Paper" && userChoice === "Scissors") {
      result = "You win!";
      var image= document.getElementById("computer-image");
      image.src="assets/images/paper.png";
      var image=document.getElementById("user-image");
      image.src="assets/images/scissors.png";
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
      result = "You lost! Try again.";
      var image= document.getElementById("computer-image");
      image.src="assets/images/paper.png";
      var image=document.getElementById("user-image");
      image.src="assets/images/rock.png";
    }
    if (computerChoice === 'Paper' && userChoice === "Lizard") {
        result = "You win!";
        var image= document.getElementById("computer-image");
        image.src="assets/images/paper.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/lizard.png";
      }
    if (computerChoice === 'Paper' && userChoice === "Spock") {
        result = "You lost! Try again.";
        var image= document.getElementById("computer-image");
        image.src="assets/images/paper.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/spock.png";
      }
    if (computerChoice === 'Scissors' && userChoice === "Rock") {
      result = "You win!";
      var image= document.getElementById("computer-image");
      image.src="assets/images/scissors.png";
      var image=document.getElementById("user-image");
      image.src="assets/images/rock.png";
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper") {
      result = "You lost! Try again.";
      var image= document.getElementById("computer-image");
      image.src="assets/images/scissors.png";
      var image=document.getElementById("user-image");
      image.src="assets/images/paper.png";
    }
    if (computerChoice === 'Scissors' && userChoice === "Lizard") {
        result = "You lost! Try again."
        var image= document.getElementById("computer-image");
        image.src="assets/images/scissors.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/lizard.png";
      }
    if (computerChoice === 'Scissors' && userChoice === "Spock") {
        result = "You lost! Try again.";
        var image= document.getElementById("computer-image");
        image.src="assets/images/scissors.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/spock.png";
      }
    if (computerChoice === 'Lizard' && userChoice === "Spock") {
        result = "You lost! Try again.";
        var image= document.getElementById("computer-image");
        image.src="assets/images/lizard.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/spock.png";
    }
    if (computerChoice === 'Lizard' && userChoice === "Paper") {
        result = "You lost! Try again.";
        var image= document.getElementById("computer-image");
        image.src="assets/images/lizard.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/paper.png";
    }
    if (computerChoice === 'Lizard' && userChoice === "Rock") {
        result = "You win!";
        var image= document.getElementById("computer-image");
        image.src="assets/images/lizard.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/rock.png";
    }
    if (computerChoice === 'Lizard' && userChoice === "Scissors") {
        result = "You win!";
        var image= document.getElementById("computer-image");
        image.src="assets/images/lizard.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/scissors.png";
    }
    if (computerChoice === 'Spock' && userChoice === "Lizard") {
        result = "You win!";
        var image= document.getElementById("computer-image");
        image.src="assets/images/spock.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/lizard.png";
    }
    if (computerChoice === 'Spock' && userChoice === "Paper") {
        result = "You win!";
        var image= document.getElementById("computer-image");
        image.src="assets/images/spock.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/paper.png";
    }
    if (computerChoice === 'Spock' && userChoice === "Rock") {
        result = "You lost! Try again.";
        var image= document.getElementById("computer-image");
        image.src="assets/images/spock.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/rock.png";
    }
    if (computerChoice === 'Spock' && userChoice === "Scissors") {
        result = "You lost! Try again.";
        var image= document.getElementById("computer-image");
        image.src="assets/images/spock.png";
        var image=document.getElementById("user-image");
        image.src="assets/images/scissors.png";
    }
    resultDisplay.innerHTML = result;
  }
