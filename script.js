const paletteColors = document.getElementById('color-palette');

function changeClassColors(event) {
  const colorsDiv = document.getElementsByClassName('color');
  for (let index = 0; index < colorsDiv.length; index += 1) {
    colorsDiv[index].classList.remove('selected');
  }
  newcolorSelected = event.target.classList.add('selected');
}

paletteColors.addEventListener('click', changeClassColors);

const pixelBoard = document.getElementById('pixel-board');
function ChangeBackgroundColor(event) {
  document.getElementsByClassName('pixel');
  const selectedElement = document.getElementsByClassName('selected')[0];
  const colorToUse = selectedElement.style.backgroundColor;
  event.target.style.backgroundColor = colorToUse;
}

pixelBoard.addEventListener('click', ChangeBackgroundColor);

const button = document.querySelector('#clear-board');

function clearAll() {
  const pixels = document.querySelectorAll('td');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearAll);
