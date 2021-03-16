const pixelColor = document.getElementById('pixel-board');
function palette(){
const paletteColors = document.getElementById('color-palette');
for (let index = 0; index < 4; index += 1){
let colorsPalette = document.createElement('div');
colorsPalette.className = 'color';
paletteColors.appendChild(colorsPalette);
}
}
palette();


const colorDiv = document.getElementsByClassName('color');
colorDiv[0].style.backgroundColor = 'black';
colorDiv[1].style.backgroundColor = 'red';
colorDiv[2].style.backgroundColor = 'blue';
colorDiv[3].style.backgroundColor = 'purple';


function pixels(){
const pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 5; index += 1){
    const pixelDiv = document.createElement('div');
    pixelBoard.appendChild(pixelDiv);
    for (let index = 0; index <5; index += 1){
        const pixelDiv2 = document.createElement('div');
        pixelDiv.appendChild(pixelDiv2);
        pixelDiv2.classList.add('pixel');
    }
}
}
pixels();

function blackColor(){
    const colorDiv = document.getElementsByClassName('color')[0].classList.add('selected');
}
blackColor();

function colorRemove(){
    const paletteColors = document.getElementById('color-palette');
    const paletteColorsByClass = document.querySelectorAll(".color");
    for (let index = 0; index < paletteColorsByClass.length; index += 1){
        const colorDiv = document.getElementsByClassName('color')[index].classList.remove('selected');
        const divSelected = paletteColors.children;
    }

}

const paletteColors = document.getElementById('color-palette');
paletteColors.addEventListener('click', (event) => {
    colorRemove();
    event.target.classList.add('selected');
});

function getColor(){
    const pixelColor = document.getElementById('pixel-board');
    const pixelColorByClass = document.querySelectorAll('.pixel');
    const colorsPalette = document.getElementsByClassName('color');
    pixelColor.addEventListener('click', event => {
        if (event.target.className == 'pixel') {
            event.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
        } else { alert ('Escolha um pixel');
    }
    });
}
getColor();

function clean(){
    const pixelColor = document.getElementsByClassName('pixel');
    const clearButton = document.getElementById('clear-board');
    clearButton.addEventListener('click', event => {
        for (let index = 0; index < pixelColor.length; index += 1){
            pixelColor[index].style.backgroundColor = 'white';
        }
    });
}
clean();