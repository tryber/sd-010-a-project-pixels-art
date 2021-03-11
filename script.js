function renameSelected() {
  const color = document.getElementsByClassName('selected');
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
}
function greenColor() {
  const greenColorElement = document.getElementById('verde');
  greenColorElement.style.backgroundColor = 'green';
  greenColorElement.addEventListener('click', () => {
    renameSelected();
    greenColorElement.className += ' selected';
  });
}
function blueColor() {
  const blueColorElement = document.getElementById('azul');
  blueColorElement.style.backgroundColor = 'blue';
  blueColorElement.addEventListener('click', () => {
    renameSelected();
    blueColorElement.className += ' selected';
  });
}
function yellowColor() {
  const yellowColorElement = document.getElementById('amarelo');
  yellowColorElement.style.backgroundColor = 'yellow';
  yellowColorElement.addEventListener('click', () => {
    renameSelected();
    yellowColorElement.className += ' selected';
  });
}
function blackColor() {
  const blackColorElement = document.getElementById('preto');
  blackColorElement.style.backgroundColor = 'black';
  blackColorElement.addEventListener('click', () => {
    renameSelected();
    blackColorElement.className += ' selected';
  });
}
function paintBoard() {
  const board = document.querySelectorAll('.pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].addEventListener('click', () => {
      const selectedElement = document.querySelector('.selected');
      board[index].style.backgroundColor = selectedElement.style.backgroundColor;
    });
  }
}
function buttonRefresh() {
  const btn = document.getElementById('clear-board');
  const board = document.getElementsByClassName('pixel');
  btn.onclick = () => {
    for (let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = 'white';
    }
  };
}
window.onload = function onload() {
  if (document.getElementsByClassName('selected').length === 0) {
    document.getElementById('preto').className += ' selected';
  }
  greenColor();
  blueColor();
  yellowColor();
  blackColor();
  paintBoard();
  buttonRefresh();
};
