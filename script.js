const board = document.querySelector('#pixel-board');
for (let counter = 1; counter <= 25; counter += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  board.appendChild(pixel);
}
/* esse pedaço de codigo seguinte foi baseado no conteudo disponivel em 
https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/ */

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('color')) {
        document.querySelector('.selected').classList.remove('selected')
        event.target.classList.add('selected')
    } 
});

/* para realizar os passos seguintes me baseei em
https://stackoverflow.com/questions/25238153/how-to-get-background-color-property-value-in-javascript */

document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.yellow').style.backgroundColor = 'rgb(' + parseInt(Math.random()*255) + ',' + parseInt(Math.random()*255) + ',' + parseInt(Math.random()*255) +')';
document.querySelector('.red').style.backgroundColor = 'rgb(' + parseInt(Math.random()*255) + ',' + parseInt(Math.random()*255) + ',' + parseInt(Math.random()*255) +')';
document.querySelector('.blue').style.backgroundColor = 'rgb(' + parseInt(Math.random()*255) + ',' + parseInt(Math.random()*255) + ',' + parseInt(Math.random()*255) +')';
document.querySelector('#pixel-board').addEventListener('click', function(event) {
    let selectedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
});

let button = document.createElement('button');
button.id = 'clear-board';
document.querySelector('#divbutton').appendChild(button);
button.innerText = 'Limpar';
button.addEventListener('click', function() {
    let pixels = document.querySelectorAll('.pixel');
    for (item of pixels) {
        item.style.backgroundColor = 'rgb(255, 255, 255)'
    }
})
const inputPixel = document.createElement('input');
inputPixel.id = 'board-size';
document.querySelector('#divbutton').appendChild(inputPixel);
const buttonSize = document.createElement('button');
buttonSize.id = 'generate-board';
document.querySelector('#divbutton').appendChild(buttonSize);
buttonSize.innerText = 'VQV';
inputPixel.setAttribute('type', 'number');
inputPixel.max = '50';
inputPixel.min = '1';
function ifClick() {
  if (inputPixel.value === '') {
    window.alert('Board inválido!')
  }
  else {
    removeBlocks();  
    setSize();
  }
}
function setSize() {
  let value = parseInt(inputPixel.value);
 
  board.style.width = (value * 40 + value+ 25) + 'px';
  for (let numbers = 1; numbers <= value * value; numbers += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }

}
function removeBlocks() {
    let pixels = document.querySelectorAll('.pixel');
    for (item of pixels) {
        board.removeChild(item)
    }
}
buttonSize.addEventListener('click', ifClick);