'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Cuando no pone numero
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No numero!';
  }

  // Cuando adivina
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Numero correcto!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
  }

  // Cuando el numero es muy alto
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆 Muy alto! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 Perdiste! ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }

  // Cuando el numero es muy bajo
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '👇 Muy bajo! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 Perdiste! ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Score
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Texto
  document.querySelector('.message').textContent = 'Empieza a adivinar...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  // Style y Valor
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
