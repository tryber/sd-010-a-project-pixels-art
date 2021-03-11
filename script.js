//  referência: Jodiel-Briesemeister. (https://github.com/tryber/sd-010-a-project-pixels-art/pull/119/files);
function palette() {
  const color = document.querySelectorAll('.color');
  const arrayColors = ['black', 'blue', 'yellow', 'green'];
  for (let index = 0; index < color.length; index += 1) {
    color[index].style.backgroundColor = arrayColors[index]; // cada uma das paletas fica com a cor correspondente ao array.
    if (arrayColors[index] === 'black') { //  seleciona a cor inicial preta.
      color[index].className += ' selected';
    }
  }
}

window.onload = palette;

function getColor() {
  const colorArray = document.querySelector('#color-palette');
  colorArray.addEventListener('click', (event) => { //  adiciona listener do evento click nas paletas.
    const selectedColor = event.target; //  guarda a cor da paleta em que clicou.
    document.querySelector('.selected').className = 'color';
    selectedColor.className += ' selected'; //  adiciona a classe selected à cor da paleta que clicou.
  });
}

getColor();

function setColor() {
  const pixelTable = document.querySelector('#pixel-board'); // seleciona a table.
  pixelTable.addEventListener('click', (event) => {
    const selectPixel = event.target; //  guarda o pixel clicado na table.
    const color = document.querySelector('.selected').style.backgroundColor; // seleciona o background color da paleta que clicou.
    selectPixel.style.backgroundColor = color; // adiciona ao pixel clicado a cor do background da paleta.
  });
}

setColor();

function clearBoard() {
  const cleanBtn = document.querySelector('#clear-board'); // seleciona pelo id o botão.
  cleanBtn.addEventListener('click', () => { // captura o evento clico no botão.
    const board = document.querySelectorAll('.pixel'); // seleciona todas as classes pixel (na tabela).
    for (let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = 'white'; //  todos os pixels ficam com o background branco.
    }
  });
}

clearBoard();
