// Requisito 2;
function creatPaddles(num) {
  for (let index = 0; index < num; index += 1) {
    const creatPaddless = document.createElement('li');
    document.getElementById('color-palette').appendChild(creatPaddless).style.listStyle = 'none';
    creatPaddless.className = 'color';
  }
}
creatPaddles(4);
function colorsPaddles() {
  const adicionandoCores = document.getElementsByClassName('color');
  adicionandoCores[0].style.backgroundColor = 'red';
  adicionandoCores[1].style.backgroundColor = 'blue';
  adicionandoCores[2].style.backgroundColor = 'purple';
  adicionandoCores[3].style.backgroundColor = 'yellow';
}
colorsPaddles();
// Requisito 3;
function colorBlack() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
}
colorBlack();
// Requisito 4;
function pixelPainting(length) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.id = 'pixel-board';
  for (let index = 1; index <= length; index += 1) {
    const created = document.createElement('ul');
    document.querySelector('div').appendChild(created);
    for (let index1 = 1; index1 <= length; index1 += 1) {
      const createdList = document.createElement('li');
      created.appendChild(createdList);
      createdList.classList = 'pixel';
    }
  }
}
pixelPainting(5);

// Requisito 5;

// Requisito 6;
document.getElementsByClassName('color')[0].classList.add('selected');

// Requisito 7;
// Ajuda do Murilo Gonçalves na explicação sobre o e
function changeClass() {
// Cria variavel;
  const elementColors = document.getElementById('color-palette');
  // Cria um evento;
  elementColors.addEventListener('click', (e) => {
    const colorElement = e.target;
    const selectElement = document.querySelector('.selected');
    selectElement.classList.remove('selected');
    colorElement.classList.add('selected');
  });
}
changeClass();
// Ajuda do Murilo Gonçalves
function clickColor() {
  const selectBoard = document.getElementById('pixel-board');
  selectBoard.addEventListener('click', (e) => {
    const pixel = e.target;
    if (pixel.localName === 'li') {
      const colorSelected = document.querySelector('.selected').style.backgroundColor;
      pixel.style.backgroundColor = colorSelected;
    }
  });
}
clickColor();
// Requisito 9
function buttonClear(name) {
  const button = document.createElement('button');
  document.getElementsByTagName('section')[0].appendChild(button);
  button.id = 'clear-board';
  button.innerText = name;
  button.addEventListener('click', () => {
    const clear = document.getElementsByClassName('pixel');
    for (let index = 0; index < clear.length; index += 1) {
      clear[index].style.backgroundColor = 'white';
    }
  });
}
buttonClear('Limpar');

// Requisito 10;
// Requisito 11;
function size() {
  const input = document.createElement('input');
  document.querySelector('section').appendChild(input).type = 'number';
  const button = document.createElement('button');
  input.id = 'board-size';
  input.min = 1;
  input.max = 50;
  document.querySelector('section').appendChild(button).innerText = 'VQV';
  button.id = 'generate-board';
  button.addEventListener('click', () => {
    const line = document.getElementById('pixel-board');
    if (input.value === '') {
      alert('Board inválido!');
      input.value = 5;
    } else if (input.value > 50) {
      input.value = 50;
    } else if (input.value < 5) {
      input.value = 5;
    } line.innerHTML = '';
    pixelPainting(input.value);
  });
}
size();

function randomColors() {
  const color = document.querySelectorAll('.color');
  for (let index = 1; index < color.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color1 = ('rgb(' + r + ',' + g + ',' + b + ')');
    const color2 = ('rgb(' + r + ',' + g + ',' + b + ')');
    const color3 = ('rgb(' + r + ',' + g + ',' + b + ')');
    const color4 = ('rgb(' + r + ',' + g + ',' + b + ')');
    const cor = [color1, color2, color3, color4];
    color[index].style.backgroundColor = cor[index];
    window.onload = color[index].style.backgroundColor;
  }
}
randomColors();
