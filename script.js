let alreadyCreated = false;
let actualSize = [];
let colorpalleteButtons = document.getElementsByClassName('color');
let pixelBoard = document.getElementById('pixel-board');
let input = document.getElementById('board-size');
let pixelBlocks = 0;
if (
  sessionStorage.getItem('boardSize') == null ||
  sessionStorage.getItem('boardSize') == ''
) {
  pixelBlocks = 5;
} else {
  pixelBlocks = parseInt(sessionStorage.getItem('boardSize'));
}
window.onload =function(){
    createPixelBlocks(pixelBlocks**2, pixelBlocks);
    generateColor();

    for (let index = 1; index < colorpalleteButtons.length; index++) {
        colorpalleteButtons[index].style.backgroundColor=colorpalleteButtons[index].id;
    }

}
function createPixelBlocks(size, lineSize) {
  for (let index = 1; index < size + 1; index++) {
    pixelSquare = document.createElement('div');
    pixelSquare.style.width = '40px';
    pixelSquare.style.height = '40px';
    pixelSquare.style.border = '1px solid black';
    pixelSquare.style.display = 'inline-block';
    pixelSquare.style.backgroundColor = 'white';
    pixelSquare.classList.add('pixel');
    pixelBoard.appendChild(pixelSquare);
    if (index % lineSize == 0 && index != 0) {
      let breakLine = document.createElement('br');
      pixelBoard.appendChild(breakLine);
      breakLine.classList.add('breakLinePixel');
    }
    alreadyCreated = true;
    actualSize.push(size);
    actualSize.push(lineSize);
  }
}
pixelBoard.addEventListener('click', fillPixel);

function generateColor() {
  for (let index = 1; index < colorpalleteButtons.length; index++) {
    colorpalleteButtons[index].id =
      'rgb(' +
      Math.ceil(Math.random() * 25) +
      ',' +
      Math.ceil(Math.random() * 255) +
      ',' +
      Math.ceil(Math.random() * 255) +
      ')';
  }
}

function fillPixel(e) {
  let event = e;
  event.target.style.backgroundColor = document.getElementsByClassName(
    'selected'
  )[0].id;
}
colorpalleteButtons[0].classList.add('selected');
colorpalleteButtons[0].addEventListener('click', chooseColor);
colorpalleteButtons[1].addEventListener('click', chooseColor);
colorpalleteButtons[2].addEventListener('click', chooseColor);
colorpalleteButtons[3].addEventListener('click', chooseColor);

function chooseColor(e) {
  if (e.target.id == colorpalleteButtons[0].id) {
    for (let index = 0; index < colorpalleteButtons.length; index++) {
      if (index == 0) {
        colorpalleteButtons[index].classList.add('selected');
      } else {
        colorpalleteButtons[index].classList.remove('selected');
      }
    }
  } else if (e.target.id == colorpalleteButtons[1].id) {
    for (let index = 0; index < colorpalleteButtons.length; index++) {
      if (index == 1) {
        colorpalleteButtons[index].classList.add('selected');
      } else {
        colorpalleteButtons[index].classList.remove('selected');
      }
    }
  } else if (e.target.id == colorpalleteButtons[2].id) {
    for (let index = 0; index < colorpalleteButtons.length; index++) {
      if (index == 2) {
        colorpalleteButtons[index].classList.add('selected');
      } else {
        colorpalleteButtons[index].classList.remove('selected');
      }
    }
  } else if (e.target.id == colorpalleteButtons[3].id) {
    for (let index = 0; index < colorpalleteButtons.length; index++) {
      if (index == 3) {
        colorpalleteButtons[index].classList.add('selected');
      } else {
        colorpalleteButtons[index].classList.remove('selected');
      }
    }
  }
}

document.getElementById('clear-board').addEventListener('click', clear);

function clear() {
  pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].style.backgroundColor = 'white';
  }
}
let submitButton = document.getElementById('generate-board');
submitButton.addEventListener('click', hookValue);
function hookValue() {
  if (
    input.value == '' ||
    parseInt(input.value) > 50 ||
    parseInt(input.value) < 0
  ) {
    alert('Board inválido!');
  }
  sessionStorage.setItem('boardSize', input.value);
}
