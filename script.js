function quadrado() {
  const elementDiv = document.querySelector('#pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const elementsDiv = document.createElement('div');
    elementsDiv.className = 'pixel';
    elementDiv.appendChild(elementsDiv);
  }
}

quadrado();

function paletteColor() {
  const colorPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', (e) => {
      for (let indice = 0; indice < colorPalette.length; indice += 1) {
        colorPalette[indice].classList.remove('selected');
      }
      e.target.classList.add('selected');
    });
  }
}

paletteColor();

function pixelColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (e) => {
      const color = document.querySelector('.selected');
      e.target.style.backgroundColor = color.style.backgroundColor;
    });
  }
}
pixelColor();

function clearPixelColor() {
  const elementMain = document.querySelector('#list-palette-color');
  const createButtonClear = document.createElement('button');
  createButtonClear.innerHTML = 'Limpar';
  createButtonClear.id = 'clear-board';
  elementMain.appendChild(createButtonClear);
  createButtonClear.addEventListener('click', () => {
    const pixelColors = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelColors.length; index += 1) {
      const element = pixelColors[index];
      element.style.backgroundColor = 'white';
    }
  });
}
clearPixelColor();
