function selectedColor() {
  const selected1 = document.querySelector('#color-palette');

  selected1.addEventListener('click' , function x (event) {
  limpaSelected();
  event.target.classList.add('selected') 
})
}

function limpaSelected() {
const colorSelected = document.querySelector('.selected');
colorSelected.classList.remove('selected');
}

selectedColor();


function box25 (){
const boxGrande = document.querySelector('#pixel-board');
boxGrande.addEventListener('click' , function xx (event){
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
})
}

box25 ();

function btnReset (){
  let btnForReset = document.getElementById('clear-board');
  btnForReset.addEventListener('click' , () => {
    resetCOlor ();
  })
}

btnReset();
function resetCOlor () {
    let pixels = document.querySelectorAll('.pixel')
    for(let index = 0 ; index < pixels.length ; index += 1){
      pixels[index].style.backgroundColor = 'white';
    }
  }
