function creatingTitle () {
  const tit = document.querySelector('#title');
  tit.innerHTML = 'Paleta de Cores';
}
creatingTitle();

function creatingPalleteColors (qtd) {
  for (let i = 0; i < qtd; i += 1) {
    const sectionMain = document.querySelector('section');
    const createDiv = document.createElement('span');
    // cor aleatoria: https://qastack.com.br/programming/1484506/random-color-generator
    const color = '#' + Math.floor (Math.random () * 16777215) .toString (16);
      createDiv.style.backgroundColor = color;
      createDiv.className = 'color';
      sectionMain.appendChild(createDiv);
  }
}
creatingPalleteColors(4);

window.onload = function firstBlack () {
  const firstSpan = document.querySelectorAll('span');
  const createClassName = document.querySelector('.color');
  for (let i = 0; i < firstSpan.length; i += 1) {
    if (i === 0) {
      firstSpan[i].style.backgroundColor = 'rgb(0,0,0)';
      firstSpan[i].classList.add('selected');
    }
  } 
}

function pixelBoard (vertical, horizontal) {
  const sectionMain = document.querySelector('#pixel-board');
  for (let i = 0; i < vertical; i += 1) {
    const createSection = document.createElement('section');
    for (let j = 0; j < horizontal; j += 1) {
      const createDiv = document.createElement('div');
      createDiv.className = 'pixel';
      createSection.appendChild(createDiv);
      sectionMain.appendChild(createSection);
    }
  }
}
pixelBoard(5, 5);


function gettingColorPixel () {
  const spanColor = document.querySelectorAll('span');
  for (let i = 0; i < spanColor.length; i += 1) {
    if (spanColor[i].className === 'color') {
      spanColor[i].addEventListener('click',function(event) {
        event.target.classList.add('selected');
        for (let j = 0; j < spanColor.length; j += 1) {
          if (spanColor[j] !== spanColor[i]) {
            spanColor[j].className = 'color';
          }
        }
        })
    }
  }
}
gettingColorPixel();

function changeBGColor () {
  const sectionPixel = document.querySelectorAll('.pixel');
  const sectionSelected = document.getElementsByClassName('color selected');
  for (let i = 0; i < sectionPixel.length; i += 1) {
    sectionPixel[i].addEventListener('click',function(eventN) {
      eventN.target.style.backgroundColor = sectionSelected[0].style.backgroundColor;
    })
  }
}
changeBGColor();

function clearAll() {
  const createButtonClear = document.createElement('button');
  const gettingClassFather = document.querySelector('#btn');
  const sectionPixelClear = document.querySelectorAll('.pixel');
  createButtonClear.innerHTML = 'Limpar tela';
  createButtonClear.id = 'clear-board';
  gettingClassFather.appendChild(createButtonClear);
  createButtonClear.addEventListener('click', function() {
    for (let i = 0; i < sectionPixelClear.length; i += 1) {
      sectionPixelClear[i].style.backgroundColor = 'rgb(255,255,255)';
    }
  })
}
clearAll();

function inAndOutput () {
  const headerMain = document.querySelector('header');
  const inputHorizontal = document.createElement('input');
  const inputVertical = document.createElement('input');
  const createSectionInput = document.createElement('section');
  inputHorizontal.innerText = 'Min. x Max.';
  inputHorizontal.style.marginLeft = '30px';
  inputHorizontal.width = '30px'
  inputVertical.innerText = 'Min. x Max.';
  inputVertical.style.marginLeft = '30px';
  inputVertical.width = '30px';
  createSectionInput.appendChild(inputHorizontal);
  createSectionInput.appendChild(inputVertical);
  headerMain.appendChild(createSectionInput);
}