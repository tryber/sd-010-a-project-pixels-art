let dimension = 5;

//  Função que é ativada quando se clica numa cor da paleta, ela recupera o elemento que contem
// a classe selected, remove essa classe dele e aplica no elemento que ativou o listener
function changeSelected(eventOrigin) {
  const selectedNow = document.querySelector('.selected');
  selectedNow.classList.remove('selected');
  const clickedNow = eventOrigin.target;
  clickedNow.classList.add('selected');
}

// Adiciona um escutador em todos elementos da paleta
function addPaletteListener() {
  const colorElement = document.getElementsByClassName('color');

  for (let index = 0; index < colorElement.length; index += 1) {
    colorElement[index].addEventListener('click', changeSelected);
  }
}

// Esta funcao recupera a propriedade backgroundColor do elemento da paleta com a classe selected,
// e entao recupera o elemento pixel que foi clicado e atribui a ele esta propriedade.
function applyColor(eventOrigin) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const clickedPixel = eventOrigin.target;
  clickedPixel.style.backgroundColor = selectedColor;
}

// Funcao que adiciona um escutador em cada elemento pixel
function addPixelListener() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', applyColor);
  }
}

// Funcao que 'limpa' o tabuleiro atribuindo a propriedade backgroundColor o valor 'white'
function cleanBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

// Cria o tabuleiro dinamicamente. Em board recupera-se o elemento que representa o tabuleiro,
// o primeiro for cria uma div que representa uma linha, atribui a classe nela e aplica a div criada em board. 
// Em seguida o outro for recupera a div recém criada e cria outras divs dentro dela que representarao os pixels.
// Assim o ciclo se repete: Cria uma div linha e dentro dela cria as divs pixels de acordo com o valor dimensao
function makeBoard(dim) {
  const board = document.getElementById('pixel-board');
  let createdLine;

  for (let indexLine = 0; indexLine < dim; indexLine += 1) {
    const creatingLine = document.createElement('div');
    creatingLine.className = 'lines';
    board.appendChild(creatingLine);
    createdLine = document.getElementsByClassName('lines');

    for (let indexColum = 0; indexColum < dim; indexColum += 1) {
      const creatingPixel = document.createElement('div');
      creatingPixel.className = 'pixel';
      createdLine[indexLine].appendChild(creatingPixel);
    }
  }
  addPixelListener();
}

// Adiciona um escutador no botão limpar
function addButtomListener() {
  const buttom = document.getElementById('clear-board');
  buttom.addEventListener('click', cleanBoard);
}

function changeDim() {
  dimension = document.FormDimension.dim.value; // Recupera o valor do input que vai de 5 a 50
  const board = document.getElementById('pixel-board');
  if (dimension === '') {
    alert('Board inválido!');
  } else if (dimension >= 5 && dimension <= 50) {
    board.innerHTML = '';// Apaga o conteudo do tabuleiro atual
    makeBoard(dimension);
  } else if (dimension < 5) {
    board.innerHTML = '';
    dimension = 5;
    makeBoard(dimension);
  } else {
    board.innerHTML = '';
    dimension = 50;
    makeBoard(dimension);
  }
}

function addVqvListener() {
  document.FormDimension.vqv.addEventListener('click', changeDim);
}

addPaletteListener();
addPixelListener();
addButtomListener();
addVqvListener();
