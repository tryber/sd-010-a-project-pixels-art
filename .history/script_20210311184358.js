let color = document.getElementsByClassName('color');
let colorPalette = document.getElementById('color-palette');
let pixelsListElements = document.getElementsByClassName('pixel');
let selectElementColor = document.getElementsByClassName('selected')[0];

function corTroca() {
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function ()  {
      for (let insideIndex = 0; insideIndex < color.length; insideIndex += 1) {
        color[insideIndex].classList.remove('selected');
      }

      color[index].classList.add('selected');
    });
  }
}


function colorSelection () {
  for (let i = 0; i < pixelsListElements.length; i += 1) {
    pixelsListElements[i].addEventListener('click', function () {
      if (selectElementColor.classList.contains('backBlack')) {
        pixelsListElements[i].style.backgroundColor = 'black'
    } else if (selectElementColor.classList.contains('backRed')) {
      pixelsListElements[i].style.backgroundColor = 'red'
    } else if (selectElementColor.classList.contains('backBlue')) {
       pixelsListElements[i].style.backgroundColor = 'blue'
    } else if (selectElementColor.classList.contains('backGreen')) {
       pixelsListElements[i].style.backgroundColor = 'green'
    }
  })
 }
}

corTroca();
colorSelection ()

  
  
 