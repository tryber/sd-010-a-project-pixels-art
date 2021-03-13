function addColors() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'red';
  colors[2].style.backgroundColor = 'brown';
  colors[3].style.backgroundColor = 'grey';
}
addColors();

document.querySelectorAll('.color')[0].className += ' selected';

// feito com a juda de colegas (murilo, anderson e outros)
function changeselection() {
  const colorSelected = document.querySelector('#color-palette');
  colorSelected.addEventListener('click', (event) => {
    const classColor = event.target;
    const elementSelected = document.getElementsByClassName('selected');
    elementSelected[0].classList.remove('selected');
    classColor.classList.add('selected');
  });
}
changeselection();

function changeColorBox() {
  const selectedBox = document.querySelector('#pixel-board');
  selectedBox.addEventListener('click', (event) => {
    const boxPixel = event.target;
    if (boxPixel.className === 'pixel') {
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      boxPixel.style.backgroundColor = selectedColor;
    }
  });
}
changeColorBox();

const clean = document.querySelector('#clear-board');
function clearPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

clean.addEventListener('click', clearPixel);
