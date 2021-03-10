//color[length] para alterar a cor nas paletas

window.onload = function bemVindo() {
    console.log("teste testando")

}
//lets //
let palleteColorBasic = ['black', 'red', 'blue', 'green'];
let Palette = document.getElementById('color-palette');
let Color = document.querySelectorAll('.color');
let Board = document.getElementById('board');

// Coloca as cores nas Divs //
window.onload = function palleteColor(){
  for (let index = 0; index < palleteColorBasic.length; index += 1)
  Color[index].style.backgroundColor = palleteColorBasic[index];
}

// Seleciona cor na palette //
function setColor(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'color-palette') {
    Color.forEach((element) => {
      element.classList.remove('selected');
      elementTarget.classList.add('selected');
    });
  }
}

// Salva cor //
function getColor() {
  const elementSelected = document.querySelector('.selected');
  const color = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
  return color;
}

// Pinta pixel //
function changePixels(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'board') {
    elementTarget.style.backgroundColor = getColor();
  }
}

// Clicks //
Palette.addEventListener('click', setColor);
Board.addEventListener('click', changePixels);




