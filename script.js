const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const addEvListenerNElements = (elementsNodes, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const nodes = document.querySelectorAll(elementsNodes);
  for (let index = 0; index < nodes.length; index += 1) {
    nodes[index].addEventListener(event, fn);
  }
};

const changeColorPixel = (ev) => {
  const el = document.querySelector('.selected');
  const newColor = el.style.backgroundColor;
  const pixel = ev.target;
  pixel.style.backgroundColor = newColor;
};

const toggleClassInit = (elementNode, className) => {
  const element = document.querySelector(elementNode);
  element.classList.toggle(className);
};

const toggleClassEvent = (elementNode, className) => {
  const eventNode = elementNode.target;
  const colorListEl = document.getElementsByClassName('color');
  for (let index = 0; index < colorListEl.length; index += 1) {
    const el = colorListEl[index];
    if (el.classList.value.includes(className)) {
      el.classList.toggle(className);
    }
  }
  if (!eventNode.classList.value.includes(className)) {
    eventNode.classList.toggle(className);
  }
};

const randomColor = () => Math.round(Math.random() * 255);

const generateRandomColor = () => `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

const setColorsPalette = () => {
  const black = document.querySelector('.black');
  const color1 = document.querySelector('.color1');
  const color2 = document.querySelector('.color2');
  const color3 = document.querySelector('.color3');
  black.style.backgroundColor = 'black';
  color1.style.backgroundColor = generateRandomColor();
  color2.style.backgroundColor = generateRandomColor();
  color3.style.backgroundColor = generateRandomColor();
};

const checkBoardSizeLimite = (boardSize, min, max) => {
  let boardSizeResult = boardSize;
  if (boardSizeResult < min) {
    boardSizeResult = min;
  } else if (boardSizeResult > max) {
    boardSizeResult = max;
  }
  return boardSizeResult;
};

const resetBoard = () => {
  document.querySelector('#pixel-board').innerHTML = '';
};

const changeBackgroundColorPixels = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((element) => {
    element.style.backgroundColor = 'white';
  });
};

const configureEventsListeners = () => {
  addEvListenerNElements('.pixel', 'click', changeColorPixel);
};

const createBoard = (pixelBoard, boardSize) => {
  for (let index = 0; index < boardSize; index += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    
    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      const colum = document.createElement('div');
      colum.classList.add('pixel');
      line.appendChild(colum);
    }
    
    pixelBoard.appendChild(line);
  }
};

function createPixelBoard() {
  let boardSize = document.querySelector('#board-size');
  boardSize = boardSize.value;

  if (boardSize === '') {
    alert('Board inválido!');
    return;
  }

  boardSize = checkBoardSizeLimite(boardSize, 5, 50);
  const pixelBoard = document.querySelector('#pixel-board');

  resetBoard();
  createBoard(pixelBoard, boardSize);
  changeBackgroundColorPixels();
  configureEventsListeners();
}

window.onload = () => {
  setColorsPalette();
  toggleClassInit('.color', 'selected');
  changeBackgroundColorPixels();
  addEvListener('#clear-board', 'click', changeBackgroundColorPixels);
  addEvListener('#color-palette', 'click', (e) => { toggleClassEvent(e, 'selected'); });
  addEvListenerNElements('.pixel', 'click', changeColorPixel);
  addEvListener('#generate-board', 'click', createPixelBoard);
};
