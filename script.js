// Gera cores aleatórias - Requisito 12 (bônus)

function randomColors() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}
function distributeRandomColors() {
  document.getElementById('green').style.backgroundColor = randomColors();
  document.getElementById('magenta').style.backgroundColor = randomColors();
  document.getElementById('blue').style.backgroundColor = randomColors();
}

window.onload = function initialize() {
  distributeRandomColors();
};

// Atribui a cor preta de forma dinâmica à primeira cor da paleta de cores

function colorizePalette() {
  const colorOne = document.getElementById('black');
  colorOne.style.backgroundColor = 'black';
}
colorizePalette();

// Configura de forma dinâmica a cor das divs com classe .pixel no pixel-board

const colorPixel = document.getElementsByClassName('pixel');
function colorizePixelBoard() {
  for (let key = 0; key < colorPixel.length; key += 1) {
    colorPixel[key].style.backgroundColor = 'white';
  }
}
colorizePixelBoard();

// Limpa o pixel board com o botão Limpar - Requisito 9

function clearPixelColor() {
  for (let key = 0; key < colorPixel.length; key += 1) {
    if (colorPixel[key].style.backgroundColor !== 'white') {
      colorPixel[key].style.backgroundColor = 'white';
    }
  }
}
const clearBtn = document.getElementById('clear-board');
clearBtn.addEventListener('click', clearPixelColor);

// Requisito 8 - utilizei como base a solução do colega Luiz Putinatti - ver link da thread no Slack:
// https://trybecourse.slack.com/archives/C01L16B9XC7/p1615477460125900

function changePixelColor(e) {
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

const clickOnpixel = document.getElementsByClassName('pixel');
for (let key = 0; key < clickOnpixel.length; key += 1) {
  clickOnpixel[key].addEventListener('click', changePixelColor);
}

// Requisito 7 - a partir de insights de conversa com o colega Luan Ramalho

const colorBlack = document.getElementsByClassName('color')[0];
const colorTwo = document.getElementsByClassName('color')[1];
const colorThree = document.getElementsByClassName('color')[2];
const colorFour = document.getElementsByClassName('color')[3];

function colorTwoSelected() {
  if (colorTwo.classList.contains('selected')) {
    colorBlack.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFour.classList.remove('selected');
  }
}
function colorThreeSelected() {
  if (colorThree.classList.contains('selected')) {
    colorBlack.classList.remove('selected');
    colorTwo.classList.remove('selected');
    colorFour.classList.remove('selected');
  }
}

function colorFourSelected() {
  if (colorFour.classList.contains('selected')) {
    colorBlack.classList.remove('selected');
    colorTwo.classList.remove('selected');
    colorThree.classList.remove('selected');
  }
}

function colorBlackSelected() {
  if (colorBlack.classList.contains('selected')) {
    colorTwo.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFour.classList.remove('selected');
  }
}

function colorTwoSelection() {
  colorTwo.classList.add('selected');
  colorTwoSelected();
}
colorTwo.addEventListener('click', colorTwoSelection);

function colorThreeSelection() {
  colorThree.classList.add('selected');
  colorThreeSelected();
}
colorThree.addEventListener('click', colorThreeSelection);

function colorFourSelection() {
  colorFour.classList.add('selected');
  colorFourSelected();
}
colorFour.addEventListener('click', colorFourSelection);

function colorBlackSelection() {
  colorBlack.classList.add('selected');
  colorBlackSelected();
}
colorBlack.addEventListener('click', colorBlackSelection);

/* Referência usada para a função randomColors:
--> https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
Referência sobre event.target:
--> https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
Referências sobre funções, loops for, eventos, manipulação do DOM:
--> DUCKETT, Jon. JavaScript & JQuery: desenvolvimento de interfaces web interativas. Rio de Janeiro: AltaBooks, 2015. (Base para entender integração de JS com HTML e CSS)
--> FLANAGAN, David. JavaScript: the defintive guide. 7 ed. Sebastopol: O'Reilly, 2020.
--> Agradecimento especial ao colega Luan Ramalho pela paciência com as minhas dúvidas!! O colega me ajudou muitíssimo a dar uma luz sobre como cumprir o requisito 7. =))
*/
