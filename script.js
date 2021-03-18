function createPalette() {
  const paletteItems = ['black', 'blue', 'yellow', 'green'];
  const getPalette = document.getElementById('color-palette');

  for (let index = 0; index < paletteItems.length; index += 1) {
    const cellPalette = document.createElement('div');

    cellPalette.className = 'color';
    cellPalette.style.backgroundColor = paletteItems[index];
    cellPalette.style.display = 'inline-block';

    getPalette.appendChild(cellPalette);
  }
}

createPalette();

function createPixel() {
  const getLines = document.getElementById('pixel-board').childNodes;
  for (let index = 0; index < getLines.length; index += 1) {
    const getTr = getLines[index];
    for (let i = 0; i < getLines.length; i += 1) {
      const createCell = document.createElement('div');
      createCell.className = 'pixel';

      getTr.appendChild(createCell);
    }
  }
}

function createBoard() {
  const getBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const divTr = document.createElement('div');
    divTr.className += ' div-tr';
    getBoard.appendChild(divTr);    
  }

  createPixel();
}

createBoard();

window.onload = jsLoaded

function jsLoaded() {
  const getPalette = document.getElementById('color-palette').children
  
  function addClickPalette() {
    
    for (let index = 0; index < getPalette.length; index += 1) {
      getPalette[index].addEventListener('click', pickColor)
    }
  }

  addClickPalette()

  function pickColor() {
    for(let index = 0; index < getPalette.length; index += 1) {
      getPalette[index].className = 'color'
    }
    this.className += ' selected'
  }

  function initialColor() {
    getPalette[0].className += ' selected'
  }
  
  initialColor()
  
  const getPixel = document.getElementsByClassName('pixel');

  function addClick() {
    for (let index = 0; index < getPixel.length; index += 1) {
      const onePixel = getPixel[index];
      onePixel.addEventListener("click", paintPixel);
    } 
  }

  addClick();

  function paintPixel() {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    this.style.backgroundColor = selectedColor;
  }
}
