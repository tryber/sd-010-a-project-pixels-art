/*function GenerateColor() {
  let red = parseInt(Math.random * 255);
  let green = parseInt(Math.random * 255);
  let blue = parseInt(Math.random * 255);
  let color = (red, green, blue);
  console.log(color);
}*/

// Requisito 8
// resolvido a partir da lógica do código do Nilson Ribeiro https://github.com/tryber/sd-010-a-project-pixels-art/pull/51
const colorsInPalette = document.querySelectorAll('.color');

const pixelBoard = document.querySelector('#pixel-board');

function selectNewElement(newEl) {
  colorsInPalette.forEach((el) => el.classList.remove('selected'));
  newEl.classList.toggle('selected');
} 

function paintNewPixel(pixel) {
  const boardPixel = pixel;
  boardPixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
} 

colorsInPalette.forEach((el) => el.addEventListener('click', (e) => selectNewElement(e.target)));

let bigsquare = document.querySelector('#pixel-board');

// Requisitos 4 e 5
function GenerateBoard(number) {
  for (let index = 0; index < number; index += 1) {
    let bigsquare = document.querySelector('#pixel-board');
    let squares = document.createElement('div');
    squares.className = 'pixel';
    bigsquare.appendChild(squares);
  }
}

// Evento adicionado após explicação no grupo com Nilson Ribeiro e Samuel Melo
bigsquare.addEventListener('click' , function xx (event){
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});

// Requisito 9
// reorganização feita observando o código da Beatriz, já citado acima
// caso a função funcione, após analisar o meu código e o da Beatriz, a diferença foi que usei o 
// getElementById, mas não passava no evaluator
function ResetColors(){
  let reset = document.querySelector('#clear-board');
  let resetButton = document.querySelectorAll('.pixel');
  reset.addEventListener('click', function(){
  for (let index = 0; index < resetButton.length; index+= 1){
    resetButton[index].style.backgroundColor = 'white';
  }
});
}

GenerateBoard(25);
ResetColors();