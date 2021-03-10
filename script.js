let color = document.querySelectorAll('.color');
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'pink';
color[2].style.backgroundColor = 'yellow';
color[3].style.backgroundColor = 'purple';

let pixel = document.querySelector('#pixel-board');
let size = 5;
for (let index = 1; index <= size; index += 1) {
    let box = document.createElement('div');
    pixel.appendChild(box);
    for (let index2 = 1; index2 <= size; index2 += 1) {
        let line = document.createElement('div');
        box.appendChild(line);
        line.className = 'pixel';
    }
}

//requisito 6 (ajuda mútua)
color[0].className += ' selected';

//requisito 7 (ajuda mútua e em especial o Murilo Gonçalves)
function changeClass () {
    let elementColors = document.querySelector('#color-palette');
    elementColors.addEventListener('click', function (e) {
    let colorElement = e.target;
    let selectElement = document.querySelector('.selected');
    selectElement.classList.remove('selected');
    colorElement.classList.add('selected');
    })
}
changeClass()

//requisito 8 (ajuda mútua e em especial o Murilo Gonçalves)
function clickColor() {
    let selectBoard = document.querySelector('#pixel-board');
    selectBoard.addEventListener('click', function(e) {
        let pixel = e.target;
        console.log(e);
        if (pixel.className === 'pixel') {
            let colorSelected = document.querySelector('.selected').style.backgroundColor;
            pixel.style.backgroundColor = colorSelected;
        }
    })
}
clickColor();