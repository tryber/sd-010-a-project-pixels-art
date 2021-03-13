const pixelBoard = document.querySelector('#pixel-board');
const sizeBorder = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const iB = 'inline-block';
const sB1P = 'solid black 1px';

for (let index = 0; index < 5; index += 1) {
  const tagLinha = document.createElement('div');
  tagLinha.className = 'line';
  tagLinha.style.height = '42px';
  pixelBoard.appendChild(tagLinha);
  for (let i = 0; i < 5; i += 1) {
    const tagPixel = document.createElement('div');
    tagPixel.className = 'pixel';
    tagPixel.style.backgroundColor = 'white';
    tagPixel.style.width = '40px';
    tagPixel.style.height = '40px';
    tagPixel.style.display = iB;
    tagPixel.style.border = sB1P;
    document.querySelectorAll('.line')[index].appendChild(tagPixel);
  }
}

function addPixel() {
  let boardSize = 0;
  if (sizeBorder.value > 50) {
    boardSize = 50;
  } else {
    boardSize = sizeBorder.value;
  }
  for (let index = 0; index < 5; index += 1) {
    for (let i = 0; i < boardSize - 5; i += 1) {
      const tgPixel = document.createElement('div');
      tgPixel.className = 'pixel';
      tgPixel.style.backgroundColor = 'white';
      tgPixel.style.width = '40px';
      tgPixel.style.height = '40px';
      tgPixel.style.display = iB;
      tgPixel.style.border = sB1P;
      document.querySelectorAll('.line')[index].appendChild(tgPixel);
    }
  }
}

generateBoard.addEventListener('click', addPixel);

function alertInvalidBoard() {
  if (sizeBorder.value === '') {
    alert('Board inválido!');
  }
}

generateBoard.addEventListener('click', alertInvalidBoard);

function addLine() {
  let bS = 0;
  if (sizeBorder.value > 50) { bS = 50; } else { bS = sizeBorder.value; }
  for (let n = 0; n < bS - 5; n += 1) {
    const tagLinha = document.createElement('div');
    tagLinha.className = 'line'; tagLinha.style.height = '42px';
    pixelBoard.appendChild(tagLinha);
    for (let i = 0; i < bS; i += 1) {
      const taPixel = document.createElement('div');
      taPixel.className = 'pixel';
      taPixel.style.backgroundColor = 'white';
      taPixel.style.width = '40px';
      taPixel.style.height = '40px';
      taPixel.style.display = iB;
      taPixel.style.border = sB1P;
      document.querySelectorAll('.line')[n + 5].appendChild(taPixel);
    }
  }
}

generateBoard.addEventListener('click', addLine);

function selectColor(event) {
  for (let index = 0; index < 4; index += 1) {
    document.querySelectorAll('.color')[index].className = 'color';
  }
  const ev = event.target;
  if (ev.className === 'color') {
    ev.className = 'color selected';
  }
}

document.querySelector('#color-palette').addEventListener('click', selectColor);

function pixelColor(event) {
  const seleColor = document.querySelector('.selected');
  const eT = event.target;
  const c = window.getComputedStyle(seleColor).getPropertyValue('background-color');
  eT.style.backgroundColor = c;
}

pixelBoard.addEventListener('click', pixelColor);

function clearBoard() {
  for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
  }
}

document.getElementById('clear-board').addEventListener('click', clearBoard);

function buttonsColor() {
  const newColorBlue = `#${Math.ceil(Math.random() * 999999)}`;
  document.getElementById('blue').style.backgroundColor = newColorBlue;
  const newColorGreen = `#${Math.ceil(Math.random() * 999999)}`;
  document.getElementById('green').style.backgroundColor = newColorGreen;
  const newColorYellow = `#${Math.ceil(Math.random() * 999999)}`;
  document.getElementById('yellow').style.backgroundColor = newColorYellow;
}

window.onload = buttonsColor;
