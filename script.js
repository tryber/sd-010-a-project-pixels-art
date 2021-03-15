const colorFirst = document.querySelector('.first');
const colorSecond = document.querySelector('.second');
const colorThird = document.querySelector('.third');
const colorFourth = document.querySelector('.fourth');

/* Randomizador de cores estudado e reproduzido daqui: https://stackoverflow.com/questions/1484506/random-color-generator  */

function randomizeColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function injectColors() {
  colorFirst.style.backgroundColor = 'black';
  colorSecond.style.backgroundColor = randomizeColor();
  colorThird.style.backgroundColor = randomizeColor();
  colorFourth.style.backgroundColor = randomizeColor();
}

injectColors();
colorFirst.classList.add('selected');

function createPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let i = 1; i <= 5; i += 1) {
    const pixelBoardColumn = document.createElement('tr');

    pixelBoard.appendChild(pixelBoardColumn);

    for (let j = 1; j <= 5; j += 1) {
      const pixelBoardLine = document.createElement('td');
      pixelBoardLine.className = 'pixel';

      pixelBoardColumn.appendChild(pixelBoardLine);
    }
  }
}

createPixelBoard();

function injectColor() {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected')) return colors[i].style.backgroundColor;
  }
}

function removeSelected() {
  const colorList = document.querySelectorAll('.color');
  for (let i = 0; i < colorList.length; i += 1) {
    if (colorList[i].classList.contains('selected')) {
      colorList[i].classList.remove('selected');
    }
  }
}

function selectColor(event) {
  removeSelected();
  event.target.classList.add('selected');
}

document.querySelector('#color-palette').addEventListener('click', selectColor);

function applyColor(event) {
  const eTarget = event.target;
  eTarget.style.backgroundColor = injectColor();
}

document.querySelector('#pixel-board').addEventListener('click', applyColor);

function clearBoard() {
  const blocks = document.querySelectorAll('.pixel');
  for (let i = 0; i < blocks.length; i += 1) {
    blocks[i].removeAttribute('style');
  }
}

document.querySelector('#clear-board').addEventListener('click', clearBoard);
