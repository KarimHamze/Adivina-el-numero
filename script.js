'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// ----------------------------------------------------------------- //

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Cuando no pone numero
  if (!guess) {
    displayMessage('⛔ No numero!');
  }

  // Cuando adivina
  else if (guess === secretNumber) {
    //text
    displayMessage('🥳 Numero correcto!');
    displayScore(secretNumber);
    //style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  // Cuando el jugador no adivina
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👆 Muy alto!' : '👇 Muy bajo!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😒 Perdiste!');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

// Resetear el Juego
document.querySelector('.again').addEventListener('click', function () {
  // Score
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Texto
  displayMessage('Empieza a adivinar...');
  displayScore(score);
  displayNumber('?');

  // Style y Valor
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
