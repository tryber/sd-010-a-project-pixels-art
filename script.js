const colorsInPalette = document.querySelectorAll('.color');
const resetBoardButton = document.querySelector('#clear-board');
const generateNewBoardButton = document.querySelector('#generate-board');
const boardSizeInput = document.querySelector('#board-size');
const pixelBoard = document.querySelector('#pixel-board');

function addColorsInPalette() {
  for (let index = 0; index < colorsInPalette.length; index += 1) {
    const randomColor = `rgb(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254})`;
    colorsInPalette[index].style.background = randomColor;
  }
  colorsInPalette[0].style.background = 'black'; // Define primeira cor como preta
} // Adiciona cor para cada elemento da paleta

addColorsInPalette();

function createPixelInBoard() {
  const pixel = document.createElement('container');
  pixel.className = 'pixel';
  return pixel;
} // Cria o elemento HTML "container" com a classe pixel

for (let index = 0; index < 25; index += 1) {
  pixelBoard.appendChild(createPixelInBoard());
} // Cria o quadro inicial

let boardPixels = document.querySelectorAll('.pixel');

function selectNewElement(newEl) {
  colorsInPalette.forEach((el) => el.classList.remove('selected'));
  newEl.classList.toggle('selected');
} // Adiciona a classe selected ao container respectivo à cor selecionada

function paintNewPixel(pixel) {
  const boardPixel = pixel;
  boardPixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
} // Pinta o pixel clicado com a cor do elemento com a classe selected

function resetPixelBoard() {
  boardPixels.forEach((px) => px.setAttribute('style', 'background-color: white;'));
} // Pinta todos os elementos da classe pixel de branco

function createNewBoard(boardWidth) {
  pixelBoard.style.gridTemplateColumns = `repeat(${boardWidth}, 40px)`;
  pixelBoard.style.gridTemplateRows = `repeat(${boardWidth}, 40px)`;

  for (let index = 0; index < boardWidth ** 2; index += 1) {
    document.querySelector('#pixel-board').appendChild(createPixelInBoard());
  }
  boardPixels = document.querySelectorAll('.pixel');
  boardPixels.forEach((px) => px.addEventListener('click', (e) => paintNewPixel(e.target)));
} // Cria umo novo quadro de pixels com parâmetros do usuário

function generateNewBoard() {
  let boardSizeValue = boardSizeInput.valueAsNumber || 5;
  if (boardSizeValue < 5) boardSizeValue = 5;
  if (boardSizeValue > 50) boardSizeValue = 50;

  if (boardSizeInput.value === '') {
    window.alert('Board inválido!');
  } else {
    boardPixels.forEach((px) => px.remove());
    createNewBoard(boardSizeValue);
  }
} // Aplica regras de negócio para o tamanho da borda, limpa a anterior e gera a nova

colorsInPalette.forEach((el) => el.addEventListener('click', (e) => selectNewElement(e.target)));
boardPixels.forEach((px) => px.addEventListener('click', (e) => paintNewPixel(e.target)));
resetBoardButton.addEventListener('click', resetPixelBoard);
generateNewBoardButton.addEventListener('click', generateNewBoard);
