let corAtual = 'black';

function selecionaPreto() {
  const local = document.getElementsByClassName('color');
  for (let index = 0; index < 4; index += 1) {
    local[index].classList.remove('selected');
  }
  document.getElementById('cor-preto').classList.add('selected');
  corAtual = 'black';
}

function selecionaLaranja() {
  const local = document.getElementsByClassName('color');
  for (let index = 0; index < 4; index += 1) {
    local[index].classList.remove('selected');
  }
  document.getElementById('cor-laranja').classList.add('selected');
  corAtual = 'orange';
}

function selecionaAzul() {
  const local = document.getElementsByClassName('color');
  for (let index = 0; index < 4; index += 1) {
    local[index].classList.remove('selected');
  }
  document.getElementById('cor-azul').classList.add('selected');
  corAtual = 'blue';
}

function selecionaMarrom() {
  const local = document.getElementsByClassName('color');
  for (let index = 0; index < 4; index += 1) {
    local[index].classList.remove('selected');
  }
  document.getElementById('cor-marrom').classList.add('selected');
  corAtual = 'rgb(102, 66, 40)';
}

// Aprendi essa função no site https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
// Foi muito complicado entender o "this.id" e o "clicked_id", mas consegui!
function pintarPixel(nomeId) {
  document.getElementById(nomeId).style.backgroundColor = corAtual;
}

function apagarTudo() {
  const borracha = document.getElementsByClassName('pixel');
  for (let index = 0; index < borracha.length; index += 1) {
    borracha[index].style.backgroundColor = 'white';
  }
}
