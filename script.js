window.onload = fillPalette 
 
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const color = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');

function randomColor(){
  let hexadecimais = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let cor = '#';
  for (let index = 0; index < 6; index += 1 ) {
     cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
   return cor;
}
// A idéia das cores randomicas foi baseado no trabalho do [RCalvs], mas a função é quase igual a de um usuário 
// do github chamado Girol, de quase 4 anos atrás. A função dele tinha uma string e não um array.

const colors = ['black', randomColor(), randomColor(), randomColor()];

function fillPalette (){
  for ( let index = 0; index < color.length; index += 1) {
    color[index].style.backgroundColor = colors[index];
  }
}

function selectColor(event) {
  for(let index = 0; index <color.length; index += 1){
    color[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

colorPalette.addEventListener('click', selectColor);

function paintPixel(event) {
  if(event.target.id !== 'pixel-board'){
    event.target.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color');
  }    
}

pixelBoard.addEventListener('click', paintPixel);

// o window.get foi uma dica do André Jaques em uma thread aberta pelo Rafael Cardoso no Slack.
