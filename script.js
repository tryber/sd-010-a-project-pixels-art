// Requisito 7
const colorClick = document.getElementById('color-palette');
function changeClass (event){

  const nameClass = document.getElementsByClassName('color');
  for (let index = 0; index < nameClass.length; index += 1) {
    nameClass[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
colorClick.addEventListener('click', changeClass);

// requisito 8
const change = document.getElementById('pixel-board');
function changeColor (event) {
  const nameClass = document.getElementsByClassName('color');

  for (let index = 0; index < nameClass.length; index += 1) {
    if (nameClass[index].classList.contains('selected')) {
      let obj = window.getComputedStyle(nameClass[index]);
      event.target.style.backgroundColor = obj.backgroundColor;
    }
  }
}
  change.addEventListener('click', changeColor);

// requisito 10 
const clearPixel = document.getElementById('clear-board')
const pixelWhite = document.getElementsByClassName('pixel');

function clear (){
  for (let index = 0; index < pixelWhite.length; index += 1){
    pixelWhite[index].style.backgroundColor = "white";
  }
}
clearPixel.addEventListener('click', clear);

