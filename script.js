function createColorPalette(qnt) {
  for (let index = 0; index < qnt; index += 1) {
    const square = document.createElement('div');
    const palette = document.getElementById('color-palette');
    square.className = 'color';
    palette.appendChild(square);
  }
}

createColorPalette(4);

function paletteColor() {
  const palleteColor = document.getElementsByClassName('color');
  palleteColor[0].style.backgroundColor = 'black';
  palleteColor[1].style.backgroundColor = 'orange';
  palleteColor[2].style.backgroundColor = 'purple';
  palleteColor[3].style.backgroundColor = 'green';
}
paletteColor();
