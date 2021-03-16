function colorDeselect() {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
}

function colorSelect(event) {
  colorDeselect();
  event.target.classList.add('selected');
}

function generateRandomColors() {
  const colorList = [];

  for (let index = 0; index < 3; index += 1) {
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorList.push(`#${randomColor}`);
  }
  return colorList;
}

function colorPalette() {
  const black = ['black'];
  const colors = black.concat(generateRandomColors());
  const colorsFather = document.querySelector('#color-palette');

  for (let index = 0; index < colors.length; index += 1) {
    const elementColor = document.createElement('li');

    elementColor.classList.add('color');
    if (index === 0) {
      elementColor.classList.add('selected');
    }
    // Usei uma das dicas como base para minha lógica
    elementColor.addEventListener('click', colorSelect);
    elementColor.style.backgroundColor = `${colors[index]}`;
    colorsFather.appendChild(elementColor);
  }
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.style.backgroundColor = 'white';
  }
}

function disableButton(event) {
  const clearBoardButton = event.target;

  clearBoardButton.disabled = true;
  clearBoardButton.classList.add('disabled');
  clearBoard();
}

function pixelColor(event) {
  const element = event.target;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const clearBoardButton = document.querySelector('#clear-board');

  clearBoardButton.disabled = false;
  clearBoardButton.classList.remove('disabled');
  clearBoardButton.addEventListener('click', disableButton);
  element.style.backgroundColor = selectedColor;
}

function pixelBoard(number) {
  const pixelsFather = document.querySelector('#pixel-board');
  const resizeInput = document.querySelector('#board-size');

  for (let index = 0; index < number; index += 1) {
    const pixelRow = document.createElement('tr');

    for (let column = 0; column < number; column += 1) {
      const pixelColumn = document.createElement('td');

      pixelColumn.addEventListener('click', pixelColor);
      pixelColumn.classList.add('pixel');
      pixelRow.appendChild(pixelColumn);
    }
    resizeInput.value = '';
    pixelsFather.appendChild(pixelRow);
  }
}

// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function previusBoardRemove() {
  const board = document.querySelector('#pixel-board');
  board.innerHTML = '';
}

function resizeValidation() {
  const number = document.querySelector('#board-size');

  if (!number.value) {
    return alert('Board inválido!');
  } if (number.value < 5) {
    number.value = 5;
    number.placeholder = 'Between 5 and 50';
  } else if (number.value > 50) {
    number.value = 50;
    number.placeholder = 'Between 5 and 50';
  }

  previusBoardRemove();
  pixelBoard(number.value);
}

function pixelResize() {
  const resizeButton = document.querySelector('#generate-board');

  resizeButton.addEventListener('click', resizeValidation);
}

// https://stackoverflow.com/questions/16683176/add-two-functions-to-window-onload
window.onload = () => {
  colorPalette();
  pixelBoard(5);
  pixelResize();
};
