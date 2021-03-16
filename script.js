function selectColor() {
  const getColorElement = document.querySelector('.selected');
  const selColor = window.getComputedStyle(getColorElement).getPropertyValue('background-color');
  return selColor;
}

function pixelsColor() {
  const pixels = document.getElementsByClassName('pixel');
  Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const pixelItem = event.target;
      pixelItem.style.backgroundColor = selectColor();
    });
  });
}

function createPixelBoard(size) {
  document.getElementById('pixel-board').innerHTML = '';
  const pixelsContainer = document.querySelector('#pixel-board');
  pixelsContainer.style.width = (`${(size * 41)}px`);
  pixelsContainer.style.height = (`${(size * 41)}px`);
  for (let index = 0; index < size ** 2; index += 1) {
    const createPixels = document.createElement('div');
    createPixels.className = 'pixel';
    pixelsContainer.appendChild(createPixels);
  }
  pixelsColor();
}

createPixelBoard(5);

function classChange(event) {
  const paletteColors = document.querySelectorAll('.color');
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

document.querySelector('#color-palette').addEventListener('click', classChange);

function createButton(buttonName, buttonId) {
  const buttonContainer = document.getElementById('buttonDiv');
  const newButton = document.createElement('button');
  const newButtonID = buttonId;

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}

createButton('Limpar', 'clear-board');

function resetPixels() {
  const pixels = document.querySelectorAll('.pixel');
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white';
  });
}

function clickButton() {
  const clearPixels = document.getElementById('clear-board');
  clearPixels.addEventListener('click', resetPixels);
}

clickButton();

function createBoard() {
  let boardSize = document.getElementById('board-size');
  if (boardSize.value === '') {
    alert('Board inválido!');
    return;
  }
  boardSize = Number(boardSize.value);
  if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  } return createPixelBoard(boardSize);
}

const vqvButton = document.getElementById('generate-board');
vqvButton.addEventListener('click', createBoard);

function randomColor() {
  const paletteColors = document.getElementsByClassName('color');
  for (let index = 1; index < paletteColors.length; index += 1) {
    const randomColors = (`rgb(${Math.random() * 254},
      ${Math.random() * 254},
      ${Math.random() * 254})`);
    paletteColors[index].style.background = randomColors;
  }
}
randomColor();
