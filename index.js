'use strict';

console.log('Funguju');

const kameny = document.querySelectorAll('.kamen');
const keyboard = document.querySelector('body');

kameny.forEach((kamen, index) => {
  kamen.addEventListener('click', () => {
    document.querySelector('h1').textContent = kamen.textContent;
    const zvuk = new Audio(`tony/${kamen.textContent}.mp3`);
    zvuk.play();
  });
});

keyboard.addEventListener('keydown', (event) => {
  const cislo = Number(event.code.replace('Digit', '')) || 0;

  if (cislo >= 1 && cislo <= kameny.length) {
    const zvuk = new Audio(`tony/${kameny[cislo - 1].textContent}.mp3`);
    zvuk.play();

    document.querySelector('h1').textContent = kameny[cislo - 1].textContent;
  }
});
