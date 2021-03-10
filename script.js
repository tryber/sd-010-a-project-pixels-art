//color[length] para alterar a cor nas paletas

window.onload = function bemVindo() {
    console.log("teste testando")

}


//Variaveis // pq Const? //

let colorElements = document.querySelectorAll('.color');
let board = document.getElementById('board');
let palleteColorBasic = ['black', 'red', 'blue', 'green'];
let colorSelected = document.querySelector('.selected').style.backgroundColor;


// Coloca as cores nas Divs //
window.onload = function palleteColor(){
    for (let index = 0; index < palleteColorBasic.length; index += 1)
    colorElements[index].style.backgroundColor = palleteColorBasic[index];
}



// Seleciona cor na palette //
function selectColorPallete(event) {
    let elementTarget = Event.target;
    if (elementTarget.id !== 'color-palette') {
      colorElements.forEach((element) => {
        element.classList.remove('selected');
        event.target.classList.add('selected');
      });
    }
  }

// Salva cor //
  function saveColorPalette() {
    let colorSelected = document.querySelector('.selected').style.backgroundColor;
    let color = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
    return color;
  }

// Pinta pixel //
function paintPixels(event) {
    const elementTarget = event.target;
    if (elementTarget.id !== 'board') {
      elementTarget.style.backgroundColor = selectColorPallete();
    }
  }


console.log(colorElements)


colorElements[0].addEventListener('click', selectColorPallete);
colorElements[1].addEventListener('click', selectColorPallete);
colorElements[2].addEventListener('click', selectColorPallete);
colorElements[3].addEventListener('click', selectColorPallete);
board.addEventListener('click', paintPixels);
console.log(document.querySelector('.selected'))
console.log(colorSelected)

