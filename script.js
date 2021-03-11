// Cria o quadro com 25 pixels
let cell = document.getElementById('pixel-board');
for (let line = 1; line <= 25; line += 1) {    
    let divPosition = document.createElement('div');
    divPosition.className = 'pixel';
    cell.appendChild(divPosition);    
}

// Clicar em uma das cores da paleta faz com que ela seja selecionada
let colors = document.querySelectorAll('.color');
for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function(e) {
        let currentSelected = document.querySelector('.selected')
        currentSelected.classList.remove('selected')
        //let selection = e.target.className += ' selected '
        e.target.classList.add('selected')
    })
}

// Clicar em um pixel o pinta com a cor selecionada
let currentPixel = document.getElementsByClassName('pixel')
for (let index2 = 0; index2 < currentPixel.length; index2 += 1) {
    currentPixel[index2].addEventListener('click', function(e) {
    let element = document.querySelector('.selected')
    let selectedColor = window.getComputedStyle(element).getPropertyValue('background-color');
    //currentPixel[index2].innerHTML = selectedColor;
    e.target.style.backgroundColor = selectedColor;
})
}

// Clicar no botão limpa todos os pixels
let clear = document.querySelector('#clear-board');
let resetPixel = document.querySelectorAll('.pixel')
clear.addEventListener('click', function () {
    for (let index3 = 0; index3 < resetPixel.length; index3 += 1) {
        resetPixel[index3].style.backgroundColor = 'white'
        resetPixel[index3].classList.add()
    }
})