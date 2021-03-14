// Project Pixels Art

// Requirement 2
const colorPaletteSection = document.createElement('section');
colorPaletteSection.id = 'color-palette' 
document.body.appendChild(colorPaletteSection);

for (let index = 1; index <= 4; index +=1) {
    const colorPaletteDivs = document.createElement('div');
    colorPaletteDivs.className = ('color');
    colorPaletteDivs.style.display = 'inline-block';
    colorPaletteDivs.style.border = '1px solid black';
    colorPaletteDivs.style.width = '40px'
    colorPaletteDivs.style.height = '40px'
    colorPaletteSection.appendChild(colorPaletteDivs);
    if (index === 1) {
        colorPaletteDivs.style.backgroundColor = 'black' // Requirement 3
        colorPaletteDivs.className += ' selected'; // Requirement 6
        
    } if (index === 2) {
        colorPaletteDivs.style.backgroundColor = 'red' 
    } if (index === 3) {
        colorPaletteDivs.style.backgroundColor = 'yellow'
    } if (index === 4) {
        colorPaletteDivs.style.backgroundColor = 'orange'
    }
    
  }


  // Requirement 4 e 5
  const createTable = document.createElement('table');
  document.body.appendChild(createTable);
  createTable.id = 'pixel-board';

for (let index = 1; index <= 25; index += 1) {
  const divSquare = document.createElement('div');
  divSquare.style.display = 'inline-block';
  divSquare.style.width = '40px';
  divSquare.style.height = '40px';
  divSquare.style.border = '1px solid black';
  divSquare.style.marginTop = '0px';
  divSquare.style.marginBottom = '0px';
  divSquare.style.background = 'white';
  divSquare.className = 'pixel';
  createTable.appendChild(divSquare);
  if (index === 5) {
    divSquare.style.marginRight = '80%'
  } if (index === 10) {
    divSquare.style.marginRight = '80%'
  } if (index === 15) {
    divSquare.style.marginRight = '80%'
  } if (index === 20) {
    divSquare.style.marginRight = '80%'
  }
}
// Requirement 7

const color1 = document.getElementsByClassName('color')[0];
const color2 = document.getElementsByClassName('color')[1];
const color3 = document.getElementsByClassName('color')[2];
const color4 = document.getElementsByClassName('color')[3];

function selected1 () {
  color1.className = ('color selected');
  color2.className = ('color');
  color3.className = ('color');
  color4.className = ('color');
}

function selected2 () {
  color1.className = ('color');
  color2.className = ('color selected');
  color3.className = ('color');
  color4.className = ('color');
}

function selected3 () {
  color1.className = ('color');
  color2.className = ('color');
  color3.className = ('color selected');
  color4.className = ('color');
}

function selected4 () {
  color1.className = ('color');
  color2.className = ('color');
  color3.className = ('color');
  color4.className = ('color selected');
}

color1.addEventListener('click', selected1);
color2.addEventListener('click', selected2);
color3.addEventListener('click', selected3);
color4.addEventListener('click', selected4);

//Requirement 8

function paint () {
  document.querySelectorAll('.pixel')[0].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[0].addEventListener('click', paint);

function paint1 () {
  document.querySelectorAll('.pixel')[1].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[1].addEventListener('click', paint1);

function paint2 () {
  document.querySelectorAll('.pixel')[2].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[2].addEventListener('click', paint2);

function paint3 () {
  document.querySelectorAll('.pixel')[3].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[3].addEventListener('click', paint3);

function paint4 () {
  document.querySelectorAll('.pixel')[4].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[4].addEventListener('click', paint4);

function paint5 () {
  document.querySelectorAll('.pixel')[5].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[5].addEventListener('click', paint5);

function paint6 () {
  document.querySelectorAll('.pixel')[6].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[6].addEventListener('click', paint6);

function paint7 () {
  document.querySelectorAll('.pixel')[7].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[7].addEventListener('click', paint7);

function paint8 () {
  document.querySelectorAll('.pixel')[8].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[8].addEventListener('click', paint8);

function paint9 () {
  document.querySelectorAll('.pixel')[9].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[9].addEventListener('click', paint9);

function paint10 () {
  document.querySelectorAll('.pixel')[10].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[10].addEventListener('click', paint10);

function paint11 () {
  document.querySelectorAll('.pixel')[11].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[11].addEventListener('click', paint11);

function paint12 () {
  document.querySelectorAll('.pixel')[12].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[12].addEventListener('click', paint12);

function paint13 () {
  document.querySelectorAll('.pixel')[13].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[13].addEventListener('click', paint13);

function paint14 () {
  document.querySelectorAll('.pixel')[14].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[14].addEventListener('click', paint14);

function paint15 () {
  document.querySelectorAll('.pixel')[15].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[15].addEventListener('click', paint15);

function paint16 () {
  document.querySelectorAll('.pixel')[16].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[16].addEventListener('click', paint16);

function paint17 () {
  document.querySelectorAll('.pixel')[17].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[17].addEventListener('click', paint17);

function paint18 () {
  document.querySelectorAll('.pixel')[18].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[18].addEventListener('click', paint18);

function paint19 () {
  document.querySelectorAll('.pixel')[19].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[19].addEventListener('click', paint19);

function paint20 () {
  document.querySelectorAll('.pixel')[20].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[20].addEventListener('click', paint20);

function paint21 () {
  document.querySelectorAll('.pixel')[21].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[21].addEventListener('click', paint21);

function paint22 () {
  document.querySelectorAll('.pixel')[22].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[22].addEventListener('click', paint22);

function paint23 () {
  document.querySelectorAll('.pixel')[23].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[23].addEventListener('click', paint23);

function paint24 () {
  document.querySelectorAll('.pixel')[24].style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

document.querySelectorAll('.pixel')[24].addEventListener('click', paint24);


