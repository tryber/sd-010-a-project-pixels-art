function setPalette(color1, color2, color3) {
  const getPalette = document.getElementsByClassName('color');
  getPalette[0].style.backgroundColor = 'black';
  getPalette[0].className = 'color selected';
  getPalette[1].style.backgroundColor = color1;
  getPalette[2].style.backgroundColor = color2;
  getPalette[3].style.backgroundColor = color3;
}

setPalette('red', 'green', 'blue');

function createCanvas(tableSize) {
  const getTable = document.getElementById('pixel-board');
  for (let index = 0; index < tableSize; index += 1) {
    const createRow = document.createElement('tr');
    getTable.appendChild(createRow);
    for (let columnIndex = 0; columnIndex < tableSize; columnIndex += 1) {
      const createColumn = document.createElement('td');
      createRow.appendChild(createColumn);
      createColumn.className = 'pixel';
    }
  }
}

createCanvas(5);

//  Código desta função foi feito usando a função feita pelo Patrick Morais como referência(https://github.com/tryber/sd-010-a-project-pixels-art/pull/12/files).
function listenColorSelection() {
  const getPalette = document.getElementById('color-palette');
  getPalette.addEventListener('click', function toggleSelect(event) {
    const getColors = document.getElementsByClassName('color');
    for (let index = 0; index < getColors.length; index += 1) {
      getColors[index].classList.remove('selected');
      getPalette.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

listenColorSelection();

function addSelectedColorToCanvas() {
  const getPixel = document.getElementById('pixel-board');
  getPixel.addEventListener('click', function applyColor(event) {
    const getColor = document.querySelector('.color.selected').style.backgroundColor;
    const originalPixelColor = 'white';
    if (event.target.style.backgroundColor === getColor) {
      event.target.style.backgroundColor = originalPixelColor;
    } else {
      event.target.style.backgroundColor = getColor;
    }
  });
}

addSelectedColorToCanvas();

function clearCanvas() {
  const getBtn = document.getElementById('clear-board');
  const getPixels = document.getElementsByClassName('pixel');
  getBtn.addEventListener('click', function clearAll() {
    for (let index = 0; index < getPixels.length; index += 1) {
      getPixels[index].style.backgroundColor = 'white';
    }
  });
}

clearCanvas();
