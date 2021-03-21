const pixelID = 'pixel-board';
function createPalettes(num) {
  for (let index = 0; index < num; index += 1) {
    const palettes = document.createElement('div');
    const allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettes);
    palettes.className = 'color';
  }
}
createPalettes(4);

function paletteColor() {
  const pColor = document.getElementsByClassName('color');
  pColor[0].style.backgroundColor = 'black';
  pColor[1].style.backgroundColor = 'green';
  pColor[2].style.backgroundColor = 'yellow';
  pColor[3].style.backgroundColor = 'blue';
  pColor[0].classList.add('selected');
}
paletteColor();

function createPixels(size) {
  const pixelBox = document.getElementById(pixelID);
  for (let index = 0; index < size; index += 1) {
    const pixelC = document.createElement('div');
    pixelBox.appendChild(pixelC);
    for (let indexx = 0; indexx < size; indexx += 1) {
      const pixelL = document.createElement('div');
      pixelC.appendChild(pixelL);
      pixelL.className = 'pixel';
    }
  }
}

createPixels(5);
function colorClick() {
  const colorClicking = document.getElementById('color-palette');
  colorClicking.addEventListener('click', (e) => {
    const target1 = e.target;
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (target1.className === 'color') {
        target1.classList.add('selected');
      }
    }
  });
}
colorClick();

function painting() {
  const board = document.getElementById(pixelID);
  board.addEventListener('click', (e) => {
    const target1 = e.target;
    const targets = document.querySelector('.selected');
    if (target1.className === 'pixel') {
      target1.style.backgroundColor = targets.style.backgroundColor;
    }
  });
}
painting();

function clearBtn() {
  const btnReset = document.createElement('button');
  const userInterface = document.getElementById('userPainel');
  userInterface.appendChild(btnReset);
  btnReset.innerText = 'Limpar';
  btnReset.id = 'clear-board';
  btnReset.addEventListener('click', () => {
    const color = document.getElementsByClassName('pixel');
    for (let index = 0; index < color.length; index += 1) {
      color[index].style.backgroundColor = 'white';
    }
  });
}

clearBtn();

function resetBtn() {
  const input = document.getElementById('board-size');
  const rstBtn = document.getElementById('generate-board');
  rstBtn.addEventListener('click', () => {
    const pixelBoard = document.getElementById(pixelID);
    if (input.value === '') {
      alert('Board inválido!');
      input.value = 5;
    } else if (input.value < 5) {
      input.value = 5;
    } else if (input.value > 50) {
      input.value = 50;
    }
    pixelBoard.innerHTML = '';
    createPixels(input.value);
  });
}
resetBtn();

function randomPalettes() {
  const color = document.getElementsByClassName('color');
  for (let index = 1; index < color.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    color[index].style.backgroundColor = rgb;
  }
}
randomPalettes();
