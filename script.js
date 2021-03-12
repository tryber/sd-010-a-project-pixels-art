const colorPallet = document.querySelector('#pixel-board');
function adicionaPixel(number) {
  for (let i = 0; i < number; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.style.marginBottom = '-3px';
    pixel.style.marginTop = '-3px';
    pixel.style.boxSizing = 'border-box';
    colorPallet.appendChild(pixel);
  }
}
// Requisitos 6 e 7
function modifyColorToColorSelected(colorSelected) {
  const color = document.querySelectorAll('.color');
  if (colorSelected === undefined) {
    color[0].className = `${color[0].className} selected`;
  } else {
    const selecionada = document.querySelector(`.${colorSelected}`);
    selecionada.className = `${selecionada.className} selected`;
  }
}

function removeColorSelectedBerfore() {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < color.length; i += 1) {
    color[i].className = color[i].className.replace(/ selected/, '');
  }
}

function sendColorString(evento) {
  removeColorSelectedBerfore();
  modifyColorToColorSelected(evento.target.className.split(' ')[1]);
}

function selectColor() {
  const color = document.querySelectorAll('.color');
  color.forEach(function (item) {
    item.addEventListener('click', sendColorString);
  });
}

function getColor() {
  const colors = document.querySelector('.selected');
  console.log(colors);
  console.log(colors.style.backgroundColor);
  return colors.style.backgroundColor;
}

function preenche() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function (event) {
      const evento = event.target;
      evento.style.backgroundColor = getColor();
    });
  }
}

function clear() {
  const button = document.querySelector('#clear-board');
  const pixels = document.querySelectorAll('.pixel');
  button.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

function removeAllPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const dadOfPixel = pixels[i].parentNode;
    dadOfPixel.removeChild(pixels[i]);
  }
}

function dimensiona(a, b, valor) {
  const boardSize = a;
  const pixelBoard = b;
  const num = Math.sqrt(valor);
  boardSize.value = num;
  const widthPixelBoard = parseInt(boardSize.value, 10) * 42;
  pixelBoard.style.width = `${widthPixelBoard}px`;
}

function limitedNumberPixels(numberOfPixels) {
  let number = numberOfPixels;
  if (numberOfPixels < 25) {
    number = 25;
  }
  if (numberOfPixels > 2500) {
    number = 2500;
  }
  return number;
}

function eventos(bSize, pBoard) {
  removeAllPixels();
  const value = limitedNumberPixels(parseInt(bSize.value, 10) * parseInt(bSize.value, 10));
  dimensiona (bSize, pBoard, value);
  adicionaPixel(value);
  modifyColorToColorSelected();
  selectColor();
  preenche();
  clear();
}
function vqv() {
  const boardSize = document.getElementById('board-size');
  const pixelBoard = document.getElementById('pixel-board');
  const btnVQV = document.getElementById('generate-board');
  btnVQV.addEventListener('click', function (e) {
    if (boardSize.value.match(/\d/g) === null || parseInt(boardSize.value, 10) < 1) {
      alert('Board inválido!');
    } else {
      eventos(boardSize, pixelBoard);
    }
    e.preventDefault;
  });
}

function getRandonColors() {
  const randonColors = document.querySelectorAll('.randon');
  document.querySelector('.black').style.backgroundColor = 'black';
  randonColors[0].style.backgroundColor = `rgb(${parseInt(Math.random()*500)}, ${parseInt(Math.random()*20)}, ${parseInt(Math.random()*20)})`;
  randonColors[1].style.backgroundColor = `rgb(${parseInt(Math.random()*27/100)}, ${parseInt(Math.random()*250)}, ${parseInt(Math.random()*500)})`;
  randonColors[2].style.backgroundColor = `rgb(${parseInt(Math.random()*500)}, ${parseInt(Math.random()*400)}, ${parseInt(Math.random()*50)})`;
}

getRandonColors();
adicionaPixel(25);
modifyColorToColorSelected();
selectColor();
preenche();
clear();
vqv();
