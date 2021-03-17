// ************** Cria função que adiciona a class pixel em cada elemento 'pixel' da board-grid **************** 
function addPixel() { 
  for (let index = 0; index < 25; index += 1) {
      let pixelParent = document.getElementById('pixel-board');
      let divPixel = document.createElement('div');
      divPixel.addEventListener('click', pintar);
      divPixel.className = 'pixel'; // divPixel.classList.add('pixel') 
      pixelParent.appendChild(divPixel);
  }
}

addPixel();

// criar uma função com condição para add class selected uma cor por vez.

// criar elemento clique
let colorPalette = document.getElementsByClassName('color');

// Criar for para adicionar a cada elementos
for (let index = 0; index < colorPalette.length; index +=1){
colorPalette[index].addEventListener('click', selectedColor);
}

// evento da fução clique
function selectedColor(evento) {
  
   // Remove a classe select     
    let colors = document.querySelectorAll('.selected');
    colors[0].classList.remove('selected');

    // Adiciona a classe selected no elemento
    let colorElement = evento.target;
    colorElement.classList.add('selected');
}

// Cria variável que seleciona o botão 'Limpar'
let buttonClear = document.querySelector('#clear-board');

// 
buttonClear.addEventListener('click', clearAll);

function clearAll() {
  let pixelsBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsBoard.length; index += 1) {
    pixelsBoard[index].style.backgroundColor = 'rgb(255, 255 ,255)';
  }
}


function pintar(e){
  let getColor = document.querySelector('.selected');
  // variável para pegar o estilo que foi computado no navegar - geral - o background-color
  let pickedColor = window.getComputedStyle(getColor);
  let cor = pickedColor.getPropertyValue('background-color');
  
  e.target.style.backgroundColor = cor; // só funciona dentro do addEventListener
}




