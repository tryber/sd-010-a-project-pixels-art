const numberOfLines = 5;
const numberOfColumns = 5;

const fixedPalette = () => {
  const palette = document.getElementById('color-1');
  palette.style.backgroundColor = 'black';
};

const generateRandomRGB = () => {
  const r = Math.floor(Math.random() * (255));
  const g = Math.floor(Math.random() * (255));
  const b = Math.floor(Math.random() * (255));
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
};

const eventClickPixel = () => {
  document.querySelectorAll('.pixel').forEach((element) => {
    element.addEventListener('click', (elementTarget) => {
      const pixelElement = elementTarget.target;
      const colorPalette = document.getElementsByClassName('selected')[0].style.backgroundColor;
      if (pixelElement.style.backgroundColor === colorPalette) {
        pixelElement.style.backgroundColor = 'white';
      } else {
        pixelElement.style.backgroundColor = colorPalette;
      }
    });
  });
};

const generateColorPalette = () => {
  const palettes = document.querySelectorAll('.color');
  palettes.forEach((e) => {
    e.style.backgroundColor = generateRandomRGB();
  });
};

const createPixel = (numberOfColumnsCP, lineElement) => {
  for (let index = 0; index < numberOfColumnsCP; index += 1) {
    const divElementPixel = document.createElement('div');
    divElementPixel.className = 'pixel';

    lineElement.appendChild(divElementPixel);
  }
};

const createBoard = (numberOfLinesCB, numberOfColumnsCB) => {
  for (let index = 0; index < numberOfLinesCB; index += 1) {
    const lineElement = document.createElement('div');
    lineElement.className = 'pixel-line';

    createPixel(numberOfColumnsCB, lineElement);

    document.getElementById('pixel-board').appendChild(lineElement);
  }
};

const paletteColor = () => {
  document.querySelectorAll('.color').forEach((element) => {
    element.addEventListener('click', (elementTarget) => {
      const pixelElement = elementTarget;
      const pixels = document.querySelectorAll('.color');

      pixels.forEach((e) => {
        if (e.classList.contains('selected')) {
          e.classList.remove('selected');
        }
      });

      pixelElement.target.classList.add('selected');
    });
  });
};

const btnClear = () => {
  document.getElementById('clear-board').addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
};

const btnSize = () => {
  document.getElementById('generate-board').addEventListener('click', () => {
    const pixelBoard = document.getElementById('pixel-board');
    const inputNumber = document.getElementById('board-size');
    let inputNumberValue = inputNumber.value;

    pixelBoard.innerHTML = '';

    if (inputNumberValue === '') window.alert('Board inválido!');

    if (inputNumberValue < 5) inputNumberValue = 5;
    else if (inputNumberValue > 50) inputNumberValue = 50;

    createBoard(inputNumberValue, inputNumberValue);
    eventClickPixel();
  });
};

createBoard(numberOfLines, numberOfColumns);
generateColorPalette();
paletteColor();
fixedPalette();
eventClickPixel();
btnClear();
btnSize();

/*
REFERÊNCIAS UTILIZADAS:
https://www.w3schools.com/jsref/met_document_addeventlistener.asp
https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript?page=1&tab=votes#tab-top
https://stackoverflow.com/questions/19886843/how-to-remove-outline-border-from-input-button
https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
https://stackoverflow.com/questions/60333963/elements-style-backgroundcolor-returns-undefined
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input
*/
