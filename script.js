//Código feito com ajuda do código do Luiz Putinatti

// criando o click
let corClicada = document.getElementsByClassName('color');

//adicionando o click
for (let index = 0; index < corClicada.length; index = index + 1) {
    corClicada[index].addEventListener('click', removeSelecao);
}

//removendo a selected de todas as classes
function removeSelecao (evente) {
    let classeRemovida = document.getElementsByClassName('selected');
    classeRemovida[0].classList.remove('selected');

    let eventeTarget = evente.target;
    eventeTarget.classList.add('selected');
}

//incluindo click nos pixels
let pixelSelecionado = document.getElementsByClassName('pixel');

for(let index = 0; index < pixelSelecionado.length; index = index + 1) {
    pixelSelecionado[index].addEventListener('click', corDoPixel);
}

//clicando no pixel
function corDoPixel (event) {
    let eventTarget = event.target;
    eventTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

//limpando quasro de pixels
let clearPixels = document.getElementById('clear-board');

clearPixels.addEventListener('click', clearBoard);

function clearBoard () {
    let blockPixels = document.getElementsByClassName('pixel');
    for (let index = 0; index< blockPixels.length; index += 1){
        blockPixels[index].style.backgroundColor = 'white';
    }

} 