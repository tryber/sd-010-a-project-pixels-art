function genRandomColor() {
  const redValue = (Math.random() * 255).toFixed();
  const greenValue = (Math.random() * 255).toFixed();
  const blueValue = (Math.random() * 255).toFixed();

  return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function selectColor() {
  const listItemElements = document.getElementsByClassName('color');

  for (let index = 0; index < listItemElements.length; index += 1) {
    listItemElements[index].addEventListener('click', () => {
      for (
        let insideIndex = 0;
        insideIndex < listItemElements.length;
        insideIndex += 1
      ) {
        listItemElements[insideIndex].classList.remove('selected');
      }

      listItemElements[index].classList.add('selected');
    });
  }
}

function setBackground(element) {
  const pixelElement = element;
  const selectElement = document.getElementsByClassName('selected')[0];

  pixelElement.style.backgroundColor = selectElement.style.backgroundColor;

  return pixelElement;
}

function drawColor() {
  const pixelsListElements = document.getElementsByClassName('pixel');

  for (
    let elementIndex = 0;
    elementIndex < pixelsListElements.length;
    elementIndex += 1
  ) {
    const pixelElement = pixelsListElements[elementIndex];
    pixelElement.addEventListener('click', () => setBackground(pixelElement));
  }
}

function clearButton() {
  const buttonElement = document.getElementById('clear-board');
  const pixelBoardItems = document.getElementsByClassName('pixel');

  buttonElement.addEventListener('click', () => {
    for (let index = 0; index < pixelBoardItems.length; index += 1) {
      pixelBoardItems[index].style.backgroundColor = 'white';
    }
  });
}

function createPixel() {
  const pixelElement = document.createElement('li');
  pixelElement.className = 'pixel';
  pixelElement.addEventListener('click', () => setBackground(pixelElement));

  return pixelElement;
}

function verifyInputNumber(inputValue) {
  let value = inputValue;

  if (value > 50) {
    value = 50;
  } else if (value < 5) {
    value = 5;
  }

  return value;
}

function drawPixels(input) {
  const lineInput = input;
  if (!lineInput.value) {
    alert('Board inválido!');
    return;
  }
  const lineInputValue = verifyInputNumber(lineInput.value);
  const pixelBoardElement = document.getElementById('pixel-board');
  pixelBoardElement.innerHTML = '';
  for (let index = 0; index < lineInputValue; index += 1) {
    const lineContainer = document.createElement('div');
    lineContainer.className = 'line';
    for (let pixels = 0; pixels < lineInputValue; pixels += 1) {
      const pixelElement = createPixel();
      lineContainer.appendChild(pixelElement);
    }
    pixelBoardElement.appendChild(lineContainer);
  }
}

function drawPicture() {
  const generateBoardButton = document.getElementById('generate-board');
  const lineInput = document.getElementById('board-size');

  generateBoardButton.addEventListener('click', () => drawPixels(lineInput));
}

window.onload = () => {
  const randomColor1Element = document.getElementById('random-color-1');
  randomColor1Element.style.backgroundColor = genRandomColor();
  const randomColor2Element = document.getElementById('random-color-2');
  randomColor2Element.style.backgroundColor = genRandomColor();
  const randomColor3Element = document.getElementById('random-color-3');
  randomColor3Element.style.backgroundColor = genRandomColor();
  const blackBackgroundElement = document.getElementById('background-black');
  blackBackgroundElement.style.backgroundColor = 'rgb(0,0,0)';

  selectColor();
  drawColor();
  clearButton();
  drawPicture();
};
