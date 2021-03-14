function removeSelected() {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
}

function addSelected(event) {
  event.target.classList.add('selected');
}

function handleClick(event) {
  if (event.target.id !== 'color-palette') {
    removeSelected();
    addSelected(event);
  }
}

function listenToColorPalette() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', handleClick);
}

listenToColorPalette();

function paintPixel(event) {
  const elementWithSelected = document.querySelector('.selected');
  const selectColor = elementWithSelected.id;
  const clickedPixel = event.target;

  clickedPixel.style.backgroundColor = selectColor;
}

function listenToColorPixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', paintPixel);
}

listenToColorPixel();
