'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎈Número correcto!';

// document.querySelector('.number').textContent = 10;

// document.querySelector('.score').textContent = 100;

// document.querySelector('.highscore').textContent = 120;

// document.querySelector('.guess').value = 20;

function numeroRandom() {
  return (Math.random() * 20).toFixed(0);
}

// Estado de nuestra aplicación
let number = Number(numeroRandom());
let score = 20;
let highscore = 0;
console.log(number);

const displayName = function (message) {
  document.querySelector('.message').textContent = message;
};

const fondo = function (color) {
  document.body.style.backgroundColor = color;
};

const marcador = function (value) {
  document.querySelector('.score').textContent = value;
};

// Trabajamos a partir del eventoo 'click' en PROBAR
document.querySelector('.check').addEventListener('click', function () {
  // Nos aseguramos que lo que recibamos sea un número
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // vacíamos el input cada vez que se ingrese un número
  document.querySelector('.guess').value = '';

  // FALLO
  if (!guess) {
    displayName('UPS, no es número 🤐');
  }
  // ACIERTO
  else if (guess === number) {
    displayName('Has acertado!');
    document.querySelector('.number').textContent = number;
    fondo('blue');
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  //  else if (guess > number) {
  //   document.querySelector('.message').textContent =
  //     'El número es más pequeño !';
  //   if (score > 0) score--;
  //   document.querySelector('.score').textContent = score;
  // } else if (guess < number) {
  //   document.querySelector('.message').textContent = 'El número es más grande!';
  //   if (score > 0) score--;
  //   document.querySelector('.score').textContent = score;
  // }
  {
    guess > number
      ? displayName('El número es más pequeño !')
      : displayName('El número es más grande!');
  }
  if (score > 0) {
    score--;
    marcador(score);
  }

  if (score < 1) {
    displayName('Has perdido :( vuelve a intentarlo');
  }
});

// FUNCIÓN QUE RESETEA TODO AL DAR 'AGAIN'.
const allAgain = function () {
  document.querySelector('.guess').textContent = '';
  document.querySelector('.message').textContent = 'Comprobando...';
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Number(numeroRandom());
  document.querySelector('.number').textContent = '';

  fondo('#222');
};

// ASIGNAMOS LAS FUNCIONE EN LA FUNCIÓN ANONIMA DEL EVENTO.
document.querySelector('.again').addEventListener('click', function () {
  allAgain();
});
