// Requisito 2/3/12
window.onload = () => {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    const randomColor = `rgb(${r} , ${g} , ${b})`;
    colors[i].style.backgroundColor = randomColor;
  } colors[0].style.backgroundColor = 'black';
};

const board = document.querySelector('#pixel-board');

// Requisito 4
const pixelBoard = (number) => {
  for (let i = 0; i < number; i += 1) {
    for (let j = 0; j < number; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      board.appendChild(pixel);
    }
  }
};

// Requisito 7
document.querySelector('#color-palette').addEventListener('click', (newSelected) => {
  const oldSelected = document.querySelector('.selected');
  oldSelected.classList.remove('selected');
  newSelected.target.classList.add('selected');
});

// Requisito 8
board.addEventListener('click', (paint) => {
  const color = document.querySelector('.selected').style.backgroundColor;
  const targeted = paint.target;
  targeted.style.backgroundColor = color;
});

// Requisito 9
const clearBoard = () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) pixel[i].style.backgroundColor = 'white';
};

// Requisito 10 e 11
document.querySelector('#generate-board').addEventListener('click', () => {
  board.innerText = '';
  const size = document.querySelector('#board-size');
  if (size.value === '') alert('Board inválido!');
  if (size.value < 5) size.value = 5;
  if (size.value > 50) size.value = 50;
  const calculation = 2.625 * size.value;
  board.style.height = `${calculation}em`;
  board.style.width = `${calculation}em`;
  pixelBoard(size.value);
  clearBoard();
});

pixelBoard(5);
document.querySelector('#clear-board').addEventListener('click', clearBoard);
