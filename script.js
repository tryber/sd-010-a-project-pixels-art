function rgbColor() {
  const colorR = Math.round(Math.random() * 256);
  const colorG = Math.round(Math.random() * 256);
  const colorB = Math.round(Math.random() * 256);
  return 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
}

function colorsPalette() {
  const clr2 = rgbColor();
  const clr3 = rgbColor();
  const clr4 = rgbColor();
  const squareBlack = document.getElementById('black');
  squareBlack.style.backgroundColor = 'black';
  squareBlack.setAttribute('class', 'color selected');
  const square2 = document.getElementById('color2');
  square2.style.backgroundColor = clr2;
  square2.setAttribute('class', 'color');
  const square3 = document.getElementById('color3');
  square3.style.backgroundColor = clr3;
  square3.setAttribute('class', 'color');
  const square4 = document.getElementById('color4');
  square4.style.backgroundColor = clr4;
  square4.setAttribute('class', 'color');
}

window.onload = function load() {
  colorsPalette();
};

function selectColor() {
  const colorsList = document.querySelector('#color-palette');
  colorsList.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    const clickedColor = event.target;
    selectedColor.className = 'color';
    clickedColor.className = 'color selected';
  });
}

function paintColor() {
  const showPixel = document.querySelector('#pixel-board');
  showPixel.addEventListener('click', (event) => {
    const selectedPixel = event.target;
    const color = document.querySelector('.selected').style.backgroundColor;
    selectedPixel.style.backgroundColor = color;
  });
}

selectColor();
paintColor();

const buttonClear = document.querySelector('#clear-board');

function clearAll() {
  const pixelArray = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelArray.length; index += 1) {
    pixelArray[index].style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearAll);
