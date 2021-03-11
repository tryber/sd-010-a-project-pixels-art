// Scripts start
/* ------------ Colors Container ------------ */
const colors = document.querySelectorAll('.color');

function clickToSelectColor(e) {
    const selectedItem = document.querySelector('.selected');
    selectedItem.classList.remove('selected');
    e.target.classList.add('selected');
}

for (let color = 0; color < colors.length; color += 1) {
    colors[color].addEventListener('click', clickToSelectColor);
}

/* -------------- Pixels Container -------------- */
const pixels = document.querySelectorAll('.pixel');

function clickToSetColor(e) {
    const selectedItem = document.querySelector('.selected');
    const selectedColor = window.getComputedStyle(selectedItem)
        .getPropertyValue('background-color');
    e.target.style.backgroundColor = selectedColor;
}

for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].addEventListener('click', clickToSetColor);
}

/* -------------- Clean Button ----------------- */
const clearButton = document.querySelector('#clear-board');

function clickToClean() {
    for (let pixel = 0; pixel < pixels.length; pixel += 1) {
        pixels[pixel].style.backgroundColor = 'white';
    }
}

clearButton.addEventListener('click', clickToClean);
