const color = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'yellow';
color[2].style.backgroundColor = 'blue';
color[3].style.backgroundColor = 'green';

function changeSelector(event) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function eventClick() {
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', changeSelector);
  }
}
eventClick();

function changeColor2(event) {
  const value1 = event.target;
  const value2 = document.querySelector('.selected');
  value1.style.backgroundColor = value2.style.backgroundColor;
}

function changeColor() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', changeColor2);
  }
}
changeColor();
