function colorsPalete(colors) {
  for (let index = 0; index < colors.length; index += 1) {
    // Acessando cada coluna de uma tabela: https://www.w3schools.com/jsref/prop_html_style.asp
    document.getElementsByTagName('td')[index].style.backgroundColor = colors[index];
  }
}

const colors = ['black', 'blue', 'green', 'pink'];
colorsPalete(colors);

// Adicionando uma nova classe no elemento https://www.w3schools.com/howto/howto_js_add_class.asp
document.getElementsByClassName('color')[0].classList.add('selected');

function receiveClick(event) {
  // Removendo a classe de seleção do elemento anterior https://www.w3schools.com/howto/howto_js_remove_class.asp
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  event.target.classList.add('selected');
}

const selected = document.getElementsByClassName('color');
// Adicionando o evento para cada elemento da lista https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
for (let index = 0; index < selected.length; index += 1) {
  selected[index].addEventListener('click', receiveClick);
}

function receiveColor(event) {
  const { target } = event; // Corrigindo declaração e atribuição de cor para o evento de acordo com o eslint https://eslint.org/docs/rules/prefer-destructuring
  const selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
  target.style.backgroundColor = selectedColor;
}

const pixelSelected = document.getElementsByClassName('pixel');
for (let index = 0; index < pixelSelected.length; index += 1) {
  pixelSelected[index].addEventListener('click', receiveColor);
}

function clearBoard() {
  for (let index = 0; index < pixelSelected.length; index += 1) {
    pixelSelected[index].style.backgroundColor = 'white';
  }
}

document.getElementById('clear-board').addEventListener('click', clearBoard);
