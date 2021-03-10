function squareColors() {
  const square1 = document.getElementById('color-black');
  square1.style.backgroundColor = 'black';

  const square2 = document.getElementById('color-red');
  square2.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const square3 = document.getElementById('color-green');
  square3.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const square4 = document.getElementById('color-blue');
  square4.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;
}

function listenPaletteSection() {
  const colorPalette = document.querySelector('#color-palette');

  colorPalette.addEventListener('click', (event) => {
    const colorDivsList = document.querySelectorAll('.color');

    for (let i = 0; i < colorDivsList.length; i += 1) {
      colorDivsList[i].classList.remove('selected');
    }

    event.target.classList.add('selected');
  });
}

function selectColor() {
  const pixel = document.querySelector('#pixel-board');

  pixel.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.color.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  });
}

function limpar() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function clearBtnFunction() {
  const clearBtn = document.getElementById('clear-board');

  clearBtn.addEventListener('click', limpar);
}

function removeDivs() {
  const lineDivs = document.querySelectorAll('.line');
  const pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < lineDivs.length; index += 1) {
    const currentDiv = lineDivs[index];
    pixelBoard.removeChild(currentDiv);
  }
}

function addDivsLine(boardSize) {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < boardSize; index += 1) {
    const divLine = document.createElement('div');
    divLine.classList.add('line');

    pixelBoard.appendChild(divLine);
  }
}

function addPixels(boardSize) {
  const divLine = document.querySelectorAll('.line');
  for (let index = 0; index < divLine.length; index += 1) {
    const currentLine = divLine[index];
    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      currentLine.appendChild(createPixel);
    }
  }
}

function generateBoardSize() {
  let inputValue = document.querySelector('#board-size').value;

  if (!inputValue) {
    alert('Board inválido!');
  } if (inputValue > 50) {
    inputValue = 50;
  } if (inputValue < 5) {
    inputValue = 5;
  }
  removeDivs();
  addDivsLine(inputValue);
  addPixels(inputValue);
}

function listenerBtn() {
  const sizeBtn = document.querySelector('#generate-board');
  sizeBtn.addEventListener('click', generateBoardSize);
}

window.onload = function () {
  squareColors();
  listenPaletteSection();
  selectColor();
  clearBtnFunction();
  listenerBtn();
};
