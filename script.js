window.onload = function(){
// pratica 3
function setColor (){
    let color = document.getElementsByClassName('color');
        color[0].style.backgroundColor = 'black';
        color[1].style.backgroundColor = 'red';
        color[2].style.backgroundColor = 'green';
        color[3].style.backgroundColor = 'blue';
}
setColor();

// pratica 7 https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_target
function changeClass (){
let click = document.getElementById('color-palette');
click.addEventListener('click', function (event) {
    let color = event.target;
    document.querySelector('.selected').className = 'color';
    color.className += ' selected';
    });
}
changeClass();

//pratica 8

// function addClass (){
   
//     let color = document.getElementsByClassName('pixel')
//     for (let i = 0; i < color.length; i +=1) {
//     color[i].addEventListener('click', function (event) {
//     let pixel = event.target;  
//     pixel.classList.add('selected');
//    });
// }
// }

// addClass();

function pixelColor() {
    let pixel = document.querySelector('#pixel-board');
    pixel.addEventListener('click', function (event) {
      let selected = event.target;
      let color = document.querySelector('.selected').style.backgroundColor;
      selected.style.backgroundColor = color;
    });
  }
  pixelColor();


// pratica 9




}





