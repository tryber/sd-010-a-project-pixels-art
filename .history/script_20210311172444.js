let color = document.getElementsByClassName('color');
let colorPalette = document.getElementById('color-palette');
let pixelsListElements = document.getElementsByClassName('pixel');

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
  for (let i = 0; i)
}