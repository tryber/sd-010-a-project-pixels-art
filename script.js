function colorSelector(elementColor){
  let color  = '';
  if(elementColor.id == "yellow") color = '#fae900';
  if(elementColor.id == "black") color = 'black';
  if(elementColor.id == "blue") color = '#0013c2';
  if(elementColor.id == "green") color = '#00d41c';
//   console.log('inside function colorSelector, the current color is ' + color);
  return color;
}

function setClass(element){
  let currentSelected = document.getElementsByClassName('selected')[0];
  if(element.className == "color"){
  element.className = "color selected";
  currentSelected.className = "color";
  }
}

function pixelPainter(clickedElement,currentColor){
  clickedElement.style.backgroundColor = currentColor;
}

let currentColor = 'black';

const collorPalette = document.getElementById('color-palette');
collorPalette.addEventListener('click',function(){
  let clickedColor = event.target;
  setClass(clickedColor);
  currentColor = colorSelector(clickedColor);
});

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click',()=>{
  let clickedElement = event.target;
  console.log(clickedElement);
  pixelPainter(clickedElement,currentColor);
});

let pixels = document.querySelectorAll('#pixel-board .pixel');
let botao = document.getElementById('clear-board');

function clear () {
  for (let index = 0;index < pixels.length; index +=1) {
    let positionPixels = pixels[index];
    positionPixels.style.backgroundColor = 'white';
  } 
}
botao.addEventListener('click', clear);
