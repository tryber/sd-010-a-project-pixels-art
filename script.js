// Após muita pesquisa e estudo o event.target permitiu refatorar o código para ficar menor
// mesmo assim o problema para pintar pixels estava no html que não tinha background color, que estava definido no css. 

function colorSelect() {
  let defaultColors = document.querySelectorAll('.color');
  for (let index = 0; index < defaultColors.length; index += 1){
    defaultColors[index].addEventListener('click', onClick);
  }
  function onClick(event) {
    let selectedColor = event.target; // event.target - determina que a variável sera o alvo do evento em questão, ou seja, o que vai sofrer o resultado da função.
    let defaultColorBlack = document.querySelector('.selected');
    defaultColorBlack.classList.remove('selected');
    selectedColor.classList.add('selected');
  }
}
colorSelect(); 

function changePixelsColor() {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      let selectedPixel = event.target;
      let selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
      selectedPixel.style.backgroundColor = selectedColor;
    });  
  }
}
changePixelsColor();

function clearButton() {
  document.location.reload() // o método reload recarrega toda a página para sua configuração inicial, tornando os pixels brancos.
}
let clearBtn = document.getElementsByTagName('button')[0];
clearBtn.addEventListener('click', clearButton);
