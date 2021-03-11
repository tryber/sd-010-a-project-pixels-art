let color = document.getElementsByClassName('color');
let colorPalette = document.getElementById('color-palette');

function corTroca() {
  for (let corIndex = 0; corIndex < cor.length; corIndex += 1) {
    cor[corIndex].addEventListener('click', function () {
      colorPalette.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

corTroca();