const color = ['black', 'red', 'blue', 'yellow'];
let old = 0;
let select = 'black';

function pixels(e) {
  e.target.style.setProperty('background', select);
}

function selectIndex(colorIndex) {
  for (let index = 0; index < color.length; index += 1) {
    if (colorIndex === color[index]) {
      return index;
    }
  }
}

function selectColor(e) {
  select = e.target.style.background;
  const index = selectIndex(select);
  document.querySelectorAll('.color')[old].classList.remove('selected');
  document.querySelectorAll('.color')[index].classList.add('selected');
  old = index;
}

function clearPixels() {
  const colorPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < colorPixel.length; index += 1) {
    colorPixel[index].style.background = 'white';
  }
}

function colorButton() {
  const colorBlock = document.querySelectorAll('.color');
  for (let index = 0; index < colorBlock.length; index += 1) {
    colorBlock[index].style.background = color[index];
    colorBlock[index].addEventListener('click', selectColor);
  }
}

function colorPixels() {
  const colorPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < colorPixel.length; index += 1) {
    colorPixel[index].addEventListener('click', pixels);
  }
}

const clearAll = document.getElementById('clear-board');
clearAll.addEventListener('click', clearPixels);

function init() {
  colorButton();
  colorPixels();
}
window.onload = init;
