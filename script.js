// Define a cor de background das paletas

document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.blue').style.backgroundColor = 'blue';
document.querySelector('.red').style.backgroundColor = 'red';
document.querySelector('.green').style.backgroundColor = 'green';

// Define a cor 'selected' ao clicar na paleta de cores, remove a antiga cor 'selected'

function colorSelection() {
  const listElements = document.getElementsByClassName('color');

  for (let i = 0; i < listElements.length; i += 1) {
    listElements[i].addEventListener('click', () => {
      for (let i2 = 0; i2 < listElements.length; i2 += 1) {
        listElements[i2].classList.remove('selected');
      }

      listElements[i].classList.add('selected');
    });
  }
}

// Pinta um pixel utilizando a cor 'selected'

function colorDraw() {
  const pixelElements = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixelElements.length; i += 1) {
    pixelElements[i].addEventListener('click', () => {
      const selected = document.getElementsByClassName('selected')[0];
      if (selected.classList.contains('black')) {
        pixelElements[i].style.backgroundColor = 'black';
      } else if (selected.classList.contains('red')) {
        pixelElements[i].style.backgroundColor = 'red';
      } else if (selected.classList.contains('green')) {
        pixelElements[i].style.backgroundColor = 'green';
      } else if (selected.classList.contains('blue')) {
        pixelElements[i].style.backgroundColor = 'blue';
      }
    });
  }
}

// Define a cor de todos os pixels como sendo branco ao apertar
// o botão 'limpar'

function colorClear() {
  const clearElement = document.getElementById('clear-board');
  const pixelElements = document.getElementsByClassName('pixel');

  clearElement.addEventListener('click', () => {
    for (let i = 1; i < pixelElements.length; i += 1) {
      pixelElements[i].style.backgroundColor = 'white';
    }
  });
}

colorDraw();
colorSelection();
colorClear();
