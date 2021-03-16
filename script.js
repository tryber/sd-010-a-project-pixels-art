function generateRandomColors() {
  return Math.ceil(Math.random() * 255);
}
let colorChannelOne = generateRandomColors();
let colorChannelTwo = generateRandomColors();
let colorChannelThree = generateRandomColors();
let colorChannel2One = generateRandomColors();
let colorChannel2Two = generateRandomColors();
let colorChannel2Three = generateRandomColors();
let colorChannel3One = generateRandomColors();
let colorChannel3Two = generateRandomColors();
let colorChannel3Three = generateRandomColors();

document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.channel-one').style.backgroundColor = `rgb(${colorChannelOne}, ${colorChannelTwo}, ${colorChannelThree})`;
document.querySelector('.channel-two').style.backgroundColor = `rgb(${colorChannel2One}, ${colorChannel2Two}, ${colorChannel2Three})`;
document.querySelector('.channel-three').style.backgroundColor = `rgb(${colorChannel3One}, ${colorChannel3Two}, ${colorChannel3Three})`;
const generateBoard = document.querySelector('#generate-board');

generateBoard.addEventListener('click', function () {
  let boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  } if (boardSize < 5) {
    boardSize = 5;
  } if (boardSize > 50) {
    boardSize = 50;
  }
  createPixelBoard(boardSize);
});

const pixelBoard = document.querySelector('#pixel-board');
function createPixelBoard(size) {
  resetPixelBoard();
  for (let line = 0; line < size; line += 1) {
    const tableRow = document.createElement('tr');
    pixelBoard.appendChild(tableRow);
    for (let column = 0; column < size; column += 1) {
      const tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);
      tableCell.classList.add('pixel');
    }
  }
} createPixelBoard(5);

function resetPixelBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = pixels.length - 1; index >= 0; index -= 1) {
    pixels[index].remove();
  }
}

function clearBoard() {
  const buttonClear = document.querySelector('#clear-board');
  const pixelTd = document.getElementsByClassName('pixel');
  buttonClear.addEventListener('click', function () {
    for (let indexClear = 0; indexClear < pixelTd.length; indexClear += 1) {
      pixelTd[indexClear].style.backgroundColor = 'white';
    }
  });
} clearBoard();

const colorClassName = document.querySelectorAll('.color');
function colorSelected() {
  for (let index = 0; index < colorClassName.length; index += 1) {
    colorClassName[0].classList.add('selected');
  }
} colorSelected();

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }
});

pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});

// Para a realização do projeto precisei de dicas de meus colegas no Slack:
// Andre Jaques
// Mauricio Vegas
// além também de suporte do plantão.
// Também consultei o material de aulas passadas do bloco
// https://github.com/tryber/sd-10a-live-lectures/blob/lecture/4.4/mega-sena.js
// E alguns sites:
// https://www.w3schools.com/
// https://developer.mozilla.org/en-US/
