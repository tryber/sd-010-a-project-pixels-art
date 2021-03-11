const board = document.querySelector('#pixel-board');

const pallete = document.querySelector('#color-palette');
const clearBoard = document.querySelector('#clear-board');

function changeClass(elementTarget) {
  const element = document.getElementsByClassName('selected');
  for (let index = 0; index < element.length; index += 1) {
    element[index].setAttribute('class', 'color');
  }
  elementTarget.target.setAttribute('class', 'color selected');
}

function palleteColor(collors) {
  for (let index = 0; index < collors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    if (collors[index] === 'black') {
      color.className = 'color selected';
      color.style.background = 'black';
    } else {
      color.style.background = collors[index];
    }
    pallete.appendChild(color);
    color.addEventListener('click', changeClass);
  }
}

function changeColor(elementTarget) {
  const element = document.getElementsByClassName('selected');
  const color = element[0].getAttribute('style');
  const pixel = document.querySelectorAll('.pixel');
  console.log(pixel);
  elementTarget.target.setAttribute('style', `${color}`);
}

function creatBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const tableRow = document.createElement('tr');
    board.appendChild(tableRow);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const rowCell = document.createElement('td');
      rowCell.className = 'pixel';
      tableRow.appendChild(rowCell);
      rowCell.addEventListener('click', changeColor);
    }
    console.log(index + 1);
  }
}

function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].removeAttribute('style');
    pixel[index].style.background = 'white';
  }
}

function wipeOutBoard() {
  const boardSize = document.getElementById('pixel-board');
  boardSize.innerHTML = '';
}

function verifyBoardSize(boardSizeParameters) {
  let boardSize = boardSizeParameters;

  if (boardSize <= 0) {
    alert('Board inválido!');
  } else if (boardSize <= 5) {
    boardSize = 5;
    console.log(boardSize);
    creatBoard(boardSize);
  } else if (boardSize >= 50) {
    boardSize = 50;
    console.log(boardSize);
    creatBoard(boardSize);
  } else {
    console.log(boardSize);
    creatBoard(boardSize);
  }
  console.log('Chegou aqui');
}

function boardGenerator() {
  const boardSize = document.querySelector('#board-size').value;
  verifyBoardSize(boardSize);
}

const generateBoard = document.getElementById('generate-board');
generateBoard.addEventListener('click', wipeOutBoard);
generateBoard.addEventListener('click', boardGenerator);
clearBoard.addEventListener('click', clear);

function generateColor() {
  let colorCreate = 'rgb(';
  colorCreate += Math.floor(Math.random() * 255);
  colorCreate += ', ';
  colorCreate += Math.floor(Math.random() * 255);
  colorCreate += ', ';
  colorCreate += Math.floor(Math.random() * 255);
  colorCreate += ')';
  return colorCreate;
}
const collorsPallete = ['black', generateColor(), generateColor(), generateColor()];

window.onload = () => {
  palleteColor(collorsPallete);
  creatBoard(5);
  generateColor();
};
