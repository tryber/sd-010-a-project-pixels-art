let rows = 5 //define quantidade de linhas 
let columns = 5 //define quantidade de colunas

function tableElements() {
    const tableListItens = document.querySelector('#pixel-board');
    for(let index1 = 0; index1 < rows; index1 += 1) {
        const tableColunms = document.createElement('tr') // cria linhas
        for(let index2 = 0; index2 < columns; index2 += 1) {
            const tableListItemRow = document.createElement('td'); //cria colunas
            tableListItemRow.className = 'pixel';
            tableColunms.appendChild(tableListItemRow);
        }
        tableListItens.appendChild(tableColunms)
    }
}

tableElements()

function selectColor() {
    const colors = document.querySelectorAll('.color');
    for(let index1 = 0; index1 < colors.length; index1 += 1) {
        colors[index1].addEventListener('click', (e) => {
            for(let index2 = 0; index2 < colors.length; index2 += 1) {
                colors[index2].classList.remove('selected');
            }
            e.target.classList.add('selected');
        });
    }
}

selectColor();

function paintPixel() {
    const pixels = document.querySelectorAll('.pixel');
    for(let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', (e) => {
            const selected = document.querySelector('.selected');
            e.target.style.backgroundColor = selected.style.backgroundColor;
        });
        
    }
}

paintPixel();

function resetTable() {
    const table = document.querySelector('main');
    const button = document.querySelector('#clear-board');
    button.addEventListener('click', () => {
        const pixel = document.querySelectorAll('.pixel');
        for(let index = 0; index < pixel.length; index += 1){
            pixel[index].style.backgroundColor = 'white';
        }
    });
}

resetTable()