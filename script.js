  window.onload = function() {
  
  const caixaBlack = document.querySelector('.preto');
  const caixaRed = document.querySelector('.vermelho');
  const caixaBlue = document.querySelector('.azul');
  const caixaGreen = document.querySelector('.verde');

  caixaBlack.style.backgroundColor = 'black';
  caixaRed.style.backgroundColor = 'red';
  caixaBlue.style.backgroundColor = 'blue';
  caixaGreen.style.backgroundColor = 'green';

  caixaBlack.addEventListener('click', caixaPreta);

  function caixaPreta() {
    caixaBlack.classList.add('selected');
    caixaRed.classList.remove('selected');
    caixaBlue.classList.remove('selected');
    caixaGreen.classList.remove('selected');
  }

  caixaRed.addEventListener('click', caixaVermelha);

  function caixaVermelha() {
    caixaRed.classList.add('selected');
    caixaBlack.classList.remove('selected');
    caixaBlue.classList.remove('selected');
    caixaGreen.classList.remove('selected');
}

  caixaBlue.addEventListener('click', caixaAzul);

  function caixaAzul() {
    caixaBlue.classList.add('selected');
    caixaBlack.classList.remove('selected');
    caixaRed.classList.remove('selected');
    caixaGreen.classList.remove('selected');
  }

  caixaGreen.addEventListener('click', caixaVerde);

  function caixaVerde() {
    caixaGreen.classList.add('selected');
    caixaBlack.classList.remove('selected');
    caixaBlue.classList.remove('selected');
    caixaRed.classList.remove('selected');
  }

  const preencheCor = document.getElementById('pixel-board');
  preencheCor.addEventListener('click', corPixel);

  function corPixel(event) {
    let corSelected = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = corSelected;
  }
}
