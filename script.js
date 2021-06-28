const pixelTable = document.querySelector('#pixel-board');
const colorTable = document.querySelector('.colorPalette');
const changeSize = document.querySelector('#board-size');
const clearButton = document.querySelector('#clear-board');

let currentNumber = 5;

/* 4 - Adicione à página um quadro de pixels, com 25 pixels. */
function horizontalLine(line, numbers) {
  for (let index = 0; index < numbers; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
  currentNumber = numbers;
}

function pixelBox(numbers) {
  for (let index = 0; index < numbers; index += 1) {
    const pixelLine = document.createElement('div');
    horizontalLine(pixelLine, numbers);
    pixelLine.className = 'linePixel';
    pixelTable.appendChild(pixelLine);
  }
}

/* 6 - Defina a cor preta como cor inicial. Ao carregar a página a cor preta já deve estar selecionada para pintar os pixels */
window.onload = function start() {
  document.querySelector('#black').className += ' selected';
  document.querySelector('#black').style.backgroundColor = 'black';
};

/* 7 - Clicar em uma das cores da paleta, faz com que ela seja selecionada e utilizada para preencher os pixels no quadro. */
/* 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta, faz com que o pixel seja preenchido com a cor selecionada. */
function selectPixelColor(event) {
  const color = document.querySelector('.selected').style.backgroundColor;
  const ev = event;
  ev.target.style.backgroundColor = color;
}

function colorizePixels() {
  pixelTable.addEventListener('click', selectPixelColor);
}

function selectPalette(event) {
  const pad1 = document.querySelector('#black');
  pad1.className = 'color';
  const pad2 = document.querySelector('#green');
  pad2.className = 'color';
  const pad3 = document.querySelector('#yellow');
  pad3.className = 'color';
  const pad4 = document.querySelector('#blue');
  pad4.className = 'color';
  const eve = event;
  eve.target.className = 'color selected';
}

function setSelected() {
  colorTable.addEventListener('click', selectPalette);
}
/* 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco. */
function clearAll() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function eraseScreen() {
  clearButton.addEventListener('click', clearAll);
}

/* 11 - Limite o tamanho mínimo e máximo do board. */
function sizeBox() {
  let limitSize = parseInt(changeSize.value, 10);
  if (limitSize < 5) {
    limitSize = 5;
  } else if (limitSize > 50) {
    limitSize = 50;
  }
  pixelBox(limitSize);
}

/* 10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário. */
function squareBox() {
  if (changeSize.value === '') {
    alert('Board inválido!');
  } else {
    const childrenPixel = document.querySelectorAll('.linePixel');
    for (let index = 0; index < currentNumber; index += 1) {
      pixelTable.removeChild(childrenPixel[index]);
    }
    sizeBox();
  }
}

function tableSize() {
  const userSize = document.querySelector('#generate-board');
  userSize.addEventListener('click', squareBox);
}

/* 2 - Adicione à página uma paleta de quatro cores distintas. */
/* 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página. */
function randomPalette() {
  const red = Math.ceil(Math.random() * 256);
  const green = Math.ceil(Math.random() * 256);
  const blue = Math.ceil(Math.random() * 256);

  const rgb = `rgb(${red}, ${green}, ${blue})`;

  return rgb;
}

function selectColor() {
  document.querySelector('#black').style.backgroundColor = 'black';
  document.querySelector('#green').style.backgroundColor = randomPalette();
  document.querySelector('#yellow').style.backgroundColor = randomPalette();
  document.querySelector('#blue').style.backgroundColor = randomPalette();
}

pixelBox(5);
selectColor();
colorizePixels();
setSelected();
eraseScreen();
tableSize();
