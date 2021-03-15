function paleta() {
  for (let index = 1; index <= 4; index += 1) {
    const tagDiv = document.createElement('div');
    const tagPai = document.querySelector('#color-palette');
    tagPai.appendChild(tagDiv);
    tagDiv.classList.add('color');
  }
}
paleta();

function coresDaTabela() {
  const cores = document.getElementsByClassName('color');
  cores[0].style.backgroundColor = 'black';
  cores[1].style.backgroundColor = 'blue';
  cores[2].style.backgroundColor = 'pink';
  cores[3].style.backgroundColor = 'green';
}
coresDaTabela();

function quadroDePixels() {
  for (let index1 = 1; index1 <= 5; index1 += 1) {
    const pixelsPai = document.createElement('div');
    const tagPai = document.getElementById('pixel-board');
    tagPai.appendChild(pixelsPai);
    for (let index2 = 1; index2 <= 5; index2 += 1) {
      const pixels = document.createElement('div');
      pixelsPai.appendChild(pixels);
      pixels.classList.add('pixel');
    }
  }
}
quadroDePixels();

function corBlack() {
  document.getElementsByClassName('color')[0].classList.add('selected');
}
corBlack();
/* Neste requisito recebi ajuda do amigo Lucas Godoi turma 10 tribo A, mas obtive total entendimento da questão */
function click() {
  const recuperar = document.getElementById('color-palette'); /* Estou pegando minha classe pai */
  recuperar.addEventListener('click', (e) => { /* Passando um evento de clic para minha classe pai com a propriedades de evento! */
    const target1 = e.target;  /* Estou atribuindo a propriedade target do meu evento click ao meu (parametro (e))*/
    if (target1.classList.contains('color')) { /* SE - localName da minha propriedade target do meu evento for igual a 'div'*/
      const recuperaColor = document.querySelectorAll('.color'); /* Estou recuperando a minha classe 'color' */
      for (let index = 0; index < recuperaColor.length; index += 1) { /* Pegando todos os indexda minha classe 'color' */
        recuperaColor[index].classList.remove('selected');/* Remove de todos meus indexa classe 'selected' */
      }
      target1.classList.add('selected'); /* então add a classe selected */
    }
  });
}
click();

function pint() {
  const selectedColor = document.querySelector('#pixel-board'); /* recupere o pai onde vai acontecer o evento  */
  selectedColor.addEventListener('click', (e) => { /* diz que o meu evento vai ser um click */
    const target2 = e.target; /* Eu atribuo a propriedade target do meu evento para o meu (parametro(e)) */
    const recupera = document.querySelector('.selected').style.backgroundColor; /* eu recupero o style do meu elemento que possui a classe selected */
    if (target2.classList.contains('pixel')) { /* SE - minha propriedade target ocorrer em uma elemento com a classe Pixel... */
      target2.style.backgroundColor = recupera;/* Então atribua ao meu target o style do elemento que possui a classe selected */
    }
  });
}
pint();

function clear() {
  const botao = document.getElementById('clear-board') /* estou atribuindo a esta variavel o valor de meu elemento que tem a classe ('clear-board') */
  botao.addEventListener('click', () => { /* estou  add um evento de click a minha variavel botão */
    const recupera = document.getElementsByClassName('pixel'); /* estou atribuindo a minha variavel recupera o valor do meu elemnto que tem a classe ('pixel') */
    for (let index = 0; index < recupera.length; index += 1) { /*  estou percorrendo toda elemento da minha variavel recupera */
      recupera[index].style.backgroundColor = 'white'; /* aqui eu atribuo em todos os meus index o style cor branca */
    }
  });
}
clear();
