const paleteColors = document.querySelector('#color-palette');
const tablePixels = document.querySelector('#pixel-board');
const eSelected = document.getElementsByClassName('color');

window.onload = () => {
  eSelected[0].className += ' selected';
};

function generateColors() {
  const rgb1 = Math.floor(Math.random() * 255);
  const rgb2 = Math.floor(Math.random() * 255);
  const rgb3 = Math.floor(Math.random() * 255);
  const rgbColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  return rgbColor;
}

function createBox() {
  for (let i = 0; i < 4; i += 1) {
    const boxColor = document.createElement('div');
    boxColor.className = 'color';
    paleteColors.appendChild(boxColor);
    boxColor.style.backgroundColor = generateColors();
  }
  paleteColors.firstElementChild.style.backgroundColor = 'black';
}

function createTablePixels(inputValue) {
  for (let i = 0; i < inputValue; i += 1) {
    const tr = document.createElement('tr');
    tablePixels.appendChild(tr);
    tr.className = 'table';
    for (let k = 0; k < inputValue; k += 1) {
      const td = document.createElement('td');
      document.querySelectorAll('.table')[i].appendChild(td);
      td.className = 'pixel';
      td.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

createTablePixels(5);

createBox();

const colorList = document.querySelectorAll('.color');

for (let i = 0; i < colorList.length; i += 1) {
  colorList[i].addEventListener('click', () => {
    for (let j = 0; j < colorList.length; j += 1) {
      colorList[j].classList.remove('selected');
    }
    colorList[i].className = 'color selected';
  });
}

const input = document.querySelector('#board-size');

const colorSelected = document.getElementsByClassName('color selected');
let pixels = document.querySelectorAll('.pixel');

function setColorPixel() {
  pixels.forEach((pixel, index) => {
    pixel.addEventListener('click', () => {
      pixels[index].style.backgroundColor = colorSelected[0].style.backgroundColor;
    });
  });
}

const buttonGenerate = document.querySelector('#generate-board');
let inputValue = input.value;

function sizeBoard(value) {
  inputValue = value;
  if (value < 5) inputValue = 5;
  if (value > 50) inputValue = 50;
  return inputValue;
}

function userGeneratePixelsBoard() {
  buttonGenerate.addEventListener('click', () => {
    inputValue = input.value;
    inputValue = sizeBoard(inputValue);
    document.querySelectorAll('.table').forEach((el) => el.remove());
    if (input.value === '') {
      alert('Board inválido!');
      createTablePixels(5);
    }
    createTablePixels(inputValue);
    pixels = document.querySelectorAll('.pixel');
    setColorPixel();
  });
}

userGeneratePixelsBoard();

function clearBoard() {
  const buttonClear = document.querySelector('#clear-board');
  buttonClear.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

clearBoard();
setColorPixel();
