//Requesito 2 e 3
let paletColors = ['black', '#14213d', '#fca311', '#e5e5e5'];
let tableColors = document.createElement('tr');
document.querySelector('table#color-palette').appendChild(tableColors);

for (let index = 0; index < paletColors.length; index += 1) {
  document.querySelector('tr').appendChild(document.createElement('td')).className = 'color';
  document.getElementsByClassName('color')[index].style.background = paletColors[index];
}

//Requesito 4 e 5
let amountFrame = 6

for (let index = 1; index < amountFrame; index += 1) {
  let framePixels = document.createElement('tr');
  document.getElementById('pixel-board').appendChild(framePixels);

  for (let counter = 1; counter < amountFrame; counter += 1) {
    document.getElementsByTagName('tr')[index].appendChild(document.createElement('td')).className = 'pixel';
  }
}

//Requesito 6 e 7
window.onload = function () {
  document.getElementsByClassName('color')[0].className += ' selected';
  
}

let colorSelect = document.getElementsByClassName('color');

for (let index = 0; index < colorSelect.length; index += 1) {
  const clickColors = colorSelect[index];
  clickColors.addEventListener('click', changeSelect)
}

function changeSelect (e) {
  for (let index = 0; index < colorSelect.length; index += 1) {
    const removeClass = colorSelect[index];
    removeClass.classList.remove('selected');
  }

  e.target.classList.add('selected');
}

//Requesito 8
let paintFrame = document.getElementsByClassName('pixel');

for (let index = 0; index < paintFrame.length; index += 1) {
  const selectFrame = paintFrame[index];
  selectFrame.addEventListener('click', changeFrame);
}

function changeFrame (e) {
  e.target.style.background = document.querySelector('.selected').style.background;
}

//Requesito 9
let button = document.getElementById('clear-board');
let reset = document.querySelectorAll('.pixel')

button.addEventListener('click', function () {
  for (let index = 0; index < reset.length; index += 1) {
    reset[index].style.background = 'white';
  }
})
