function makeTable(numeroMatriz) {
  const getSquare = document.getElementById('pixel-board');
  let makeRow = document.createElement('tr');
  let makeSquare = document.createElement('td');
  const tdClass = 'pixel';
  for (let index = 0; index < numeroMatriz; index += 1) {
    makeRow = document.createElement('tr');
    getSquare.appendChild(makeRow);
    for (let indexSquare = 0; indexSquare < numeroMatriz; indexSquare += 1) {
      makeSquare = document.createElement('td');
      getSquare.appendChild(makeSquare);
      makeSquare.className = tdClass;
    }
  }
}

function changeSelectedClass() {
  let getColor = document.getElementsByClassName('selected')[0];
  const blackClick = document.getElementsByClassName('color')[0];
  const purpleClick = document.getElementsByClassName('color')[1];
  const greyClick = document.getElementsByClassName('color')[2];
  const silverClick = document.getElementsByClassName('color')[3];

  blackClick.addEventListener('click', () => {
    getColor = document.getElementsByClassName('selected')[0];
    getColor.classList.remove('selected');
    blackClick.classList.add('selected');
  });

  purpleClick.addEventListener('click', () => {
    getColor = document.getElementsByClassName('selected')[0];
    getColor.classList.remove('selected');
    purpleClick.classList.add('selected');
  });

  greyClick.addEventListener('click', () => {
    getColor = document.getElementsByClassName('selected')[0];
    getColor.classList.remove('selected');
    greyClick.classList.add('selected');
  });

  silverClick.addEventListener('click', () => {
    getColor = document.getElementsByClassName('selected')[0];
    getColor.classList.remove('selected');
    silverClick.classList.add('selected');
  });
}

function clickEvent(e) {
  const getColorToPaint = document.getElementsByClassName('selected')[0];
  const value = e.target;
  const setColor = window.getComputedStyle(getColorToPaint).getPropertyValue('background-color');
  value.style.backgroundColor = setColor;
}

function paintSquares() {
  const squareToPaint = document.querySelectorAll('.pixel');
  for (let index = 0; index < squareToPaint.length; index += 1) {
    squareToPaint[index].addEventListener('click', clickEvent);
  }
}

function clearPixels() {
  const getBtn = document.querySelector('#clear-board');
  const getAllSquares = document.querySelectorAll('.pixel');

  getBtn.addEventListener('click', () => {
    for (let index = 0; index < getAllSquares.length; index += 1) {
      getAllSquares[index].style.backgroundColor = 'white';
    }
  });
}

function setDimension() {
  const getOkbtn = document.getElementById('generate-board');
  getOkbtn.addEventListener('click', () => {
    let setNumberMatriz = parseInt(document.getElementById('board-size').value);
    if (!setNumberMatriz) {
      alert('Board inválido!');
    }
    if (setNumberMatriz < 5) {
      setNumberMatriz = 5;
    }
    if (setNumberMatriz > 50) {
      setNumberMatriz = 50;
    }
    removeTable();
    makeTable(setNumberMatriz);
  });
}

function removeTable() {
  const getTable = document.getElementById('pixel-board').children;
  const transforToList = Array.from(getTable);
  transforToList.forEach(((child) => child.remove()));
}

function randomColors() {
  const getPalette = document.querySelector('#color-palette');
  const paletteArray = Array.from(getPalette.children);
  for (let index = 1; index < paletteArray.length; index += 1) {
    document.getElementsByClassName(paletteArray[index]
      .classList)[0]
      .style.backgroundColor = `rgb(${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)})`;
  }
}

window.onload = function () {
  setDimension();
  makeTable(5);
  changeSelectedClass();
  paintSquares();
  clearPixels();
  randomColors();
};
