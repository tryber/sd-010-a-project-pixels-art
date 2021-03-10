window.onload = function () {
  const initialColor = document.querySelector('.color');
  initialColor.className += ' selected';

  document.getElementById('color1').style.backgroundColor = 'black';
  document.getElementById('color2').style.backgroundColor = '#14213d';
  document.getElementById('color3').style.backgroundColor = '#fca311';
  document.getElementById('color4').style.backgroundColor = '#e5e5e5';

  const squareBase = 5;
  for (let index = 1; index <= squareBase; index += 1) {
    let lines = document.createElement('div');
    lines.className = 'line';
    document.querySelector('#pixel-board').appendChild(lines);
    for (let jndex = 1; jndex <= squareBase; jndex += 1) {
      let squares = document.createElement('div');
      lines.appendChild(squares);
      squares.className = 'pixel';
    }
  }
};

function changeSelectedColor() {
  const allColors = document.querySelector('#color-palette');
  function colorChange(event) {
    if (event.target.className === 'color') {
      document.querySelector('.selected').className = 'color';
      event.target.className += ' selected';
    }
  }
  allColors.addEventListener('click', colorChange);
}
changeSelectedColor();

function changeColor() {
  const board = document.querySelector('#pixel-board');
  board.addEventListener('click', function (event) {
    const currentColor = document.querySelector('.selected').style.backgroundColor;
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      if (pixel[index] === event.target) {
        pixel[index].style.backgroundColor = currentColor;
      }
    }
  });
}
changeColor();

const cleanButton = document.createElement('button');
cleanButton.id = 'clear-board';
cleanButton.innerText = 'Limpar';
document.querySelector('header').appendChild(cleanButton);
document.querySelector('header').style.textAlign = 'center';
cleanButton.style.fontSize = '20px';

function resetBoard() {
  const button = document.querySelector('button');
  button.addEventListener('click', function () {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

resetBoard();
