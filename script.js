/* LocalSession Manager */
localStorage.colorSelected = 'rgb(0, 0, 0)';
console.log(localStorage);

function localDataChecker(key, value) {
  if (localStorage[key] === undefined) {
    localStorage.setItem(key, value);
    return localStorage.getItem(key);
  }

  localStorage.setItem(key, value);
  return localStorage.getItem(key);
}

/* Palette Component */
function addColorElement(parentElement, color) {
  const colorElement = document.createElement('div');
  colorElement.classList.add('color');
  colorElement.style.backgroundColor = color;

  parentElement.appendChild(colorElement);
}
function addAllPaletteColors(parentElement, n) {
  const ColorfullLen = Math.floor(n * 0.8);
  const BWLen = n - ColorfullLen;
  for (let i = 0; i < BWLen; i += 1) {
    let color;
    color = 'hsl(0deg, ';
    color += '0%, ';
    color += `${(99 * i) / BWLen}%)`;
    addColorElement(parentElement, color);
  }
  for (let i = 1; i <= ColorfullLen; i += 1) {
    let color;
    color = `hsl(${Math.floor((360 * i) / n)}deg, `;
    color += `${Math.floor(Math.random() * 60 + 10)}%, `;
    color += `${Math.floor(Math.random() * 60 + 10)}%)`;
    addColorElement(parentElement, color);
  }
}

// selectColor
function resetClassName(className) {
  const selection = [...document.getElementsByClassName(className)];
  selection.forEach((el) => el.classList.remove(className));
}

function selectColor(parentComponent, colorSelectedElement) {
  const slctElement = colorSelectedElement;
  slctElement.style.backgroundColor = localStorage.colorSelected;

  parentComponent.addEventListener('click', (e) => {
    if (e.target.className === 'color') {
      const colorSected = e.target.style.backgroundColor;
      const stringSelected = 'selected';

      slctElement.style.backgroundColor = localDataChecker('colorSelected', colorSected);

      resetClassName(stringSelected);

      e.target.classList.add(stringSelected);
    }
  });
}

/* PaperComponent */

function addPixel(sideLength) {
  const pixelElement = document.createElement('div');
  pixelElement.className = 'pixel';
  pixelElement.style.width = sideLength;
  pixelElement.style.height = sideLength;
  pixelElement.style.backgroundColor = 'white';
  return pixelElement;
}

function addPixelRow(columns, sideLength) {
  const rowElement = document.createElement('div');
  rowElement.classList.add('board__row');

  for (let column = 0; column < columns; column += 1) {
    const colElement = addPixel(sideLength);
    rowElement.appendChild(colElement);
  }
  return rowElement;
}

function addBoard(parentElement, rows, columuns, sideLength) {
  for (let r = 0; r < rows; r += 1) {
    const row = addPixelRow(columuns, sideLength);
    parentElement.appendChild(row);
  }
  resetClassName('selected');
  document.querySelector('.color').classList.add('selected');
}

function paintBoard(parentElement) {
  const arrFunc = (e) => {
    const pixelElement = e.target;
    pixelElement.style.backgroundColor = localStorage.colorSelected;
  };
  parentElement.addEventListener('mousedown', arrFunc);
}

/* ResetBoard */

function addResetButton(parentElement) {
  const btnElement = document.createElement('button');
  btnElement.id = 'clear-board';
  btnElement.classList.add('reset__button');
  btnElement.innerText = 'Limpar';

  btnElement.addEventListener('click', () => {
    const pixels = [...document.getElementsByClassName('pixel')];

    pixels.forEach((x) => {
      const pixel = x.style;
      pixel.backgroundColor = 'white';
    });
  });
  parentElement.appendChild(btnElement);
}

/* Size Component */

function addInputElement() {
  const inputElement = document.createElement('input');
  inputElement.type = 'number';
  inputElement.id = 'board-size';
  inputElement.value = '';
  inputElement.step = '1';
  inputElement.min = '1';
  inputElement.max = '50';

  return inputElement;
}

function addButtonElement(name) {
  const btnElment = document.createElement('button');
  btnElment.id = 'generate-board';
  btnElment.innerHTML = name;
  return btnElment;
}

