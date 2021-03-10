function randomColor() {
  return Math.random() * 255;
}

function setColorPallet() {
  const arrayColor = document.querySelectorAll('.color');
  arrayColor[0].style.backgroundColor = 'black';
  arrayColor[0].classList.add('selected');
  arrayColor[1].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
  arrayColor[2].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
  arrayColor[3].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
}

const pixelBoard = document.getElementById('pixel-board');

function generatePixelFrame(boardSize = 5) {
  for (let index = 0; index < boardSize; index += 1) {
    const tableRow = document.createElement('tr');
    for (let data = 0; data < boardSize; data += 1) {
      const cell = document.createElement('td');
      cell.className = 'pixel';
      cell.style.backgroundColor = 'white';
      tableRow.appendChild(cell);
    }
    pixelBoard.appendChild(tableRow);
  }
  pixelBoard.style.border = 'solid black 1px';
}

function setBoardSize() {
  let customSize = document.getElementById('board-size').value;
  if (customSize > 0 && customSize < 5) {
    customSize = 5;
  }
  if (customSize > 50) {
    customSize = 50;
  }
  return customSize;
}
// https://css-tricks.com/snippets/javascript/remove-element/
// eslint-disable-next-line no-unused-vars
function generateCustomPixelFrame() {
  const customSize = setBoardSize();
  if (!customSize) {
    return alert('Board inválido!');
  }
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  return generatePixelFrame(customSize);
}

function getColors() {
  const palletColors = document.getElementById('color-palette');
  palletColors.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
}

function setColor() {
  pixelBoard.addEventListener('click', (event) => {
    const color = document.querySelector('.selected').style.backgroundColor;
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = color;
  });
}

function clearPixelBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

window.onload = () => {
  setColorPallet();
  generatePixelFrame();
  getColors();
  setColor();
  clearPixelBoard();
};
