const className = 'color selected';
const selectIdPixelBoard = '#pixel-board';
const display = 'inline-block';

// Requirement 1;

function createh1() {
  const createH1 = document.createElement('h1');
  const selectorBody = document.querySelector('body');
  createH1.id = 'title';
  createH1.innerHTML = 'Paleta de Cores';
  selectorBody.appendChild(createH1);
}
createh1();

// Requirement 2;

function createCollorPalette() {
  const selectorBody = document.querySelector('body');
  const createDiv = document.createElement('div');
  createDiv.id = 'color-palette';
  selectorBody.appendChild(createDiv);
}
createCollorPalette();

function randomColors() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

function createCollorsIntoPallete() {
  const selectorDiv = document.getElementById('color-palette');
  const arrayDiv = ['black', randomColors(), randomColors(), randomColors()];
  for (let index = 0; index < arrayDiv.length; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.style.display = display;
    createDiv.style.backgroundColor = arrayDiv[index];
    selectorDiv.appendChild(createDiv);
  }
}
createCollorsIntoPallete();

// Requirement 4 and 5;

function createPixelTable() {
  const selectorBody = document.querySelector('body');
  const createDiv = document.createElement('div');
  createDiv.id = 'pixel-board';
  createDiv.style.border = 'solid 1px black';
  createDiv.style.display = 'block';
  createDiv.style.maxWidth = '210px';
  createDiv.style.display = 'block';
  selectorBody.appendChild(createDiv);
}
createPixelTable();

function createPixelTableLineElements() {
  for (let index = 1; index <= 25; index += 1) {
    const selectorDivPixelBoard = document.querySelector(selectIdPixelBoard);
    const createDiv = document.createElement('div');
    createDiv.className = 'pixel';
    createDiv.style.backgroundColor = 'white';
    createDiv.style.height = '40px';
    createDiv.style.width = '40px';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.display = display;
    selectorDivPixelBoard.appendChild(createDiv);
  }
}
createPixelTableLineElements();

// Requirement 6;

function firstElementClassSelected() {
  const selectorFirstColor = document.querySelectorAll('div')[1];
  selectorFirstColor.className += ' selected';
}
firstElementClassSelected();

function selectCollor(event) {
  const selectItem = event.target;
  const selectDivColor = document.getElementsByClassName('color');
  for (let index = 0; index < selectDivColor.length; index += 1) {
    if (selectDivColor[index].className === className) {
      selectDivColor[index].className = 'color';
    }
  }
  selectItem.className = className;
}

// Requirement 7;

function selectElement() {
  const selectDivColorPaletteBlack = document.querySelectorAll('.color')[0];
  const selectDivColorPaletteBlue = document.querySelectorAll('.color')[1];
  const selectDivColorPaletteRed = document.querySelectorAll('.color')[2];
  const selectDivColorPaletteGreen = document.querySelectorAll('.color')[3];
  selectDivColorPaletteBlack.addEventListener('click', selectCollor);
  selectDivColorPaletteRed.addEventListener('click', selectCollor);
  selectDivColorPaletteGreen.addEventListener('click', selectCollor);
  selectDivColorPaletteBlue.addEventListener('click', selectCollor);
}
selectElement();

// Requirement 8;

function paintPixels(event) {
  const evento = event.target;
  const pixelArray = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelArray.length; index += 1) {
    pixelArray[index].addEventListener('click', () => {
      pixelArray[index].style.backgroundColor = evento ? evento.style.backgroundColor : 'black';
    });
  }
}

function colorPixel() {
  const selectDivColorPalette = document.querySelectorAll('.color');
  for (let index = 0; index < selectDivColorPalette.length; index += 1) {
    selectDivColorPalette[index].addEventListener('click', paintPixels);
  }
}
colorPixel();

paintPixels({ evento: { target: { style: { backgroundColor: 'black' } } } });

function clearButton() {
  const selectPixelBoard = document.querySelector('#pixel-board');
  const selectorBody = document.querySelector('body');
  const createButton = document.createElement('button');
  createButton.id = 'clear-board';
  createButton.innerHTML = 'Limpar';
  selectorBody.insertBefore(createButton, selectPixelBoard);
}
clearButton();

function clearPixels() {
  const selectButton = document.querySelector('#clear-board');
  function clearPixelArray() {
    const pixelArray = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelArray.length; index += 1) {
      pixelArray[index].style.backgroundColor = 'white';
    }
  }
  selectButton.addEventListener('click', clearPixelArray);
}
clearPixels();

// Requirement 10 Bonus***;

function createButtonVQV() {
  const selectButton = document.querySelector('#clear-board');
  const selectorBody = document.querySelector('body');
  const createButton = document.createElement('button');
  createButton.id = 'generate-board';
  createButton.innerHTML = 'VQV';
  selectorBody.insertBefore(createButton, selectButton);
}
createButtonVQV();

function createInputNumber() {
  const selectGenerateBoard = document.querySelector('#generate-board');
  const selectorBody = document.querySelector('body');
  const createInput = document.createElement('input');
  createInput.id = 'board-size';
  createInput.type = 'number';
  createInput.min = '1';
  createInput.max = '50';
  selectorBody.insertBefore(createInput, selectGenerateBoard);
}
createInputNumber();

function checkInput() {
  const selectInput = document.querySelector('#board-size');
  if (selectInput.value === '') {
    alert('Board inválido!');
  }
  if (selectInput.value > 50) {
    selectInput.value = 50;
  } if (selectInput.value < 5) {
    selectInput.value = 5;
  }
}

function makePixels(value) {
  const selectorDivPixelBoard = document.querySelector(selectIdPixelBoard);
  for (let index = 1; index <= value; index += 1) {
    for (let index1 = 1; index1 <= value; index1 += 1) {
      const createDiv = document.createElement('div');
      selectorDivPixelBoard.style.maxWidth = `${parseInt(value, 10) * 42}px`;
      createDiv.className = 'pixel';
      createDiv.style.backgroundColor = 'white';
      selectorDivPixelBoard.appendChild(createDiv);
    }
  }
}

function generatePixels() {
  checkInput();
  const selectInput = document.querySelector('#board-size');
  const selectorDivPixelBoard = document.querySelector(selectIdPixelBoard);
  if (selectInput.value !== '') {
    selectorDivPixelBoard.innerHTML = '';
    makePixels(selectInput.value);
    colorPixel();
  } else {
    alert('Board inválido!');
  }
}

function createDivsBonus() {
  const selectButton = document.querySelector('#generate-board');
  selectButton.addEventListener('click', generatePixels);
}
createDivsBonus();
