const colorsPalette = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');

// source: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
function selectColor() {
  colorsPalette.forEach((color) => {
    color.addEventListener('click', (_event) => {
      for (let index = 0; index < colorsPalette.length; index += 1) {
        colorsPalette[index].classList.remove('selected');
      }
      color.classList.add('selected');
    });
  });
}

selectColor();

function changePixelColor() {
  pixels.forEach((pixel) => {
    pixel.addEventListener('click', (e) => {
      for (let index = 0; index < colorsPalette.length; index += 1) {
        if (colorsPalette[index].classList.contains('selected')) {
          const color = document.querySelector('.selected').className.split(' ')[1];
          e.target.style.backgroundColor = color;
        }
      }
    });
  });
}

changePixelColor();

function clearBoard() {
  const clearBtn = document.getElementById('clear-board');
  clearBtn.addEventListener('click', (_event) => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
      colorsPalette.forEach((color) => {
        if (color.classList.contains('selected')) {
          color.classList.remove('selected');
        }
      });
    }
    colorsPalette[0].classList.add('selected');
  });
}

clearBoard();

window.onload = function start() {
  const defaultColor = document.querySelector('.black');
  defaultColor.classList.add('selected');
};
