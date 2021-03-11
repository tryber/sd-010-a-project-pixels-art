const pegaIdPrimeiraSection = document.querySelector('#color-palette');
pegaIdPrimeiraSection.firstElementChild.classList.add('selected');
//const criarBotao = document.createElement('button');
//criarBotao.id = 'clear-board';
//criarBotao.innerHTML = 'Limpar';
//const posicionaBotao = document.querySelector('main').previousElementSibling;
//posicionaBotao.appendChild(criarBotao);
//posicionaBotao.style.marginBottom = '20px';

function selecionaCorPixel() {
  pegaIdPrimeiraSection.addEventListener('click', function eventoDeClick(event) {
    if (event.target.className === 'color') {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selecionaCorPixel();

function pintarPixel() {
  const pegarBoard = document.querySelector('#pixel-board');
  pegarBoard.addEventListener('click', function pintando(event) {
    if (event.target.className === 'pixel') {
      const pegaSelected = document.querySelector('.selected');
      const color = getComputedStyle(pegaSelected).getPropertyValue('background-color');
      event.target.style.backgroundColor = color;
    }
  });
}
pintarPixel();


function resetaQuadros() {
  const pegaBotao = document.querySelector('button');
  pegaBotao.addEventListener('click', function(){
  for(let index = 0; index < 25; index += 1){
      document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
   } 
  })
}

resetaQuadros();