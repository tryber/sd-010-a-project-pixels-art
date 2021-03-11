// gerando o quadrado 5x5
function lineSquareCreator(lineLength) {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < lineLength; i += 1) {
    const lineSquare = document.createElement('div');
    board.appendChild(lineSquare);
    lineSquare.className = 'pixel-line';
  }
  return board;
}
function fillLines(lineLength) {
  for (let i = 0; i < lineLength; i += 1) {
    const line = document.querySelectorAll('.pixel-line');
    for (let k = 0; k < lineLength; k += 1) {
      const square = document.createElement('div');
      square.className = 'pixel';
      line[i].appendChild(square);
    }
  }
  return document.querySelectorAll('.pixel-line');
}
function boardGenerator(lineLength) {
  const square = document.getElementById('pixel-board');
  lineSquareCreator(lineLength);
  fillLines(lineLength);
  return square;
}
boardGenerator(5);
// eu acho que deu certo

// selecionando...
// consultei documentação https://www.w3schools.com/jsref/prop_element_classlist.asp

function selectClass(color) {
  const selectedElement = document.getElementById(color);
  return selectedElement.classList.add('selected');
}

// colocando o black como cor selecionada no window load
window.onload = selectClass('black');

// target select tentei fazer algo parecido que o lucas fez na aula
const targetSelected = document.getElementsByClassName('color');
function targetSelect(targeted) {
  const selectedItem = document.getElementsByClassName('selected')[0];
  const targetedItem = targeted.target;
  // console.log(selectedItem)
  selectedItem.classList.remove('selected');
  targetedItem.classList.add('selected');
  console.log(targetedItem);
}
for (let i = 0; i < targetSelected.length; i += 1) {
  targetSelected[i].addEventListener('click', targetSelect);
}
// obg Jhon pela ajuda <3

// requesito 8, vamos tentar aplicar o eventListener ao .pixel
// tentar resgatar o background Color
// tentei usar o selectedElement.style.backgroundColor e não foi tirar essa duvida
const littleSquare = document.getElementsByClassName('pixel');
function selectPixel(pixelSelected) {
  const targetedPixel = pixelSelected.target;
  const selectedElement = document.getElementsByClassName('selected')[0];
  console.log(document.getElementsByClassName('selected')[0].id);
  targetedPixel.style.backgroundColor = selectedElement.id;
}
for (let i = 0; i < littleSquare.length; i += 1) {
  littleSquare[i].addEventListener('click', selectPixel);
}
// tentando limpar o board
const clearClick = document.getElementById('clear-board');
function clearBoard() {
  const squares = document.getElementsByClassName('pixel');
  for (let i = 0; i < squares.length; i += 1) {
    squares[i].style.backgroundColor = 'white';
  }
}
clearClick.addEventListener('click', clearBoard);

// só queria deixar meu agradecimento ao jhon e a carol
