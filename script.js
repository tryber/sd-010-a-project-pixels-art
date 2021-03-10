const colorFirst = document.querySelectorAll('div')[1];
colorFirst.style.backgroundColor = 'red';

const colorSecond = document.querySelectorAll('div')[2];
colorSecond.style.backgroundColor = 'green';

const colorThird = document.querySelectorAll('div')[3];
colorThird.style.backgroundColor = 'blue';

const colorFourth = document.querySelectorAll('div')[4];
colorFourth.style.backgroundColor = 'yellow';

colorFirst.style.backgroundColor = 'black';

let framePixel = document.getElementById('pixel-board');

for (i = 1; i <= 25; i +=1 ) {
   let pixel = document.createElement('div');
   pixel.className = 'pixel';

   framePixel.appendChild(pixel);
}

let classColor = document.querySelectorAll('.color');
function clean() {
    for (let i = 0; i < classColor.length; i += 1) {
    classColor[i].classList.remove('selected') ;
   
   }      
}

for (let i = 0; i < classColor.length; i += 1) {
    classColor[i].addEventListener('click',(clique)=> {   
    clean();
    classColor[i].className += ' selected'
    });
}

const toColor = document.querySelectorAll('.pixel')

for (let i = 0; i < toColor.length; i +=1) {
toColor[i].addEventListener('click',() => {
   toColor[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor
   });
}


let button = document.getElementById('clear-board');
button.addEventListener('click', () => {
    for (let i = 0; i < toColor.length; i +=1) {
     toColor[i].style.backgroundColor = 'white';   
    }   
});

