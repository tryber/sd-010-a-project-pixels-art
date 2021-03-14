const addClassSelected = document.querySelector('.color');
addClassSelected.className = 'color selected';

const changeNameClass = document.getElementById('color-palette');

function colorSelected(event) {
  document.getElementById('black').className = 'color';
  document.getElementById('blue').className = 'color';
  document.getElementById('green').className = 'color';
  document.getElementById('red').className = 'color';

  const targetEvent = event.target.id;
  document.getElementById(targetEvent).className = 'color selected';
}

changeNameClass.addEventListener('click', colorSelected);

const variable = document.getElementById('pixel-board');

function colorize(colorPixel) {
  const colorizePixel = document.querySelector('.selected').id;
  colorPixel.target.style.backgroundColor = colorizePixel;
}

variable.addEventListener('click', colorize);

const clearBoard = document.querySelector('#clear-board');

function boardCleanAll() {
  const pixelFrame = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelFrame.length; index += 1) {
    pixelFrame[index].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', boardCleanAll);
