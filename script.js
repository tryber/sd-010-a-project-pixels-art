function escolherCor() {
  let paletaDeCores = document.getElementsByClassName('color');

  function clicar(event) {
    let corSelecionada = event.target;
    let UltimoSelect = document.querySelector('.selected');
    UltimoSelect.classList.remove('selected');
    corSelecionada.classList.add('selected');
  }

  for (let index = 0; index < paletaDeCores.length; index += 1) {
    paletaDeCores[index].addEventListener('click', clicar);
  }  
}

let pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', mudarCor);
}
function mudarCor(event) {
  let armazena = event.target;
  let select = document.querySelector('.selected');

  if (select === document.getElementById('cor1')) {
    armazena.style.backgroundColor = 'black';
  } else if (select === document.getElementById('cor2')) {
    armazena.style.backgroundColor = 'rgb(184, 17, 17)';
  } else if (select === document.getElementById('cor3')) {
    armazena.style.backgroundColor = 'rgb(28, 53, 129)';
  } else if (select === document.getElementById('cor4')) {
    armazena.style.backgroundColor = 'rgb(61, 61, 61)';
  }
}

function botaoLimpar() {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].removeAttribute('style');
  }
}

document.querySelector('#clear-board').addEventListener('click', botaoLimpar);
