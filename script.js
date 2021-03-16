const colorsList = [];

function preSelectBlack() {
  colorsList[0].classList.add('selected');
}

window.onload = preSelectBlack;

for (let index = 0; index < 4; index += 1) {
  colorsList.push('');
  colorsList[index] = document.createElement('div');
  colorsList[index].classList.add('color');
  document.querySelector('#color-palette').appendChild(colorsList[index]);
}

const firstColor = document.getElementsByClassName('color')[0];
const secondColor = document.getElementsByClassName('color')[1];
const thirdColor = document.getElementsByClassName('color')[2];
const fourthColor = document.getElementsByClassName('color')[3];
firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'green';
thirdColor.style.backgroundColor = 'red';
fourthColor.style.backgroundColor = 'blue';

const pixelBoard = [];
for (let index = 0; index < 25; index += 1) {
  pixelBoard.push('');
  pixelBoard[index] = document.createElement('div');
  pixelBoard[index].classList.add('pixel');
  document.querySelector('#pixel-board').appendChild(pixelBoard[index]);
}

const clickFirstColor = firstColor;
const clickSecondColor = secondColor;
const clickThirdColor = thirdColor;
const clickFourthColor = fourthColor;

function pickFirstColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickFirstColor.classList.add('selected');
}

function pickSecondColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickSecondColor.classList.add('selected');
}

function pickThirdColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickThirdColor.classList.add('selected');
}

function pickFourthColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickFourthColor.classList.add('selected');
}

clickFirstColor.addEventListener('click', pickFirstColor);
clickSecondColor.addEventListener('click', pickSecondColor);
clickThirdColor.addEventListener('click', pickThirdColor);
clickFourthColor.addEventListener('click', pickFourthColor);

const pixels = [];

function grabColor(fill) {
  const pickedColor = document.querySelector('.selected').style.backgroundColor;
  const pixelBg = fill.target;
  pixelBg.style.backgroundColor = pickedColor;
}

for (let index = 0; index < pixelBoard.length; index += 1) {
  pixels.push('');
  pixels[index] = document.getElementsByClassName('pixel')[index];
  pixels[index].addEventListener('click', grabColor);
}
