// Selecina os elementos da paleta de cor, cria um EventListener de "Click" pra cada uma deles, e chama a função "addSelected" que remove a class "selected" de todos elementos, e em seguida adiciona a mesma classe somente no elemento clicado
const colorSelector = document.querySelectorAll('.color');

function addSelected(event) {
  for (let i = 0; i < colorSelector.length; i += 1) {
    colorSelector[i].classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}

for (let index = 0; index < colorSelector.length; index += 1) {
  colorSelector[index].addEventListener('click', addSelected);
}

// Seleciona as paletas de cores individualmente e todos os quadrados brancos, depois cria um event listener de click com uma função que é chamada ao clicar em cima de cada pixel individualmente, e que quando chamada, remove todas cores do pixel e adiciona a cor referente a que tem a class "selected"

const selectPixels = document.querySelectorAll('.pixel');

const selectBlack = document.querySelector('.black');
const selectPurple = document.querySelector('.purple');
const selectGreen = document.querySelector('.lightgreen');
const selectPink = document.querySelector('.pink');

function addColor(event) {
  for (let i = 0; i < colorSelector.length; i += 1) {
    event.currentTarget.classList.remove(
      'white',
      'black',
      'purple',
      'lightgreen',
      'pink'
    );

    if (selectBlack.classList.contains('selected')) {
      event.currentTarget.classList.add('black');
    }

    if (selectPurple.classList.contains('selected')) {
      event.currentTarget.classList.add('purple');
    }
    if (selectGreen.classList.contains('selected')) {
      event.currentTarget.classList.add('lightgreen');
    }

    if (selectPink.classList.contains('selected')) {
      event.currentTarget.classList.add('pink');
    }
  }
}

for (let i = 0; i < selectPixels.length; i += 1) {
  selectPixels[i].addEventListener('click', addColor);
}

const selectBoardSize = document.querySelector('#board-size');
const generateBoardSelector = document.querySelector('#generate-board');

generateBoardSelector.addEventListener('click', valueInput);

function valueInput() {
  if (selectBoardSize.value < 0 || selectBoardSize.value === '') {
    alert('Board inválido!');
    selectBoardSize.value = 5;
  }

  if (selectBoardSize.value < 5) {
    selectBoardSize.value = 5;
  }

  if (selectBoardSize.value > 50) {
    selectBoardSize.value = 50;
  }

  return selectBoardSize.value;
}

const selectTr = document.querySelectorAll('.tr');
const pixelBoard = document.querySelector('#pixel-board');

function createBoard() {
  pixelBoard.innerHTML = '';

  for (let i = 0; i < selectBoardSize.value; i += 1) {
    const createTr = document.createElement('div');
    createTr.className = 'tr';
    pixelBoard.appendChild(createTr);

    for (let j = 0; j < selectBoardSize.value; j += 1) {
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel white';

      createTr.appendChild(createPixel);
    }
  }
  const selectPixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < selectPixels.length; i += 1) {
    selectPixels[i].addEventListener('click', addColor);
  }
}

generateBoardSelector.addEventListener('click', createBoard);

const button = document.querySelector('#clear-board');
let selectPixelsAgain = document.querySelectorAll('.pixel');

function removeColors() {
  for (let i = 0; i < selectPixelsAgain.length; i += 1) {
    selectPixelsAgain[i].classList.remove(
      'black',
      'purple',
      'lightgreen',
      'pink'
    );
    selectPixelsAgain[i].classList.add('white');
  }
}

button.addEventListener('click', removeColors);
