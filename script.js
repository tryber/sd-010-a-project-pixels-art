function initiateColor() {
  // Para este requisito consultei os seguintes links:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  // https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map?gclid=Cj0KCQiA1pyCBhCtARIsAHaY_5cscwZQUJTOMnmG6B8naM2D5eFCmquk0s-168iGWrcyGy1gb6YSgEMaAmwpEALw_wcB
  const pixels = document.getElementsByClassName('pixel');
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white';
  });
}

function updatePixelSize() {
  const pixels = document.getElementsByClassName('pixel');
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.boxSizing = 'border-box';
  });
}

function updatePixelBorder() {
  const pixels = document.getElementsByClassName('pixel');
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.border = 'black solid 1px';
  });
}

function getDivColor() {
  // Para essa função contei com ajuda dos colegas: Felipe Muller e Andre Jacques via thread.
  // Também com a leitura do seguinte link:
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  const divSelected = document.querySelector('.selected');
  const divBackground = window.getComputedStyle(divSelected).getPropertyValue('background-color');
  return divBackground;
}

function colorPixels() {
  const pixels = document.getElementsByClassName('pixel');
  Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const element = event.target;
      element.style.backgroundColor = getDivColor();
    });
  });
}
// Para esse requisito contei com a ajuda do código do Iago Ferreira, para gerar as cores aleatórias e concatenar formando um rgb.
function generateDivColors() {
  let colorCreate = 'rgb(';
  colorCreate += Math.floor(Math.random() * 255);
  colorCreate += ', ';
  colorCreate += Math.floor(Math.random() * 255);
  colorCreate += ', ';
  colorCreate += Math.floor(Math.random() * 255);
  colorCreate += ')';
  return colorCreate;
}

function divReceiveColors() {
  const randomColors = ['black', generateDivColors(), generateDivColors(), generateDivColors()];
  const divColors = document.getElementsByClassName('color');
  for (let index = 0; index < Array.from(divColors).length; index += 1) {
    divColors[index].style.backgroundColor = randomColors[index];
  }
}

// Para criar o quadro via js contei com a ajuda do Luan Ramalho que dedicou seu tempo em uma call, explicando sua lógica.
function createBoard(lines, columns, destiny) {
  for (let index = 0; index < lines; index += 1) {
    const numberOfLines = document.createElement('tr');
    destiny.appendChild(numberOfLines);
    for (let indexColum = 0; indexColum < columns; indexColum += 1) {
      const numberOfColumns = document.createElement('td');
      numberOfLines.appendChild(numberOfColumns);
      numberOfColumns.className = 'pixel';
    }
  }
  updatePixelSize();
  updatePixelBorder();
  colorPixels();
  initiateColor();
  generateDivColors();
}

function generateBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const boardChooseSize = document.getElementById('generate-board');
  boardChooseSize.addEventListener('click', () => {
    const numberChoose = document.getElementById('board-size');
    let defineLinesAndColumns = Number(numberChoose.value);
    pixelBoard.innerHTML = '';
    if (defineLinesAndColumns <= 0 || defineLinesAndColumns === '') {
      alert('Board inválido!');
    }
    if (defineLinesAndColumns < 5) {
      defineLinesAndColumns = 5;
    }
    if (defineLinesAndColumns > 50) {
      defineLinesAndColumns = 50;
    }
    createBoard(defineLinesAndColumns, defineLinesAndColumns, pixelBoard);
  });
}

function createClassSelected() {
  const divSquares = document.querySelector('#color-palette');
  const blackSquare = divSquares.firstElementChild;
  blackSquare.classList.add('selected');
}

function removeAllSelected(list) {
  Array.from(list).forEach((div) => {
    div.classList.remove('selected');
  });
}

function changePlaceClassSelected() {
  const divSquares = document.getElementsByClassName('color');
  Array.from(divSquares).forEach((div) => {
    div.addEventListener('click', (event) => {
      removeAllSelected(divSquares);
      event.target.classList.add('selected');
    });
  });
}

function clickButton() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', initiateColor);
}

window.onload = function startSession() {
  const pixelBoard = document.querySelector('#pixel-board');

  createBoard(5, 5, pixelBoard);
  generateBoard();
  createClassSelected();
  changePlaceClassSelected();
  clickButton();
  divReceiveColors();
};
