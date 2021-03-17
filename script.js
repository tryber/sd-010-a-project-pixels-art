const pixelboard = document.getElementById('pixel-board');
for (let index = 1; index <= 25; index += 1) {
  const pixel = document.createElement('div');
  pixelboard.appendChild(pixel);
  pixel.className = 'pixel';
}
// colocando a cor preta como selecionada
document.getElementById('color-palette').firstElementChild
  .classList.add('selected');


// selecionando cores
let selectedPixel = document.querySelectorAll('.pixel');
const color = document.querySelectorAll('.color');

function colorSelected () {
  const color = window.getComputedStyle(document.querySelector( 
      '.selected'),null).getPropertyValue("background-color");
  return color;
}

for (let index = 0; index < 4; index += 1) {
  color[index].addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    color[index].classList.add('selected');
    currentColor = colorSelected();
  })
}

let currentColor = colorSelected();

for (let index = 0; index < 25; index += 1) {
  selectedPixel[index].addEventListener('click', function () {
    selectedPixel[index].style.backgroundColor = currentColor;
  })
}
