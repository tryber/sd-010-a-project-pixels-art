const getBlack = document.querySelector('#black');
const getColor1 = document.querySelector('#color1');
const getColor2 = document.querySelector('#color2');
const getColor3 = document.querySelector('#color3');

// Função usada de base retirada de: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

function generateColor() {
  const r = (Math.random() * 255);
  const g = (Math.random() * 255);
  const b = (Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function getColor() {
  getBlack.style.backgroundColor = 'black';
  getColor1.style.backgroundColor = generateColor();
  getColor2.style.backgroundColor = generateColor();
  getColor3.style.backgroundColor = generateColor();
}

const selectedClass = 'color selected';

function setColorBlack() {
  getBlack.className = selectedClass;
  getColor3.className = 'color';
  getColor1.className = 'color';
  getColor2.className = 'color';
}

getBlack.addEventListener('click', setColorBlack);

function setColor3() {
  getBlack.className = 'color';
  getColor3.className = selectedClass;
  getColor1.className = 'color';
  getColor2.className = 'color';
}

getColor3.addEventListener('click', setColor3);

function setColor1() {
  getBlack.className = 'color';
  getColor3.className = 'color';
  getColor1.className = selectedClass;
  getColor2.className = 'color';
}
getColor1.addEventListener('click', setColor1);

function setColor2() {
  getBlack.className = 'color';
  getColor3.className = 'color';
  getColor1.className = 'color';
  getColor2.className = selectedClass;
}

getColor2.addEventListener('click', setColor2);

function colorPixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    const localPixel = event.target;
    if (localPixel.className === 'pixel') {
      localPixel.style.backgroundColor = selectedColor;
    }
  });
}

function clear() {
  const pixel = document.getElementsByClassName('pixel');
  const bttn = document.getElementById('clear-board');

  bttn.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

window.onload = () => {
  getColor();
  colorPixel();
  clear();
  generateColor();
};
