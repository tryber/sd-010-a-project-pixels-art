const board = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const selectedColor = document.getElementsByClassName('selected');
const clearButton = document.querySelector('#clear-board');
const generateButton = document.querySelector('#generate-board');

// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const color1 = document.querySelectorAll('.color')[0];
color1.style.backgroundColor = 'rgb(0, 0, 0)';
const color2 = document.querySelectorAll('.color')[1];
color2.style.backgroundColor = getRandomColor();
const color3 = document.querySelectorAll('.color')[2];
color3.style.backgroundColor = getRandomColor();
const color4 = document.querySelectorAll('.color')[3];
color4.style.backgroundColor = getRandomColor();

function pixelBoard(size) {
  for (let i = 1; i <= size; i += 1) {
    const column = document.createElement('tr');
    board.appendChild(column);

    for (let j = 1; j <= size; j += 1) {
      const line = document.createElement('td');
      line.className = 'pixel';
      column.appendChild(line);
    }
  }
}

function colorSelection() {
  color1.className = 'color selected';

  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', (e) => {
      for (let j = 0; j < colors.length; j += 1) {
        colors[j].className = 'color';
      }
      e.target.className = 'color selected';
    });
  }
}

function paintBoard() {
  board.addEventListener('click', (e) => {
    const boardColor = e.target.style.backgroundColor;
    for (let i = 0; i < colors.length; i += 1) {
      const getColor = colors[i].style.backgroundColor;
      if (selectedColor.length > 0 && boardColor !== getColor) {
        const pixelColor = selectedColor[0].style.backgroundColor;
        e.target.style.backgroundColor = pixelColor;
      }
    }
  });
}

function clear() {
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function boardReset() {
  const reset = document.querySelector('#pixel-board');
  reset.innerHTML = '';
}

function generateBoard() {
  const boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
    boardReset();
    pixelBoard(5);
  }
  if (boardSize > 50) {
    boardReset();
    pixelBoard(50);
  }
  if (boardSize < 5) {
    boardReset();
    pixelBoard(5);
  } else {
    boardReset();
    pixelBoard(boardSize);
  }
}

generateButton.addEventListener('click', generateBoard);
clearButton.addEventListener('click', clear);
paintBoard();
colorSelection();
pixelBoard(5);
