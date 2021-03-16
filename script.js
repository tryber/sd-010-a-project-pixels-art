//requisito 4 - Cria pixels
function criaPixels (numberOfPixels) {
   for (let index = 0; index < numberOfPixels * numberOfPixels; index +=1) {
   const fazDiv = document.createElement('div');
   fazDiv.className = 'pixel';
   const divMae = document.getElementById('pixel-board');
  divMae.append(fazDiv);
}
}
criaPixels(5)

// Requisito 7 - Seleciona cor
function selecionaCor() {
   const cores = document.getElementsByClassName('color');
   
   for (let index = 0; index < cores.length; index += 1) {
   cores[index].addEventListener('click',() => {
      for (let i = 0; i < cores.length; i += 1) {
      cores[i] .classList.remove('selected');
      }
      cores[index].classList.add('selected');
  })
 }
}
 selecionaCor();




// Requisito 8 - Pinta pixels
selecionaCor ()
const cor =  document.querySelector('.selected');
const pixel = document.querySelectorAll('.pixel');

  function pintaPixels(event) {
  
  // percorre quadro e adiciona o clique:

 for (let index = 0; index < pixel.length; index += 1) {
    
     pixel[index].addEventListener('click', (event)=> {
        //if(cor.style.backgroundColor = 'green') {
         pixel[index].style.backgroundColor = 'green'
     // } else if (cor.style.backgroundColor = 'green'){
     //    pixel[index].style.backgroundColor = 'green'
     // } else if (cor.style.backgroundColor = 'brown'){
     //   pixel[index].style.backgroundColor = 'brown'
     // } else if (cor.style.backgroundColor = 'black'){
     //   pixel[index].style.backgroundColor = 'black'
      })
      }
   //} 
 }
  
selecionaCor ();
pintaPixels();




// Requisito 9 - Limpa board
function limpaQuadro () {
const botao = document.getElementById('clear-board');

   botao.addEventListener('click', () => {
      for (let index = 0; index < pixel.length; index += 1) {
         pixel[index].style.backgroundColor = 'white';

      }

   })
}

limpaQuadro()