function buttonSizeEvent(boardElement, inputElement, buttonElement) {
  buttonElement.addEventListener('click', () => {
    const target = boardElement;
    const inputEl = inputElement;
    const input = parseInt(inputElement.value, 10);

    target.innerHTML = '';
    if (inputEl.value === '') alert('Board inválido!');
    if (input < 5) inputEl.value = '5';
    if (input > 50) inputEl.value = '50';
    addBoard(target, inputElement.valueAsNumber, inputElement.valueAsNumber, '40px');
  });
}

function addSizeComponet(parentElement) {
  const inputElement = addInputElement();
  const btnElment = addButtonElement('VQV');
  const divElement = document.createElement('div');
  divElement.classList.add('size__interaction');

  divElement.appendChild(inputElement);
  divElement.appendChild(btnElment);

  parentElement.appendChild(divElement);
  // parentElement.appendChild(inputElement);
  // parentElement.appendChild(btnElment);
  return { inputSize: inputElement, buttonSize: btnElment };
}

/* EvaluatorJob Thing */
const paper = '\'paper paper paper paper\'';
let UGLY = '\'header header header header\' var(--header-heigth)';
UGLY += '\'tools tools tools tools\'';
UGLY += paper;
UGLY += paper;
UGLY += paper;

const toolsPaper = '\'tools paper paper paper\'';
let PRETTY = '\'header header header header\' var(--header-heigth)';
PRETTY += toolsPaper;
PRETTY += toolsPaper;
PRETTY += toolsPaper;
PRETTY += toolsPaper;
PRETTY += ' / var(--tools-width) auto';

const layoutStyles = {
  ugly: UGLY,
  pretty: PRETTY,
};

function uglyLayout(layoutCont, uglyBtnb, colorPalettElem) {
  const layoutContainer = layoutCont;
  const uglyButton = uglyBtnb;
  const colorElem = colorPalettElem;
  layoutContainer.style.gridTemplate = layoutStyles.ugly;
  layoutContainer.classList.add('ugly');
  uglyButton.innerHTML = 'Pretty';
  colorElem.innerHTML = '';
  addAllPaletteColors(colorPalettElem, 4);
}

function pretteLayout(layoutCont, uglyBtnb, colorPalettElem) {
  const layoutContainer = layoutCont;
  const uglyButton = uglyBtnb;
  const colorElem = colorPalettElem;
  layoutContainer.style.gridTemplate = layoutStyles.pretty;
  layoutContainer.classList.remove('ugly');
  uglyButton.innerHTML = 'Uglyfy';
  colorElem.innerHTML = '';
  addAllPaletteColors(colorPalettElem, 50);
}

function evaluatorButton(parentElement, colorPalettElem) {
  const uglyButton = document.createElement('button');
  const layoutContainer = document.querySelector('.main-container');
  uglyButton.innerHTML = 'Pretty';
  uglyButton.classList.add('reset__button');
  layoutContainer.classList.add('ugly');

  uglyButton.addEventListener('click', () => {
    if (uglyButton.innerText === 'Pretty') {
      pretteLayout(layoutContainer, uglyButton, colorPalettElem);
    } else {
      uglyLayout(layoutContainer, uglyButton, colorPalettElem);
    }
  });
  parentElement.appendChild(uglyButton);
}

/* Function Callss */
// ColorPalette Component
const colorPallet = document.getElementById('color-palette');
const colorSelectedElement = document.getElementById('palette__color-selected');
const boardElement = document.getElementById('pixel-board');
const buttonElement = document.querySelector('.reset');
const sizeElement = document.querySelector('.size');
const sizeComponent = addSizeComponet(sizeElement);
addAllPaletteColors(colorPallet, 4);
selectColor(colorPallet, colorSelectedElement);
addBoard(boardElement, 5, 5, '40px');
paintBoard(boardElement);
addResetButton(buttonElement);
buttonSizeEvent(boardElement, sizeComponent.inputSize, sizeComponent.buttonSize);
evaluatorButton(document.querySelector('.tools__item'), colorPallet);
