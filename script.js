const colorPalette = document.getElementById('color-palette');
const pixelLines = document.getElementById('pixel-board');
const pixelSpaces = document.getElementsByClassName('lines');
const colorBlock = document.getElementsByClassName('color');
const choosenColor = document.getElementsByClassName('selected');
const pixelChoosen = document.getElementsByClassName('pixel');
const clearBoard = document.getElementById('clear-board');
const createBoard = document.getElementById('generate-board');
const size = document.getElementById('board-size');

function createPaletteBlocks() {
  for (let index = 0; index <= 3; index += 1) {
    const paletteBlocks = document.createElement('div');
    paletteBlocks.className = 'color';
    colorPalette.appendChild(paletteBlocks);
  }
}

createPaletteBlocks();

function blockColor() {
  const firstblock = colorBlock[0];
  firstblock.style.backgroundColor = 'black';
  firstblock.className = 'color selected';
  for (let index = 1; index < colorBlock.length; index += 1) {
    colorBlock[index].style.backgroundColor = (
      `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`);
  }
}

blockColor();

function pixelBoard() {
  for (let indexLine = 0; indexLine <= 4; indexLine += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'lines';
    pixelLines.appendChild(pixelLine);
    for (let index = 0; index <= 4; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelSpaces[indexLine].appendChild(pixel);
    }
  }
}

pixelBoard();

function erasePxBoard() {
  for (let indexLine = -pixelSpaces.length; indexLine < pixelSpaces.length; indexLine += 1) {
    pixelLines.firstChild.remove(pixelSpaces[indexLine]);
  }
}
function boardSize() {
  let totalSize = size.value;
  if (totalSize === '') {
    alert('Board inválido!');
  } else if (totalSize < 5) {
    totalSize = 5;
  } else if (totalSize > 50) {
    totalSize = 50;
  }
  return totalSize;
}

function newpixelBoard() {
  for (let indexLine = 0; indexLine <= boardSize() - 1; indexLine += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'lines';
    pixelLines.appendChild(pixelLine);
    for (let index = 0; index <= boardSize() - 1; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelSpaces[indexLine].appendChild(pixel);
    }
  }
}

createBoard.addEventListener('click', erasePxBoard);
createBoard.addEventListener('click', newpixelBoard);

function selectPixel(colorChoose) {
  const colorTarget = colorChoose;
  let colorClass = colorTarget.target.className;
  if (colorClass.indexOf('selected') > 0 && colorClass.indexOf('color') > 0) {
    colorClass = 'color selected';
  } else {
    for (let index = 0; index < colorBlock.length; index += 1) {
      colorBlock[index].className = 'color';
    }
    colorTarget.target.className += ' selected';
  }
}

colorPalette.addEventListener('click', selectPixel);

function paintPixels(pixelChoise) {
  const pixelIChoose = pixelChoise;
  const colorToPixel = choosenColor[0].style.backgroundColor;
  pixelIChoose.target.style.backgroundColor = colorToPixel;
}

function paint() {
  for (let indexPix = 0; indexPix < pixelChoosen.length; indexPix += 1) {
    pixelChoosen[indexPix].addEventListener('click', paintPixels);
  }
}

paint();

function clear() {
  for (let indexPix = 0; indexPix < pixelChoosen.length; indexPix += 1) {
    pixelChoosen[indexPix].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', clear);
