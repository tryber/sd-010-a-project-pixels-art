function paletteBox() {
  const colors = ['black', 'blue', 'green', 'yellow'];
  const paletteSelect = document.getElementById('color-palette');
  for (let index = 0; index < colors.length; index += 1) {
    const paletteCreator = document.createElement('div');
    paletteCreator.style.background = colors[index];
    paletteSelect.appendChild(paletteCreator).className = 'color';
  }
}
paletteBox();

function accessElement(tagId, elementType, position) {
  const access = document.querySelectorAll(tagId);
  const create = document.createElement(elementType);
  const print = access[position].appendChild(create);
  return print;
}

for (let index = 0; index < 5; index += 1) {
  accessElement('#pixel-board', 'tr', 0).classList.add('tr');
}
for (let index = 0; index < 5; index += 1) {
  for (let index2 = 0; index2 < 5; index2 += 1) {
    accessElement('.tr', 'td', index).classList.add('td', 'pixel');
  }
}

const initialColor = document.querySelector('div').classList.add('selected', 'color');
const colorsSelect = document.getElementsByClassName('color');

function selectColor(eventoDeOrigem) {
  const elementSelected = document.getElementsByClassName('selected');
  elementSelected[0].classList.remove('selected');
  eventoDeOrigem.target.classList.add('selected');
}

for (let indexColors = 0; indexColors < colorsSelect.length; indexColors += 1) {
  colorsSelect[indexColors].addEventListener('click', selectColor);
}

function paintColor(toPaint) {
  const colorUsing = document.getElementsByClassName('selected');
  const saveSpecifcStyle = window.getComputedStyle(colorUsing[0]);// *
  const backgroundColor = saveSpecifcStyle.getPropertyValue('background');// *
  toPaint.target.style.background = backgroundColor;
  // FONTE: https://stackoverflow.com/questions/6338217/get-a-css-value-with-javascript
}

const boxToPaint = document.getElementsByClassName('pixel');
for (let index8 = 0; index8 < boxToPaint.length; index8 += 1) {
  boxToPaint[index8].addEventListener('click', paintColor);
}

const pixels = document.getElementsByClassName('pixel');
function paintOfWhite() {
  for (let index9 = 0; index9 < pixels.length; index9 += 1) {
    pixels[index9].style.background = 'white';
  }
}
const restarButton = document.getElementById('clear-board');
restarButton.addEventListener('click', paintOfWhite);
