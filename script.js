//color[length] para alterar a cor nas paletas

window.onload = function bemVindo() {
    console.log("teste testando")
}


//Variaveis //

let colorElements = document.querySelectorAll('.color');

// Coloca as cores nas Divs //
let palleteColorBasic = ['black', 'red', 'blue', 'green'];
window.onload = function palleteColor(){
    for (let index = 0; index < palleteColorBasic.length; index += 1)
    colorElements[index].style.backgroundColor = palleteColorBasic[index];
}



// Seleciona cor na palette //
function selecColorPallete(event) {
    const elementTarget = event.target;
    if (elementTarget.id !== 'color-palette') {
      colorElements.forEach((element) => {
        element.classList.remove('selected');
        elementTarget.classList.add('selected');
      });
    }
  }







// let pixel = document.getElementsByClassName('pixel');

// pixel.onclick = changeColor 


// function changeColor() {
//     document.getElementsByClassName('pixel').style.backgroundColor = 'black'
    
// document.getElementsByTagName('td')

// document.getElementsByTagName('td')[17].style.backgroundColor = palleteColorBasic[3]

}

