let size = 5;
// Requisito 2- Criando paleta de cores
function creatingColorPaddles() {
  for (let index = 0; index < 4; index += 1) {
    const creatColorPaddles = document.createElement('div');
    document.getElementById('color-palette').appendChild(creatColorPaddles)
      .style.listStyle = 'none';
    creatColorPaddles.classList = 'color';
  }
}
creatingColorPaddles();

// Colorindo a paleta de cores
function paytingColorPaddles() {
  const colorsPaddles = document.getElementsByClassName('color');
  colorsPaddles[0].style.backgroundColor = 'black';
  colorsPaddles[1].style.backgroundColor = 'purple';
  colorsPaddles[2].style.backgroundColor = 'gray';
  colorsPaddles[3].style.backgroundColor = 'yellow';
}
paytingColorPaddles();

// Requisito 4 criar boxdepixel 5x5
function creatingPixelPaintingBoard() {
  const newDiv = document.createElement('div');
  document.getElementById('board').appendChild(newDiv);
  newDiv.id = 'pixel-board';
  for (let index = 1; index <= size; index += 1) {
    const createdColumun = document.createElement('div');
    createdColumun.classList = 'column';
    document.getElementById('pixel-board').appendChild(createdColumun);
    for (let indexA = 1; indexA <= size; indexA += 1) {
      const createdLine = document.createElement('div');
      createdColumun.appendChild(createdLine);
      createdLine.classList = 'pixel';
    }
  }
}
creatingPixelPaintingBoard();

// Requisito 6 - Estabelecendo a cor preta como selecionada
function blackColor() {
  document.getElementsByClassName('color')[0].classList.add('selected');
}
blackColor();

// Requisito 7 - Realizado em conjunto com colegas, um grupo de ajuda mutua. Aprendemos juntos, em especial, ao Murilo Gonçalves que explicou a utilização do (e).
function classChange() {
  const elementColors = document.getElementById('color-palette');
  elementColors.addEventListener('click', function (e) {
    const colorElement = e.target;
    const selectedElement = document.querySelector('.selected');
    selectedElement.classList.remove('selected');
    colorElement.classList.add('selected');
  });
}
classChange();

// Requisito 8 - Realizado em conjunto com colegas, um grupo de ajuda mutua. Aprendemos juntos, em especial, ao Murilo Gonçalves que explicou a utilização do (e).
function paintPixel() {
  const paintBoard = document.querySelector('#pixel-board');
  paintBoard.addEventListener('click', function (e) {
    const pixel = e.target;
    if (pixel.className === 'pixel') {
      const colorSelected = document.querySelector('.selected').style.backgroundColor;
      pixel.style.backgroundColor = colorSelected;
    }
  });
}
paintPixel();

// Requisito 9 - Criar botão para limpar quadro
const buttomClean = document.querySelector('#clear-board');
buttomClean.addEventListener('click', clearBoard);

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
clearBoard();
