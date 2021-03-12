const $colorPalette = document.getElementById('color-palette');
const $colorElements = document.querySelectorAll('.color');
const $pixelBoard = document.getElementById('pixel-board');
const $clearBoardBtn = document.getElementById('clear-board');

// Função para gerar as cores da paleta de cores, exceto a primeira cor que sempre deve ser preta.
function changeColorPallete() {
  const $colorElementsRandon = document.querySelectorAll('.colorRandon');
  $colorElementsRandon.forEach((element) => {
    const $elColor = element;
    const $colors = [];
    for (let index = 0; index <= 3; index += 1) {
      const $color = Math.floor(Math.random(1 + 1) * 255);
      $colors.push($color);
    }
    $elColor.style.cssText = `background-color: rgb(${$colors[0]}, ${$colors[1]}, ${$colors[2]}`;
  });
}

changeColorPallete();

// Função de callback para selecionar uma paleta da paleta de cores.
function selecElementPallete(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'color-palette') {
    $colorElements.forEach((element) => {
      element.classList.remove('selected');
      elementTarget.classList.add('selected');
    });
  }
}
// Função para obter a cor da paleta selecionada pela função 'selecElementPallete'.
function getColorElementPalette() {
  const $elementSelected = document.querySelector('.selected');
  const $color = window.getComputedStyle($elementSelected).getPropertyValue('background-color');
  return $color;
}

// Função de callback para pintar os pixels da pixel-board com a cor capturada pela função getColorElementPalette.
function changeColorPixels(event) {
  const $elementTarget = event.target;
  if ($elementTarget.id !== 'pixel-board') {
    $elementTarget.style.backgroundColor = getColorElementPalette();
  }
}

// Função de callback para limpar as cores da pixel-board, pintando-as de branco.
function clearBoardPixels() {
  const $pixelsTd = document.querySelectorAll('.pixel');
  $pixelsTd.forEach((pixel) => {
    const $pixeltd = pixel;
    $pixeltd.style.cssText = 'background-color: white; ';
  });
}

$colorPalette.addEventListener('click', selecElementPallete);
$pixelBoard.addEventListener('click', changeColorPixels);
$clearBoardBtn.addEventListener('click', clearBoardPixels);

// Implementação para criar pixel-board via JavaScript

const $pixelsBoard = document.querySelector('#pixel-board');
$pixelsBoard.style.cssText = 'border-collapse: separate; border-spacing: 0px; ';
const $inputPixelsBoard = document.getElementById('board-size');
const $btnPixelsBoard = document.getElementById('generate-board');

// Função para as linhas e colunas da pixel-board. Um for para criar as linhas, e outro para criar as colunas. As colunas são criadas em suas respectivas linhas.
function createPixels(number) {
  for (let indexLine = 1; indexLine <= number; indexLine += 1) {
    const $row = document.createElement('tr');
    $row.classList.add('pixels-row');
    $pixelsBoard.append($row);
    for (let indexColumn = 1; indexColumn <= number; indexColumn += 1) {
      const $td = document.createElement('td');
      $td.classList.add('pixel');
      $row.append($td);
    }
  }
}

// Função para demover pixels da tabela após a criação de uma nova. Antes os novos pixels eram criados abaixo dos outros adicionados anteriormente. Nesta função são removidas todas as linhas, consequentemente todas as colunas também são removidas.
function removePixels() {
  const $pixelsRow = document.querySelectorAll('.pixels-row');
  $pixelsRow.forEach((elementRow) => elementRow.parentNode.removeChild(elementRow));
}

// Função para checar o input.value
function checkInput() {
  let { value } = $inputPixelsBoard;
  if (value < 5 && value !== '') {
    value = 5;
  } else if (value > 50) {
    value = 50;
  }
  return value;
}

// Função de callback para criar os pixels da nova pixel-board. Nela é chamada as funções 'removePixels' e 'createPixels'.
function createPixelsBoard() {
  const $pixelsRow = document.querySelectorAll('.pixels-row');
  if ($pixelsRow.length !== 0) {
    removePixels();
  }
  const value = checkInput();
  if (value === '') {
    alert('Board inválido!');
    $pixelBoard.style.cssText = 'display: none; ';
  } else {
    $pixelBoard.style.cssText = 'display: table; ';
    createPixels(value);
  }
}

$btnPixelsBoard.addEventListener('click', createPixelsBoard);

// Aqui é criado os pixels da tabela inicial com 5 linhas e 5 colunas, totalizando 25 pixels.
createPixels(5);
