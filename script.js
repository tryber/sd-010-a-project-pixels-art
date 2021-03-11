function palette() {
  const color = document.querySelectorAll('.color');
  const arrayColors = ['black', 'blue', 'yellow', 'purple'];
  for (let index = 0; index < color.length; index += 1) {
    color[index].style.backgroundColor = arrayColors[index];
    if (arrayColors[index] === 'black') {
      color[index].className += ' selected';
    }
  }
}

window.onload = palette;

function clearBoard() {
  const cleanBtn = document.querySelector('#clear-board');
  cleanBtn.addEventListener('click', () => {
    const board = document.querySelectorAll('.pixel');
    for (let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = 'white';
    }
  });
}

clearBoard();

function getColor() {
  const colorArray = document.querySelector('#color-palette');
  colorArray.addEventListener('click', (event) => {
    const selectedColor = event.target;
    document.querySelector('.selected').className = 'color';
    selectedColor.className += ' selected';
    // console.log(selectedColor);
    // console.log(colorArray);
  });
}

getColor();

function setColor() {
  const pixelTable = document.querySelector('#pixel-board');
  pixelTable.addEventListener('click', (event) => {
    const selectPixel = event.target;
    const color = document.querySelector('.selected').style.backgroundColor;
    // console.log(color)
    selectPixel.style.backgroundColor = color;
  });
}

setColor();
