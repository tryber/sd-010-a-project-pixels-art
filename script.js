//  Depois de muitas tentativas, agora irei abandonar o HTML e só declarar os parents por lá. Seja o que Deus quiser!
//  Crio um table, adiciono com appendChild os td.
function boxColor() {
  const colorSection = document.getElementById('color-palette');
  const tableOfColors = document.createElement('table');
  colorSection.appendChild(tableOfColors);

  const totalOfBox = 4;
  for (let index = 0; index < totalOfBox; index += 1) {
    const tdOfTable = document.createElement('td');
    tdOfTable.className = 'color';
    tableOfColors.appendChild(tdOfTable);
  }

  const selectColorClass = document.querySelectorAll('.color');
  const colorsArr = ['black', 'green', 'red', 'purple'];
  for (let colorIndex = 0; colorIndex < colorsArr.length; colorIndex += 1) {
    selectColorClass[colorIndex].style.backgroundColor = colorsArr[colorIndex];
  }
  selectColorClass[0].className += ' selected';
  // aqui dava erro com classList, acabou feito uma ganbiarra
};

function creatingPixels() {
  const pixelId = document.getElementById('pixel-board');
  const tableOfPixels = document.createElement('table');
  pixelId.appendChild(tableOfPixels);
  const totalPixel = 5;
  for (let trIndex = 0; trIndex < totalPixel; trIndex += 1) {
    const creatingTr = document.createElement('tr');
    for (let tdIndex = 0; tdIndex < totalPixel; tdIndex += 1) {
      const creatingTd = document.createElement('td');
      creatingTd.className = 'pixel';
      creatingTd.style.backgroundColor = 'white';
      tableOfPixels.appendChild(creatingTr);
      creatingTr.appendChild(creatingTd);
    }
  }
};

// essa function consegui realizar pq Lucas Portella Turma 10 - B me ajudou
function getSelected() {
  const allClassColor = document.querySelectorAll('.color');
  for (let i = 0; i < allClassColor.length; i += 1) {
    allClassColor[i].addEventListener('click', (event) => {
      for (let indexOfColor = 0; indexOfColor < allClassColor.length; indexOfColor += 1) {
        allClassColor[indexOfColor].classList.remove('selected');
      }
      event.target.className += ' selected';
    })
  }  
};
// Aqui percebi que não preciso selecionar elemento por elemento, se pegarmos um elemento pai o click funciona - ideia retirada de Jodiel Briesemeister - turma 10 - A
function getPixels() {
  const pixelTable = document.getElementById('pixel-board');
  pixelTable.addEventListener('click', (event) => {
    const color = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = color;
  });
}

function btnClear () {
  const idBtnClear = document.getElementById('clear-board');
  const newBtnClear = document.createElement('button');
  idBtnClear.appendChild(newBtnClear);
  newBtnClear.innerHTML = 'Limpar';
  newBtnClear.addEventListener('click', (clearPixel));

  function clearPixel() {
    const allPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < allPixels.length; index += 1) {
      allPixels[index].style.backgroundColor = 'white';
    }
  }
}

// Projeto Realizado com Ajuda de Pollyana Oliveira - turma 10 - A
window.onload = function() {
  boxColor();
  creatingPixels();
  getSelected();
  getPixels();
  btnClear ();
};
