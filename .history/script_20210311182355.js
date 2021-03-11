let color = document.getElementsByClassName('color');
let colorPalette = document.getElementById('color-palette');
let pixelsListElements = document.getElementsByClassName('pixel');
let selectElementColor = document.getElementsByClassName('selected')[0];

function corTroca() {
  for (let corIndex = 0; corIndex < color.length; corIndex += 1) {
    color[corIndex].addEventListener('click', function () {
      colorPalette.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

corTroca();

function colorSelection () {
  for (let i = 0; i < pixelsListElements.length; i += 1) {
    pixelsListElements[i].addEventListener('click', function () {
      if (selectElementColor.classList.contains('black')) {
        pixelsListElements[i].style.backgroundColor = 'black'
    } else if (selectElementColor.classList.contains('red')) {
      pixelsListElements[i].style.backgroundColor = 'red'
    } else if (selectElementColor.classList.contains('blue')) {
       pixelsListElements[i].style.backgroundColor = 'blue'
    } else if (selectElementColor.classList.contains('green')) {
       pixelsListElements[i].style.backgroundColor = 'green'
       
  
  
 