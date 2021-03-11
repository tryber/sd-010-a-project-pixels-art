let selectedPalette = 'black';
const bgColor = 'background-color';

function clickedPixelElement(event) {
  event.target.style.setProperty(bgColor, selectedPalette);
}

const pixels = document.getElementsByClassName('pixel');

function createPixelsListeners() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', clickedPixelElement);
  }
}

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function generateAleatoryColor() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

const colorPalettes = document.getElementsByClassName('color');

function generateRandomPalette() {
  for (let index = 1; index < colorPalettes.length; index += 1) {
    colorPalettes[index].style.setProperty(bgColor, generateAleatoryColor());
  }
}

function init() {
  createPixelsListeners();
  generateRandomPalette();
}

window.onload = init;

function removeSelected(value) {
  for (let index = 0; index < colorPalettes.length; index += 1) {
    if (value !== colorPalettes[index]) {
      colorPalettes[index].classList.remove('selected');
    }
  }
}

function clickedPaletteElement() {
  this.classList.add('selected');
  selectedPalette = window
    .getComputedStyle(this)
    .getPropertyValue(bgColor);
  removeSelected(this);
}

for (let index = 0; index < colorPalettes.length; index += 1) {
  colorPalettes[index].addEventListener('click', clickedPaletteElement);
}

function inputValidation() {
  let inputValue = document.getElementById('board-size').value;
  if (inputValue === '') {
    alert('Board inválido!');
    inputValue = 5;
  }
  if (inputValue > 50) {
    inputValue = 50;
  }
  if (inputValue < 5) {
    inputValue = 5;
  }
  return inputValue;
}

function generateBoard() {
  const inputValue = inputValidation();
  const pixelBoard = document.getElementById('board-body');
  pixelBoard.innerHTML = '';

  for (let indexRow = 0; indexRow < inputValue; indexRow += 1) {
    const boardRow = document.createElement('tr');
    boardRow.classList.add('pixel-row');
    pixelBoard.appendChild(boardRow);
    for (let indexColumn = 0; indexColumn < inputValue; indexColumn += 1) {
      const boardItem = document.createElement('td');
      boardItem.classList.add('pixel');
      boardRow.appendChild(boardItem);
    }
  }
  createPixelsListeners();
}

const vqvButtom = document.getElementById('generate-board');
vqvButtom.addEventListener('click', generateBoard);

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);
