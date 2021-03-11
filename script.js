// funções dedicadas á seleção de cores na paleta.
let element1 = document.getElementById("palette-black");
let element2 = document.getElementById("palette-green");
let element3 = document.getElementById("palette-yellow");
let element4 = document.getElementById("palette-blue");

function addSelectedGreen(){
element1.classList.remove('selected');
element2.classList.add('selected');
element3.classList.remove('selected');
element4.classList.remove('selected');
}
element2.addEventListener('click',addSelectedGreen);

function addSelectedYellow(){
element1.classList.remove('selected');
element2.classList.remove('selected');
element3.classList.add('selected');
element4.classList.remove('selected');
}
element3.addEventListener('click',addSelectedYellow);

function addSelectedBlue(){
element1.classList.remove('selected');
element2.classList.remove('selected');
element3.classList.remove('selected');
element4.classList.add('selected');
}
element4.addEventListener('click',addSelectedBlue);

function addSelectedBlack(){
element1.classList.add('selected');
element2.classList.remove('selected');
element3.classList.remove('selected');
element4.classList.remove('selected');
}
element1.addEventListener('click',addSelectedBlack);

// funções dedicadas a pintura dos blocos em branco.

let elementsPixels = document.querySelectorAll('.pixel');
for (let i = 0; i < elementsPixels.length; i += 1){
function pixelWithSelected(e){
 
  // elementsPixels[i].classList.add('selected');
  let colorPallet = document.getElementById('color-palette');
 
for (let index = 0; index < colorPallet.children.length; index += 1){   
     
if(colorPallet.children[index].className == 'color selected'){
  if(colorPallet.children[index].id === 'palette-black'){
    e.target.style.backgroundColor = 'black';
  }  
  if(colorPallet.children[index].id === 'palette-green'){
    e.target.style.backgroundColor = 'green';
  }
  if(colorPallet.children[index].id === 'palette-yellow'){
    e.target.style.backgroundColor = 'yellow';
  } 
  if(colorPallet.children[index].id === 'palette-blue'){
    e.target.style.backgroundColor = 'blue';
  }

}
}    
}
elementsPixels[i].addEventListener('click',pixelWithSelected); 
}
//funções dedicadas ao botão com função de limpar a área de pintura

function clearAllFunction(){
  const pixelsToClear = document.getElementById('pixel-board');
  for(let index=0; index <pixelsToClear.children.length; index +=1){
    pixelsToClear.children[index].style.backgroundColor = 'white';
  }
}

function clearAllButton(){
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click',clearAllFunction)
}
clearAllButton()