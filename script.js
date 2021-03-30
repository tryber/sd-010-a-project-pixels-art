const pixelLine = document.getElementById('pixel-board');

function createPixelBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const pixel = document.createElement('tr');
    pixelLine.appendChild(pixel);
  }

  for (let indexLine = 0; indexLine < size; indexLine += 1) {
    let indexColumn = 0;
    for (indexColumn; indexColumn < size; indexColumn += 1) {
      const pixel = document.createElement('td');
      pixelLine.children[indexColumn].appendChild(pixel).className = 'pixel';
    }
  }
}

// Requisito 7
const colors = document.getElementsByClassName('color');

function changeSelectedColor(targetColor) {
  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];
    const event = targetColor.target;

    if (event === element) {
      event.classList.add('selected');
    } else {
      element.classList.remove('selected');
    }
  }
}

function selectColor() {
  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];

    element.addEventListener('click', changeSelectedColor);
  }
}

selectColor();

// Requisito 8
function getSelectedColor() {
  let selectedColor;

  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];

    if (element.classList.contains('selected')) {
      // selectedColor = element.getAttribute('background-color');
      selectedColor = element.style.backgroundColor;
    }
  }
  return selectedColor;
}

const pixels = document.getElementsByClassName('pixel');

function changePixelColor(targetColor) {
  const currentColor = getSelectedColor();

  for (let index = 0; index < pixels.length; index += 1) {
    const elementPixel = pixels[index];

    if (targetColor.target === elementPixel) {
      elementPixel.style.backgroundColor = currentColor;
    }
  }
}

function paintPixel() {
  for (let index = 0; index < pixels.length; index += 1) {
    const elementPixel = pixels[index];

    elementPixel.addEventListener('click', changePixelColor);
  }
}

// Requisito 9
const currentBoard = document.getElementById('pixel-board');

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    const elementPixelBoard = pixels[index];

    elementPixelBoard.style.backgroundColor = 'white';
  }
}

function eventClearBoard() {
  document.getElementById('clear-board').addEventListener('click', clearBoard);
}

// Requisito 10
const input = document.getElementById('board-size');
const buttonReSize = document.getElementById('generate-board');

function checkBoardSize() {
  if (input.value === '') {
    alert('Board inválido!');
    input.value = 5;
  } else if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
  currentBoard.innerHTML = '';
  createPixelBoard(input.value);
}

function addBoardReSize() {
  buttonReSize.addEventListener('click', checkBoardSize);
}

// Requisito 12
function randomPalettes() {
  const color = document.getElementsByClassName('color');
  for (let index = 1; index < color.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    color[index].style.backgroundColor = rgb;
  }
}

randomPalettes();

window.onload = function pixelsArt() {
  createPixelBoard(5);
  paintPixel();
  eventClearBoard();
  addBoardReSize();
};
