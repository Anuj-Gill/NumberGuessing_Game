let attempts = 3;
let guesses = [];
let flag = 0;

const form = document.querySelector('.form');

function getRandomInt(){
  let randomNum = Math.floor(Math.random() * 10);
  if(randomNum === 0){
    return randomNum + 1;
  }
  return randomNum;
}

function checkAnswer(num) {
  if(randomNumber == num && attempts > 0){
    window.alert('Correct!!');
    flag = 1;
    document.querySelector('.correctNum').innerHTML = `The correct answer is ${num}`;
  } else if(attempts > 0)  {
    window.alert('Incorrect! Try again');
  } 
  attempts--;
  if(attempts === 0 && flag === 0){
    window.alert('Attempts over, better luck next time!!');
    document.querySelector('.correctNum').innerHTML = `The correct answer is ${randomNumber}`;
    document.getElementById('numberInput').disabled = true;
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
  num = parseInt(num)
  if (isNaN(num) || num < 1 || num > 10) {
    window.alert('Please enter a valid number between 1 and 10.');
  } else if(attempts > 0){
    storeGuess(num);
    checkAnswer(num);
    displayGuesses();
    displayAttempts();
    document.getElementById('numberInput').value = '';
  } 
})



