function palete() {
  const allColors = document.querySelectorAll('#color-palette>div');
  const colors = ['black', 'orange', 'blue', 'green'];
  for (index in allColors) {
    for (index_2 in colors) {
      if (index == index_2) {
        allColors[index].style.backgroundColor = colors[index_2];
      }
    }
  }
}
palete();

function makeSquare(pixelSquare) {
  for (let index = 0; index < pixelSquare * pixelSquare; index += 1) {
    const makePixel = document.createElement('div');
    makePixel.className = 'pixel';
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.appendChild(makePixel);
  }
}
makeSquare(5);

window.onload = function () {
  const allBlack = document.getElementById('color-palette');
  const firstChild = allBlack.childNodes[1];
  firstChild.className += ' selected';

  let boardValue = document.getElementById('board-size')
  boardValue.innerHTML = '5'
};

// assistência de Bruno Bastos, referência: https://forum.freecodecamp.org/t/addeventlistener-and-changing-background-color/193023
function changeSelectColors() {
  const palletset = document.querySelector('#color-palette');
  palletset.addEventListener('click', (change) => {
    if (change.target.className == 'color') {
      document.querySelector('.selected').className = 'color';
      change.target.className += ' selected';
    }
  });
}
changeSelectColors();

// referência https://pt.stackoverflow.com/questions/426718/qual-a-diferen%C3%A7a-entre-queryselector-e-o-queryselectorall#:~:text=Primeiramente%20querySelector%20e%20querySelectorAll%20s%C3%A3o,de%20elementos%20presentes%20no%20documento.
// Também vi algumas resoluções dos colegas, em especial a do 311stan, link https://github.com/tryber/sd-010-a-project-pixels-art/pull/106
function ColorForaChange() {
  let setpallet = document.querySelector('#pixel-board');
  setpallet.addEventListener('click', (colorChanges) => {
    let letsChange = document.querySelector('.selected').style.backgroundColor;
    let pixelChange = document.querySelectorAll('.pixel');
    for (ind in pixelChange) {
      if (pixelChange[ind] == colorChanges.target) {
        pixelChange[ind].style.backgroundColor = letsChange;
      }
    }
  });
}
ColorForaChange();


function squareClean() {
  let getPixels = document.querySelectorAll('.pixel');
  for (inde in getPixels) {
    let cleanPixels = getPixels[inde];
    cleanPixels.style.backgroundColor = 'white';
  }
}
let getClearButton = document.getElementById('clear-board');
getClearButton.addEventListener('click', squareClean);

// perguntar o problema desta função
/* function squareClean (){
    let getClearButton = document.querySelector('#clear-board');
    getClearButton.addEventListener('click', function() {
        let getSquare = document.querySelectorAll('#pixel-board>div');
        for (let index = 0; index < getSquare; index += 1) {
            getSquare[index].style.backgroundColor='white'
        }
    })
}
squareClean ();
*/


function inputSquare (){
    let inSquare = document.getElementById('board-size').value;
      if(inSquare > 50){
        inSquare == 50
      }
      else if ( inSquare < 5){
        inSquare == 5
      }
      else if (inSquare=== ''){
        alert('Board Invalido!')
      }
}
inputSquare()


function squareButton(){
}