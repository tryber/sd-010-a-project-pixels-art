/* eslint-disable no-param-reassign */
const paletteColors = document.querySelector('#color-palette');
const pixelBoard = document.getElementById('pixel-board'); // variaveis

for (let index = 0; index < 5; index += 1) { // aqui esta sendo gerada a tabela de 5x5
  const line = document.createElement('div');
  line.className = 'line';
  pixelBoard.appendChild(line);
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const lineInside = document.createElement('div');
    lineInside.className = 'pixel';
    line.appendChild(lineInside);
  }
}

const clickinColor = document.getElementsByClassName('color'); // aqui estq sendo criado o click

for (let index = 0; index < clickinColor.length; index += 1) {
  // eslint-disable-next-line no-use-before-define
  clickinColor[index].addEventListener('click', removeSelect);
}
function removeSelect(e) {
  const remove = document.getElementsByClassName('selected'); // aqui remove o select de todas as classes (peguei de exemplo do Luiz Putinatti)
  remove[0].classList.remove('selected');
  e.target.classList.add('selected');
}
function colorPixel(event) {
  if (event.target.className === 'pixel') {
    const selected = document.getElementsByClassName('selected');
    const colorhtml = window.getComputedStyle(selected[0], null).getPropertyValue('background-color');
    event.target.style.backgroundColor = colorhtml;
  }
}
pixelBoard.addEventListener('click', colorPixel);

const clearBoard = document.querySelector('#clear-board');
clearBoard.addEventListener('click', clearall);

function clearall() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
