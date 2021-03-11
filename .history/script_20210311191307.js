const color = document.getElementsByClassName('color');
const colorPalette = document.getElementById('color-palette');
const pixelsListElements = document.getElementsByClassName('pixel');
const selectElementColor = document.getElementsByClassName('selected')[0];

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
          let selectColor = document.getElementsByClassName('selected')[0];
          let backg = window.getComputedStyle(selectColor).backgroundColor;
          event.target.style.backgroundColor = backg;
        });
      }
    }
colorSelection ()

  
  
 