// Esta página pode ser vista na url https://rogerio-lambert.github.io/javaScript-DOM/pixel-art/pixel-art.html
// Bloco de declaração de variáveis
// const palette = document.getElementById('color-palette');
const colorsOfPalette = document.getElementsByClassName('color');
const pixelBord = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');
const sizeValue = document.getElementById('board-size');
const buttonResize = document.getElementById('generate-board');
let size = sizeValue.value;
let colorSelected = document.querySelector('.selected');

// Bloco de declaração de funções

function generateRgbColor() {
  const num = [];
  for (let index = 0; index < 3; index += 1) {
    num.push(Math.round(Math.random() * 255));
  }
  return `rgb(${num[0]}, ${num[1]}, ${num[2]})`;
}

function montPalette() {
  colorsOfPalette[0].style.backgroundColor = 'rgb(0, 0, 0)';
  for (let color = 1; color < colorsOfPalette.length; color += 1) {
    colorsOfPalette[color].style.backgroundColor = generateRgbColor();
  }
}

function selectColor(event) {
  if (event.target !== colorSelected) {
    colorSelected.className = 'color';
    colorSelected = event.target;
    colorSelected.className = 'color selected';
  }
}

function colorPixel(event) {
  if (event.target.style.backgroundColor !== colorSelected.style.backgroundColor) {
    const pixelToBeColored = event.target;
    pixelToBeColored.style.backgroundColor = colorSelected.style.backgroundColor;
  }
}

function clearBoard() {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

function sizeIsValid(test) {
  let result = true;
  if (test === '') {
    alert('Board inválido!');
    result = false;
  }
  if (test < 5) {
    // alert('O tamanho mínimo do desenho é 5x5 pixels');
    size = 5;
  }
  if (test > 50) {
    // alert('O tamanho máximo do desenho é 50x50 pixels');
    size = 50;
  }
  return result;
}

function createLineBoard(sizeLine) {
  const pixelLine = document.createElement('tr');
  for (let index2 = 0; index2 < sizeLine; index2 += 1) {
    const newPixel = document.createElement('td');
    newPixel.className = 'pixel';
    newPixel.addEventListener('click', colorPixel);
    newPixel.style.backgroundColor = '#ffffff';
    pixelLine.appendChild(newPixel);
  }
  return pixelLine;
}
function resizePixelBoard() {
  size = sizeValue.value;
  if (sizeIsValid(size)) {
    sizeValue.value = size;
    pixelBord.innerHTML = '';
    for (let index1 = 0; index1 < size; index1 += 1) {
      const newPixelLine = createLineBoard(size);
      pixelBord.appendChild(newPixelLine);
    }
  }
}

// Bloco de ações de inicialização do código

montPalette();

// bloco de carregamento do escutadores de eventos

for (let color = 0; color < colorsOfPalette.length; color += 1) {
  colorsOfPalette[color].addEventListener('click', selectColor);
}

for (let pixel = 0; pixel < pixels.length; pixel += 1) {
  pixels[pixel].addEventListener('click', colorPixel);
}

buttonClear.addEventListener('click', clearBoard);

buttonResize.addEventListener('click', resizePixelBoard);
