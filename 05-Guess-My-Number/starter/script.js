'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscoreRecord = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('😥 No Number!');
  } else if (guess === secretNumber) {
    displayMessage('❤️ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    const highscore = 20 - score + 1;
    if (highscore < highscoreRecord) {
      highscoreRecord = highscore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    mistakeMade(score, guess > secretNumber ? '😒 Too high!' : '🤣 Too low!');
  }
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const mistakeMade = function (score, message) {
  if (score > 1) {
    displayMessage(message);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💥 You lost!');
    document.querySelector('.score').textContent = 0;
  }
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
