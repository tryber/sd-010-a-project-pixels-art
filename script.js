// cria os elementos na forma de div
const quadroPixels = document.getElementById('pixel-board');
for (let index = 1; index <= 25; index += 1) {
  const pixel = document.createElement('div');
  quadroPixels.appendChild(pixel);
  pixel.className = 'pixel';
}

// adiciona classe selected à cor preta
document.getElementById('color-palette').firstElementChild.classList.add('selected');
let currentColor = armazenaCor ();

// recupera os pixels e a paleta de cores
let selectedPixel = document.querySelectorAll('.pixel');
const element = document.querySelectorAll('.color');

// adiciona evento: ao clicar, troca na paleta a classe 'selected' e armazena a cor a ser usada
for (let index = 0; index < 4; index += 1) {
  element[index].addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    element[index].classList.add('selected');
    currentColor = armazenaCor ();
  })
}

// adiciona evento: troca a cor do pixel quando clicado
for (let indexPixel = 0; indexPixel < 25; indexPixel += 1) {
  selectedPixel[indexPixel].addEventListener('click', function () {
    selectedPixel[indexPixel].style.backgroundColor = currentColor;
  })
}

// função que armazena a cor da paleta a ser usada
function armazenaCor () {
  let corArmazenar = window.getComputedStyle(document.querySelector('.selected'),null).getPropertyValue("background-color");
  return corArmazenar;
}

// função que limpa o quadro de pixels
function clearBoard() {
  for (let indexClear = 0; indexClear < 25; indexClear += 1) {
    selectedPixel[indexClear].style.backgroundColor = 'white';
  }
}
// botão para limpar quadro de pixels
let botao = document.getElementById('clear-board');
botao.addEventListener('click', clearBoard);