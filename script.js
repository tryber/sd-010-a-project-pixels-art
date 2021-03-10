window.onload = () => {
  document.getElementById('black').classList.add('selected');
};

function cleanColor() {
  document.querySelector('.selected').classList.remove('selected');
}

function selectColorPaint(event) {
  const currentColor = event.target;
  cleanColor();

  currentColor.classList.add('selected');
  console.log(currentColor);
}

// Na função paintingPixels eu utilizei o getComputedStyle e o getPropertyValue graças a dica do André Jaques no slack (https://trybecourse.slack.com/archives/C01L16B9XC7/p1615328182310300) e ai eu consegui aplicar ela a minha lógica.

function paintingPixels(event) {
  const pixelColor = event.target;
  const colorPickup = document.querySelector('.selected');
  const colorStyles = window.getComputedStyle(colorPickup).getPropertyValue('background-color');

  pixelColor.style.backgroundColor = colorStyles;
  console.log(pixelColor);
  console.log(colorStyles);
}
// Na função clearBoard eu utilizei o código do Leonardo Mallmann (https://github.com/mallmann02), onde o forEach vai aplicar a função setAttribute para cada .pixel encontrado. A função troca o valor para a opção setada. Pois eu estava fazendo com o .style.backgroundColor e não estava indo, pq ele já tinha aquele atributo.

function clearBoard() {
  const coloredPixels = document.querySelectorAll('.pixel');
  coloredPixels.forEach((px) => px.setAttribute('style', 'background-color: white;'));
}

document.getElementById('color-palette').addEventListener('click', selectColorPaint);
document.getElementById('pixel-board').addEventListener('click', paintingPixels);

const button = document.getElementById('clear-board');

button.addEventListener('click', clearBoard);
