const begin = document.querySelector('#black');
/* Esse requisito foi feito com o auxilio deste site : https://stackoverflow.com/posts/23095771/revisions */
function setbkColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const secondColor = `rgb(${r},${g},${b})`;
  const thirdColor = `rgb(${g},${b},${r})`;
  const fourthColor = `rgb(${b},${r},${g})`;
  const colorsBlock = document.querySelectorAll('.color');
  const bkColor = ['black', secondColor, thirdColor, fourthColor];
  for (let index = 0; index < colorsBlock.length; index += 1) {
    const color = bkColor[index];
    colorsBlock[index].style.backgroundColor = color;
  }
  return colorsBlock;
}
setbkColor();
function board() {
  const line = document.querySelectorAll('.line');
  for (let index = 0; index < line.length; index += 1) {
    for (let indexToo = 0; indexToo < line.length; indexToo += 1) {
      const pixels = document.createElement('div');
      pixels.setAttribute('class', 'pixel');
      line[index].appendChild(pixels);
    }
  }
  begin.classList.add('selected');

  const pix = document.querySelectorAll('.pixel');
  for (let index = 0; index < pix.length; index += 1) {
    pix[index].addEventListener('click', (element) => { // function toBoard
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      const selectedP = element.target;
      selectedP.style.backgroundColor = selectedColor;
    });
  }
}
board();
/* const pBoard = document.querySelector('#pixel-board');
pBoard.addEventListener('click', function toBoard(element) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const selectedP = element.target;
  selectedP.style.backgroundColor = selectedColor;
}); */

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', (element) => { // function selectedInPalette
  const newSelected = element.target;
  const inSelected = document.querySelector('.selected');
  inSelected.classList.remove('selected');
  newSelected.classList.add('selected');
});

const pix = document.querySelectorAll('.pixel');
const limpar = document.querySelector('#clear-board');
limpar.addEventListener('click', () => { // function clear
  for (let index = 0; index < pix.length; index += 1) {
    pix[index].style.backgroundColor = 'white';
  }
});

const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', () => {
  const line = document.querySelectorAll('.line');
  let elementOne = document.querySelector('#board-size').value;
  const ppai = document.querySelector('#pixel-board');
  if (elementOne === '') {
    alert('Board inválido!');
    elementOne = 5;
  } else if (elementOne < 5) {
    elementOne = 5;
  } else if (elementOne > 50) {
    elementOne = 50;
  }
  for (let index = 0; index < line.length; index += 1) {
    document.querySelector('#pixel-board').removeChild(line[index]);
  }
  for (let index = 0; index < elementOne; index += 1) {
    const pixEl = document.createElement('div');
    pixEl.classList.add('line');
    ppai.appendChild(pixEl);
  }
  board();
  const newPix = document.querySelectorAll('.pixel');
  const newLimpar = document.querySelector('#clear-board');
  newLimpar.addEventListener('click', () => { // function clear
    for (let index = 0; index < newPix.length; index += 1) {
      newPix[index].style.backgroundColor = 'white';
    }
  });
});
