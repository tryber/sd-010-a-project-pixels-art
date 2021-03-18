function createColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

function setColors() {
  const getDivs = document.getElementsByClassName('color');
  for (let index = 0; index < getDivs.length; index += 1) {
    getDivs[index].style.backgroundColor = createColor();
    if (getDivs[index] === getDivs[0]) {
      getDivs[index].style.backgroundColor = 'black';
    }
  }
}
// Requisito 4
// Recupera meu elemento Pai do HTML ok
// Criar elementos de coluna ok
// Criar elementos de linha ok
function createElementsTable(number) {
  const pixelBoard = document.querySelector('#pixel-board');
  // Setar cada elemento como filho de outro elemento ok
  for (let index = 0; index < number; index += 1) {
    const row = document.createElement('tr');
    pixelBoard.appendChild(row);
    // Setar cada elemento como filho de outro elemento ok
    for (let index2 = 0; index2 < number; index2 += 1) {
      const colum = document.createElement('td');
      // Da uma class ao elememto ok
      colum.className = 'pixel';
      row.appendChild(colum);
    }
  }
  // Dar um retorno pra minha função ok
  return pixelBoard;
}

// Requisito 7
//  7. Recuperar meu elemento com a class color (selected)
function getColor(event) {
  const color = document.querySelectorAll('.color');
  // Remover a class selected do elemento atual e
  for (let index = 0; index < color.length; index += 1) {
    if (color[index].className === 'color selected') {
      color[index].classList.remove('selected');
    }
  }
  // Adicionar a class selected ao clicar em outro elemento;
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
  }
}
// Requisito 8;
// recuperar a cor de fundo dos elementos com class selected;
function getBgColor() {
  const bGColorSelected = document.querySelector('.selected');
  return bGColorSelected.style.backgroundColor;
}
// 8. recuperar os elementos que serão pintados;
function changeBGColor(event) {
  if (event.target.className === 'pixel') {
    const eventTarget = event.target;
    eventTarget.style.backgroundColor = getBgColor();
  }
}
// Requisito 9;
// Ao clicar no botão o quadro de pixels e totalmente prenchido de branco
function getButton() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
}
// 10. O input só deve aceitar nº >0 retrição deve ser feita nos atributos do input
// 10. Se nenhum valor for colocado mostrar o alert "Board inválido!"
// 10. A cor deve ser branca

function createPixelBoard() {
  const inputPixelBoard = document.querySelector('#board-size');
  const table = document.querySelector('table');
  if (inputPixelBoard.value === '') {
    alert('Board inválido!');
  } if (inputPixelBoard.value < 5) {
    inputPixelBoard.value = 5;
  } if (inputPixelBoard.value > 50) {
    inputPixelBoard.value = 50;
  } else {
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
    createElementsTable(inputPixelBoard.value);
    inputPixelBoard.value = '';
  }
}

function managerEvents() {
  //  7. Recuperar o elemento  pai da class selected
  const colorPalette = document.querySelector('#color-palette');
  // 8. Recupera o elemento pai os pixels
  const pixelBoard = document.querySelector('#pixel-board');
  // 9. Recupera o id clear-board do button
  const buttonClearBoard = document.querySelector('#clear-board');
  // 10 . Recupera o id generate-board do button
  const buttonGenerateBoard = document.querySelector('#generate-board');
  // 7. Adiciona um evento de click (Adicionar a class selected ao clicar em outro elemento);
  colorPalette.addEventListener('click', getColor);
  // Requisito 8
  colorPalette.addEventListener('click', getBgColor);
  pixelBoard.addEventListener('click', changeBGColor);
  // 9. Adiciona evento no button com id pixel-board
  buttonClearBoard.addEventListener('click', getButton);
  // 10. Adiciona evento no button com di generate-board
  buttonGenerateBoard.addEventListener('click', createPixelBoard);
}

// Chamar minhas funções:
window.onload = function start() {
  setColors();
  createElementsTable(5);
  managerEvents();
};
