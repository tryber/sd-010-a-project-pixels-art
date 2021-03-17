// REQUISITO 2 - CRIANDO PALETA DE CORES //

function tableColorPalette() {
  // CRIANDO TABELA //
  const placePalette = document.querySelector('#color-palette');
  const paletteColors = document.createElement('table');
  placePalette.appendChild(paletteColors); // filho de color palette //
  // Criando célula da Paleta de Cores e a Classe Color //
  const numberCells = 4;
  for (let index = 0; index < numberCells; index += 1) {
    const createCells = document.createElement('td');
    createCells.className = 'color'; // criando a classe color //
    paletteColors.appendChild(createCells); // filho de table //
  }
  // inserindo cores na Paleta //
  const createColors = document.querySelectorAll('.color');
  const selectedColor = ['black', 'blue', 'crimson', 'yellow'];
  for (let index = 0; index < selectedColor.length; index += 1) {
    createColors[index].style.background = selectedColor[index]; // for (let index2 = 0; index2 < createColors.length; index2 += 1) { createColors[index2].style.backgroundColor = selectedColor[index]; //
  }
  createColors[0].classList.add('selected'); // REQUISITO 6 - Defina a cor preta como cor inicial //
}

// REQUISITO 4 - Adicione à página um quadro de pixels, com 25 pixels //

// Criando tabela //
function createTable() {
  const placeBoard = document.querySelector('#pixel-board');
  const getTable = document.createElement('table');
  placeBoard.appendChild(getTable);
  // Criando TR da Table //
  const numbersCells = 5;
  for (let index = 0; index < numbersCells; index += 1) {
    const createTr = document.createElement('tr');
    // criando TD da Table //
    for (let index2 = 0; index2 < numbersCells; index2 += 1) {
      const createTd = document.createElement('td');
      createTd.className = 'pixel'; // criando uma classe dentro do elemento td //
      createTd.style.backgroundColor = 'white';
      createTr.appendChild(createTd);
      getTable.append(createTr);
    }
  }
}

// REQUISITO 7 (TEMIDA) - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro. //
// resolução com o auxílio do Adão Jr - Turma 10 - Tribo B //
function addSelect() {
  const getSelect = document.querySelectorAll('.color');
  for (let index = 0; index < getSelect.length; index += 1) {
    getSelect[index].addEventListener('click', removeSelect);
  }
  function removeSelect() {
    for (let index = 0; index < getSelect.length; index += 1) {
      getSelect[index].classList.remove('selected');
    }
    this.classList.add('selected'); // ou event.target.classList.add('selected);
  }
}

// REQUISITO 8 - Pintar o pixel com a cor selecionada //
// resolução com o auxílio do Adão Jr - Turma 10 - Tribo B //
function pixelSelected() {
  const colorPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < colorPixel.length; index += 1) {
    colorPixel[index].addEventListener('click', printPixel);
  }
  function printPixel() {
    const lookPixel = document.querySelectorAll('td');
    for (let index2 = 0; index2 < lookPixel.length; index2 += 1) {
      if (lookPixel[index2].className === 'color selected') {
        for (let index3 = 0; index3 < colorPixel.length; index3 += 1) {
          this.style.backgroundColor = lookPixel[index2].style.backgroundColor;
        }
      }
    }
  }
}

// REQUISITO 9 - Criando  id clear-board e botão para limpar o pixel

function buttonClearPixel() {
  const placeButton = document.querySelector('#button-clear');
  const createButton = document.createElement('button');
  createButton.innerHTML = 'Limpar';
  createButton.id = 'clear-board';
  placeButton.appendChild(createButton);
  // Estilizando o botão //
  createButton.style.margin = '10px';
  createButton.style.padding = '10px 10px';
  createButton.style.backgroundColor = 'rgba(105, 105, 105, 0.699)';
  createButton.style.boxShadow = '1px 1px 1px black';
  createButton.style.cursor = 'pointer';
  createButton.addEventListener('click', clearPixel);
  function clearPixel() {
    const selectedAllPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < selectedAllPixels.length; index += 1) {
      selectedAllPixels[index].style.backgroundColor = 'white';
    }
  }
}

window.onload = function () {
  tableColorPalette();
  createTable();
  addSelect();
  pixelSelected();
  buttonClearPixel();
};
