const pixelBoard = document.querySelector('#pixel-board');
function createColorsPallete(amount) {
  const divColors = document.querySelector('#color-palette');
  for (let index = 1; index <= amount; index += 1) {
    const colors = document.createElement('div');
    colors.className = 'color';
    divColors.appendChild(colors);
  }
}
createColorsPallete(4);

function assignColors() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  for (let index = 1; index < colors.length; index += 1) {
    const colorRed = Math.floor(Math.random() * 255);
    const colorGreen = Math.floor(Math.random() * 255);
    const colorBlue = Math.floor(Math.random() * 255);
    colors[index].style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
    window.onload = colors[index].style.backgroundColor;
  }
}
assignColors();

function createPixelBox(amount = 5) {
  for (let index = 1; index <= amount; index += 1) {
    const boxes = document.createElement('div');
    pixelBoard.appendChild(boxes);
    for (let indexI = 1; indexI <= amount; indexI += 1) {
      const boxes1 = document.createElement('div');
      boxes1.className = 'pixel';
      boxes.appendChild(boxes1);
    }
  }
}
createPixelBox();

document.querySelectorAll('.color')[0].className += ' selected';

// Ajuda mútua, em especial ao Murilo Gonçalves, turma 10 - tribo A na explicação sobre event
function changeSelected() {
  const classSelected = document.querySelector('#color-palette');
  classSelected.addEventListener('click', (event) => {
    const classColor = event.target;
    const elementSelected = document.getElementsByClassName('selected');
    elementSelected[0].classList.remove('selected');
    classColor.classList.add('selected');
  });
}
changeSelected();

// Ajuda mútua, em especial ao Murilo Gonçalves, turma 10 - tribo A na explicação sobre event
function changeColorBox() {
  pixelBoard.addEventListener('click', (event) => {
    const boxPixel = event.target;
    if (boxPixel.className === 'pixel') {
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      boxPixel.style.backgroundColor = selectedColor;
    }
  });
}
changeColorBox();

function clearBoxes() {
  const buttonClear = document.getElementsByTagName('button')[0];
  buttonClear.id = 'clear-board';
  buttonClear.innerText = 'Limpar';
  buttonClear.addEventListener('click', () => {
    const clearColors = document.getElementsByClassName('pixel');
    for (let index = 0; index < clearColors.length; index += 1) {
      clearColors[index].style.backgroundColor = 'white';
    }
  });
}
clearBoxes();

// Ajuda mútua, em especial ao Lucas Godoi - turma 10 - tribo A na criação do if
function insertValueBoard() {
  const inputText = document.getElementsByTagName('input')[0];
  inputText.id = 'board-size';
  const buttonNumberPixel = document.querySelectorAll('button')[1];
  buttonNumberPixel.id = 'generate-board';
  buttonNumberPixel.innerText = 'VQV';
  buttonNumberPixel.addEventListener('click', () => {
    if (inputText.value === '') {
      alert('Board inválido!');
      inputText.value = 5;
    } else if (inputText.value > 50) {
      inputText.value = 50;
    } else if (inputText.value < 5) {
      inputText.value = 5;
    }
    pixelBoard.innerHTML = '';
    createPixelBox(inputText.value);
  });
}
insertValueBoard();
