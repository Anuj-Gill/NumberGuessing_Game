let attempts = 3;
let guesses = [];

const form = document.querySelector('.form');

function getRandomInt(){
  let randomNum = Math.floor(Math.random() * 10);
  if(randomNum === 0){
    return randomNum + 1;
  }
  return randomNum;
}

function checkAnswer(num) {
  attempts--;
  if(num in guesses && attempts > 0){
    window.alert('Correct!!');
    document.querySelector('.correctNum').innerHTML = `The correct answer is ${num}`;
  } else if(attempts > 0)  {
    window.alert('Incorrect! Try again');
  } else {
    window.alert('Attempts over, better luck next time!!');
    document.querySelector('.correctNum').innerHTML = `The correct answer is ${num}`;
  }
}

function displayAttempts() {
  document.querySelector('.attempts').innerHTML = `Attempts left: ${attempts}`;
}

function storeGuess(num) {
  guesses.push(num);
}

function displayGuesses() {
  document.querySelector('.guesses').innerHTML = `Previous gusses: ${guesses}`;
}

const randomNumber = getRandomInt();
form.addEventListener('submit',(e) => {
  e.preventDefault();
  let num = document.getElementById('numberInput').value;
  if(attempts > 0){
    storeGuess(num);
    checkAnswer(num);
    displayGuesses();
    displayAttempts();
  } else {
    checkAnswer(num);
  }
})


