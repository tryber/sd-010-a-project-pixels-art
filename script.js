// Requisito 12
// Solução obtida e adaptada de: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function geradorCores (){
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
  }

const black = document.querySelectorAll('.color')[0];
black.className += ' selected';
window.onload = black;
const red = document.querySelectorAll('.color')[1];
const blue = document.querySelectorAll('.color')[2];
const green = document.querySelectorAll('.color')[3];

black.style.backgroundColor = 'black';
red.style.backgroundColor = geradorCores();
blue.style.backgroundColor = geradorCores();
green.style.backgroundColor = geradorCores();

// Requisito 07
//Contribuição de Anderson Nascimento / Guillherme Dornelles / Pollyana Oliveira
function trocaCor(evento) {
  const elementos = document.querySelectorAll('.color');
  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index].classList === 'selected');
    elementos[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

const select = document.getElementById('color-palette');
select.addEventListener('click', trocaCor);

function colorir(evento) {
  const capturar = document.getElementsByClassName('selected')[0];
  const corColorir = capturar.style.backgroundColor;
  evento.target.style.backgroundColor = corColorir;
}

const quadrados = document.getElementById('pixel-board');
quadrados.addEventListener('click', colorir);


// Requisito 09

function limpar(evento) {
  const caixas = document.getElementsByClassName('pixel');
  console.log(caixas);
  for (let index = 0; index < caixas.length; index += 1) {
    caixas[index].style.backgroundColor = 'white';
  }
}

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', limpar);

// Contribuição Lucas Pedroso
const bt = document.getElementById('generate-board');
bt.addEventListener('click', verificar);
function verificar () {
  let inp = document.getElementById('board-size');
  let valor = parseInt(inp.value);
  console.log(valor);
  console.log(typeof(valor));
  if (inp.max == 50){
    console.log(true);
  }
  if (parseInt(inp.value) < 5){
    valor = 5;
    console.log(valor);
  }
  if (inp.value === ''){
    alert('Board inválido!');
  }
  if (parseInt(inp.value) > parseInt(inp.max)){
    valor = 50;
    console.log(valor);
  }
  criarTabela(valor);
}
// Contribuição Lucas Pedroso
function criarTabela(v) {
  console.log(v);
  let tab = document.querySelector('#pixel-board');
  tab.innerHTML = '';
  for(let i = 0; i < v; i++){
    let linha = document.createElement('tr');
    tab.appendChild(linha);
    console.log(linha);
    for(let j = 0; j < v; j++){
      let coluna = document.createElement('td');
      coluna.classList.add('pixel');
      linha.appendChild(coluna);
      console.log(coluna);
    }
  }
}
