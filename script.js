window.onload = function (){ 

// pega os elementos da classe color
let runBgColors = document.getElementsByClassName('color');
 
// dar cor de fundo aos elementos base

let selected = document.querySelector('.color');

selected.classList.add('color', 'selected');


runBgColors[0].style.backgroundColor = 'black';
runBgColors[1].style.backgroundColor = "red";
runBgColors[2].style.backgroundColor = "gray";
runBgColors[3].style.backgroundColor = "yellow";

// Função para capturar a cor da class color

let pegabg = 'black';
function changeBgColor() {
let bgColor = document.getElementsByClassName('color');
    for (index = 0; index < bgColor.length; index += 1) {
    let bgPoint = bgColor[index];
    bgPoint.addEventListener('click', colorClick); 
    function colorClick() {
    pegabg = bgPoint.style.backgroundColor;
    }
}
}

function returnClickClass () {
    let clicar = document.getElementsByClassName('pixel');
        for (index = 0; index < clicar.length; index += 1) {
        let control = clicar[index];
        control.addEventListener('click', onlineClick); 
        function onlineClick() {
         control.style.backgroundColor = pegabg;
            }
        }
}
 

// Botão que redefine a própriedade class pixel para white
let btn = document.querySelector('#clear-board');

btn.addEventListener('click', function()
 {
    let btnColor = 'rgb(255, 255, 255)';
    let receivedColor = document.getElementsByClassName('pixel');
    
    for (let index = 0; index < receivedColor.length; index += 1) {
    let pixelBg = receivedColor[index];
        pixelBg.style.backgroundColor = btnColor;
    }
  });

returnClickClass();
changeBgColor();
}