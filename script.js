// Exercício feito com a ajuda do Maurício Viegas
// Link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1615335717341100
function createPixBox(size) {
  const getPixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < size; index += 1) {
    const pixelLinha = document.createElement('tr');
    pixelLinha.className = 'linha';

    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixelColuna = document.createElement('th');
      pixelColuna.className = 'pixel';
      pixelLinha.appendChild(pixelColuna);
      getPixelBoard.appendChild(pixelLinha);
    }
  }
}
createPixBox(5);

// Exercício feito com a ajuda do código do Rodrigo Queiroz
// Link: https://github.com/tryber/sd-010-a-project-pixels-art/blob/c8502885771f31176e2a4d4419f55ea00a60e36b/script.js
function eventChangingColorsPalette() {
  let getClassSelected = document.getElementsByClassName('selected')[0];
  let colorBlack = document.getElementsByClassName('color')[0];
  let colorRed = document.getElementsByClassName('color')[1];
  let colorBlue = document.getElementsByClassName('color')[2];
  let colorGreen = document.getElementsByClassName('color')[3];

  colorBlack.addEventListener('click', () => {
    getClassSelected = document.getElementsByClassName('selected')[0];
    getClassSelected.classList.remove('selected');
    colorBlack.classList.add('selected');
  });
  colorRed.addEventListener('click', () => {
    getClassSelected = document.getElementsByClassName('selected')[0];
    getClassSelected.classList.remove('selected');
    colorRed.classList.add('selected');
  });
  colorBlue.addEventListener('click', () => {
    getClassSelected = document.getElementsByClassName('selected')[0];
    getClassSelected.classList.remove('selected');
    colorBlue.classList.add('selected');
  });
  colorGreen.addEventListener('click', () => {
    getClassSelected = document.getElementsByClassName('selected')[0];
    getClassSelected.classList.remove('selected');
    colorGreen.classList.add('selected');
  });
}
eventChangingColorsPalette();

// Exercício feito com a ajuda do código do Rodrigo Queiroz
// Link: https://github.com/tryber/sd-010-a-project-pixels-art/blob/837d089ec94cbc9a9cbb9132f92a142476b27442/script.js
// Window.getComputedStyle = retorna um objeto contendo os valores de todas as propriedades Css de um elemento
function PaintingPixel(event) {
  const getClassSelected = document.getElementsByClassName('selected')[0];
  const eventTarget = event.target;
  let setColorPixel;
  setColorPixel = window.getComputedStyle(getClassSelected).getPropertyValue('background-color');
  eventTarget.style.backgroundColor = setColorPixel;
}

// Exercício feito com a ajuda do código do Rodrigo Queiroz
// Link: https://github.com/tryber/sd-010-a-project-pixels-art/blob/837d089ec94cbc9a9cbb9132f92a142476b27442/script.js
function eventpaintingPixel() {
  const getPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].addEventListener('click', PaintingPixel);
  }
}
eventpaintingPixel();
// Exercício feito com a ajuda do código de Rodrigo Queiroz
// Link: https://github.com/tryber/sd-010-a-project-pixels-art/blob/837d089ec94cbc9a9cbb9132f92a142476b27442/script.js
function clearColors() {
  const getBtn = document.querySelector('#clear-board');
  const getPixel = document.querySelectorAll('.pixel');

  getBtn.addEventListener('click', () => {
    for (let index = 0; index < getPixel.length; index += 1) {
      getPixel[index].style.backgroundColor = 'white';
    }
  });
}
clearColors();
