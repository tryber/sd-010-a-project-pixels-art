const paletteColors = document.querySelectorAll('#color-palette .color');
const pixelBoard = document.getElementById('pixel-board');
let pixelBoardSize = 5;
const inputBoardSize = document.getElementById('board-size');
const buttonBoardSize = document.getElementById('generate-board');
let pixels = document.querySelectorAll('#pixel-board .pixel');

function getLetterOrNumber(letter, number) {
  const array = [letter, number];
  const indexOfArray = Math.floor(Math.random() * array.length);
  return array[indexOfArray];
}

function randomColor() {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomLetterIndex = Math.floor(Math.random() * letters.length);
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);
  const randomLetter = letters[randomLetterIndex];
  const randomNumber = String(numbers[randomNumberIndex]);
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    const random = getLetterOrNumber(randomLetter, randomNumber);
    color += random;
  }
  return color;
}

const colors = {
  black: 'black',
  color2: randomColor(),
  color3: randomColor(),
  color4: randomColor(),
};

function clearPixelBoard() {
  const pixelBoardRows = document.querySelectorAll('.pixel-board-row');
  for (let index = 0; index < pixelBoardRows.length; index += 1) {
    const row = pixelBoardRows[index];
    row.remove();
  }
}
function getCurrentColor() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const color = paletteColors[index];
    if (color.classList.contains('selected')) {
      return color.id;
    }
  }
}

function fillPixel(element) {
  const pixel = element.target;
  const currentColor = getCurrentColor();
  pixel.style.backgroundColor = colors[currentColor];
}

function generatePixelBoard() {
  clearPixelBoard();
  for (let rows = 0; rows < pixelBoardSize; rows += 1) {
    const pixelBoardRow = document.createElement('div');
    for (let pixelsIndex = 0; pixelsIndex < pixelBoardSize; pixelsIndex += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelBoardRow.appendChild(pixel);
    }
    pixelBoardRow.classList.add('pixel-board-row');
    pixelBoard.appendChild(pixelBoardRow);
  }
  pixels = document.querySelectorAll('#pixel-board .pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.addEventListener('click', fillPixel);
  }
}

generatePixelBoard();

function readjustSize(value) {
  if (value < 5) {
    return 5;
  }
  return 50;
}

function setBoardSize() {
  if (inputBoardSize.value === '') {
    alert('Board inválido!');
  } else if (inputBoardSize.value < 5 || inputBoardSize.value > 50) {
    pixelBoardSize = readjustSize(inputBoardSize.value);
  } else {
    pixelBoardSize = inputBoardSize.value;
  }
  generatePixelBoard();
}

buttonBoardSize.addEventListener('click', setBoardSize);

function setColorPalette(element) {
  const colorOption = element;
  if (colors[colorOption.id]) {
    colorOption.style.backgroundColor = colors[colorOption.id];
  }
}

function selectColor(element) {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const color = paletteColors[index];
    if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
  }

  element.target.classList.add('selected');
}

for (let index = 0; index < paletteColors.length; index += 1) {
  const colorElement = paletteColors[index];
  setColorPalette(colorElement);
  colorElement.onclick = selectColor;
}

const clearBoardButton = document.getElementById('clear-board');

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.style.backgroundColor = 'white';
  }
}

clearBoardButton.addEventListener('click', clearBoard);
