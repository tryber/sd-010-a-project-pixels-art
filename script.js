const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', function (event) {
  if (event.target.className !== 'color selected') {
    const paletaSelecionada = document.querySelector('.selected');
    event.target.className = 'color selected';
    paletaSelecionada.className = 'color';
  }
});

let paletas = document.querySelectorAll('.color');
let pixels = document.querySelector('#pixel-board');
pixels.addEventListener('click', function (event) {
  for (let i = 0; i < paletas.length; i++) {
    if (paletas[i].className === 'color selected') {
      event.target.style.backgroundColor = window.getComputedStyle(paletas[i], null).getPropertyValue('background-color')
    }
  }
})

let pixelsList = document.querySelectorAll('.pixel');
let botaoLimpeza = document.querySelector('#clear-board');
botaoLimpeza.addEventListener('click', function () {
  for (let i = 0; i < pixelsList.length; i++) {
    pixelsList[i].style.backgroundColor = 'white'
  }
})


let botaoVQV = document.querySelector("#generate-board")
botaoVQV.addEventListener('click', function() {
  
  let quant = document.querySelector("#board-size");
  let receptora = document.querySelector("body > div:nth-child(5)")
  receptora.id = 'receptora'
  let newPixels = document.createElement('div')
  receptora.appendChild(newPixels);
  newPixels.id = 'pixel-board';
  
  
  if (quant.value !== ""){
    document.querySelector('#pixel-board').parentNode.removeChild(document.querySelector('#pixel-board'));
    if (quant.value < 50 && quant.value > 5){
          for (let i = 1; i<= quant.value; i++){
            let linhas = document.createElement('div');
            newPixels.appendChild(linhas)
            linhas.className = 'new-divTableRow'
            for (let j = 1; j <= quant.value; j++){
              let colunas = document.createElement('div');
              linhas.appendChild(colunas);
              colunas.className = 'pixel';
            }
          }
    }else{
      if (quant.value <= 5){
        for (let i = 1; i<= 5; i++){
          let linhas = document.createElement('div');
          newPixels.appendChild(linhas)
          linhas.className = 'new-divTableRow'
          for (let j = 1; j <= 5; j++){
            let colunas = document.createElement('div');
            linhas.appendChild(colunas);
            colunas.className = 'pixel';
          }
        }
      }else{
        for (let i = 1; i<= 50; i++){
          let linhas = document.createElement('div');
          newPixels.appendChild(linhas)
          linhas.className = 'new-divTableRow'
          for (let j = 1; j <= 50; j++){
            let colunas = document.createElement('div');
            linhas.appendChild(colunas);
            colunas.className = 'pixel'
          }
        }
      }
    }
  }else{
    alert("Board inválido!");
  }
    
  newPixels.addEventListener('click', function (event) {
    for (let i = 0; i < paletas.length; i++) {
      if (paletas[i].className === 'color selected') {
        event.target.style.backgroundColor = window.getComputedStyle(paletas[i], null).getPropertyValue('background-color')
      }
    }
  })
})
