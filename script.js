function createSquares() {
  const colorPalette = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const makeSquare = document.createElement('td');
    makeSquare.className = 'color';
    colorPalette.appendChild(makeSquare);
  }
}

function generateColor() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

function colorSquares() {
  const colors = ['black', generateColor(), generateColor(), generateColor()];
  const squares = document.getElementsByClassName('color');
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = colors[index];
  }
  squares[0].className = 'color selected';
}

function createBoard(number) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < number; index += 1) {
    const row = document.createElement('tr');
    pixelBoard.appendChild(row);
    for (let index2 = 0; index2 < number; index2 += 1) {
      const column = document.createElement('td');
      column.className = 'pixel';
      const lastRow = pixelBoard.lastChild;
      lastRow.appendChild(column);
    }
  }
}

function selectColor(click) {
  const event = click.target;
  if (event.className === 'color') {
    const currentSelected = document.getElementsByClassName('selected');
    currentSelected[0].className = 'color';
    event.className = 'color selected';
  }
}

const colorSelect = document.getElementById('color-palette');
colorSelect.addEventListener('click', selectColor);

function getColorSelected() {
  const classSelected = document.getElementsByClassName('selected');
  const colorSelected = window.getComputedStyle(classSelected[0], null).getPropertyValue('background-color');
  return colorSelected;
}

function paintBox(click) {
  const event = click.target;
  const colorSelected = getColorSelected();
  console.log(event);
  console.log(colorSelected);
  event.style.backgroundColor = colorSelected;
}

const pixelSelect = document.getElementById('pixel-board');
pixelSelect.addEventListener('click', paintBox);

function clearBoard() {
  const board = document.getElementsByClassName('pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'white';
  }
}
function removeAllSquares() {
  const removeSquares = document.getElementById('pixel-board');
  while (removeSquares.firstChild) {
    removeSquares.removeChild(removeSquares.lastChild);
  }
}

function validBoard() {
  const numberOfInput = document.querySelector('#board-size').value;
  if (numberOfInput === '') {
    alert('Board inválido!');
    return false;
  }
  return true;
}
function makeBoard() {
  let numberOfInput = document.querySelector('#board-size').value;
  if (validBoard()) {
    if (numberOfInput < 5) {
      numberOfInput = 5;
      alert('Tamanho mínimo do Board: 5px');
      createBoard(numberOfInput);
    } else if (numberOfInput > 50) {
      alert('Tamanho máximo do Board: 50px');
      numberOfInput = 50;
      createBoard(numberOfInput);
    }
    removeAllSquares();
    createBoard(numberOfInput);
  }
}

function loadPage() {
  createSquares();
  colorSquares();
  createBoard(5);
  clearBoard();
}

window.onload = loadPage;
