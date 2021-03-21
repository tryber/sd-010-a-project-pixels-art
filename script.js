const colorPalette = document.getElementById('color-palette'); // Variaveis Gerais
const colors = ['black', 'green', 'red', 'blue'];
const pixelBoard = document.getElementById('pixel-board');
const buttonElement = document.querySelector('#clear-board');
const pixelSelected = document.getElementsByClassName('pixel');

//  Funções e Eventos Gerais
for (let colorPos = 0; colorPos < 4; colorPos += 1) { // Gera os blocos de cores
  const createBoxColors = document.createElement('li');
  createBoxColors.className = 'color';
  createBoxColors.style.backgroundColor = colors[colorPos];
  colorPalette.appendChild(createBoxColors);
}

for (let linePos = 0; linePos < 5; linePos += 1) { //  Gera a tabela.
  const linha = document.createElement('div');
  linha.className = 'line';
  pixelBoard.appendChild(linha);
  for (let pixelPos = 0; pixelPos < 5; pixelPos += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    linha.appendChild(pixel);
  }
}

function colorGenerator () { // Gera cores aleatorias.
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

const black = document.querySelectorAll('.color')[0];
const red = document.querySelectorAll('.color')[1];
const blue = document.querySelectorAll('.color')[2];
const green = document.querySelectorAll('.color')[3];

black.style.backgroundColor = 'black';
red.style.backgroundColor = colorGenerator();
blue.style.backgroundColor = colorGenerator();
green.style.backgroundColor = colorGenerator();

window.onload = function colorSelector() { //  Seleciona a cor preta como padrão ao carregar a pagina.
  black.className += ' selected';
};

function changeSelected(select) { //  Seleciona o pixel que vai ser pintado.
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  select.className = select.className + ' selected';
}

colorPalette.addEventListener('click', function changeSelectedColor(event) { //  Troca a cor selecionada para pintar.
  const index = event.target;
  changeSelected(index);
});

pixelBoard.addEventListener('click', function changePixelToSelectedColor(event) { //  Troca a cor do pixel para a cor selecionada.
  const index = event.target;
  index.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});

buttonElement.addEventListener('click', function pixelsCleaner() { // Limpador de Tela.
  for (let screenCleaner = 0; screenCleaner < pixelSelected.length; screenCleaner += 1) {
    pixelSelected[screenCleaner].style.background = 'white';
  }
});
