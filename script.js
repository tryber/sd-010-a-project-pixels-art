function generateRandomColors() {
  const num = 4;
  for (let index = 0; index < num; index += 1) {
    const palette = document.querySelector('#color-palette');
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';

    if (index === 0) {
      colorDiv.style.backgroundColor = 'black';
      colorDiv.classList.add('selected');
    } else {
      // eslint-disable-next-line max-len
      colorDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)})`;
    }
    palette.appendChild(colorDiv);
  }
}

generateRandomColors();

function clearSelect(e) {
  const evt = e.target.id;
  if (evt !== 'color-palette') {
    const pastSelected = document.querySelector('.selected');
    pastSelected.className = 'color';
    e.target.className = 'color selected';
  }
}

const selectColor = document.querySelector('#color-palette');
selectColor.addEventListener('click', clearSelect);

function paintBoard(evt) {
  const pastSelected = document.querySelector('.selected');
  const evtColor = evt.target;
  evtColor.style.backgroundColor = pastSelected.style.backgroundColor;
}

const pixelSelect = document.querySelector('#pixel-board');
pixelSelect.addEventListener('click', paintBoard);

function clearButton() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const clear = document.querySelector('#clear-board');
clear.addEventListener('click', clearButton);
