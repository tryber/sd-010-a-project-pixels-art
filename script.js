//TESTE: Seleciona o título e marca ele como verde
document.getElementsByTagName("h1")[0].style.color = 'rgb(62, 196, 0)';

document.querySelectorAll('.color').forEach(elementos => elementos.classList.add("noSelected"));
document.querySelectorAll('.color')[0].classList.replace("noSelected", "selected");

// GERAR COLRES ALETATÓRIAS RGB
function geradorDeCoresRGB() {
  var numero = Math.round; r = Math.random; s = 255;
  return 'rgb(' + numero(r()*s) + ', ' + numero(r()*s) + ', ' + numero(r()*s)+ ')';}
  geradorDeCoresRGB();
  //TESTE: Apenas para verificar se as cores estão sendo geradas
  console.log(geradorDeCoresRGB())

  let arrayColors = [];
for(indexColors = 0; indexColors < 3;indexColors += 1) {
    arrayColors.push(geradorDeCoresRGB())
}
console.log(arrayColors)

/*Seleciona o elemento pelo querySelector, retornando um arrey com as divs
contendo a classe color. Escolhendo as dives pelo numerdo do [index] e definindo a cor
IMPORTANTE! É melhor indicar a cor de fundo pelo JavaScript do que pelo CSS,)*/
document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
document.querySelectorAll('.color')[1].style.backgroundColor = arrayColors[0];
document.querySelectorAll('.color')[2].style.backgroundColor = arrayColors[1];
document.querySelectorAll('.color')[3].style.backgroundColor = arrayColors[2];


/*Seleciona o elemento pelo querySelector, retornando um arrey com as divs
contendo a classe color. Escolhendo as dives pelo numerdo do [index] e definindo a cor
IMPORTANTE! É melhor indicar a cor de fundo pelo JavaScript do que pelo CSS,)*/
//document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
//document.querySelectorAll('.color')[1].style.backgroundColor = 'rgb(219, 66, 66)';
//document.querySelectorAll('.color')[2].style.backgroundColor = 'rgb(250, 175, 114)';
//document.querySelectorAll('.color')[3].style.backgroundColor = 'rgb(130, 250, 114)';


//Seleciona todos os elementos da classe pixel
// .forEach(item => {}) Aplica o método individualmente a todos os itens do array
document.querySelectorAll('.pixel').forEach(item => {
// Muda a cor de fundo do item do array 
//item.style.backgroundColor = 'rgb(196, 189, 189)';
item.style.backgroundColor = 'white';
}
)

/* cria a variável da cor selecionada.
IMPORTANTE! A variável é criada fora da função, para ser usada fora da função*/
// Cria a variável da cor selecionada e atribui a ela a cor da primeira paleta (cor preta)
let selectedColor = document.querySelectorAll('.color')[0].style.backgroundColor;

/* INFORMAÇÃO: forEach pega todos os elementos individuais de um array e aplica o método individualmente
 a todos eles. O termo 'paletaSelecionada' corresponde ao elemento individual do array, como o 'array[index]'.
O '=>' siginifca que esse método será aplicado individualmente nas funções que vierem depois do '=>' */


//Função para limpar o quadro de pixel 'pixel board'
function clearPixelBoard() {
  //Pega aplica individualmente a todos os elementos a cor de fundo branca
  document.querySelectorAll('.pixel').forEach(elementos => elementos.style.backgroundColor='white')
}

//FUNÇÃO PARA CRIAR ELEMENTOS
criarElemento('#pixel-board' ,'div', 25 ,'pixel');
function criarElemento (lugarPraOndeOElementoVai ,tipoDoElemento, quantidade, classeDoElemento){
for (indexCriarElemento = 0; indexCriarElemento < quantidade; indexCriarElemento +=1){
variavelDolugarPraOndeOElementoVai = document.querySelector(lugarPraOndeOElementoVai)
elementoCriado = document.createElement(tipoDoElemento);
elementoCriado.className = classeDoElemento;
variavelDolugarPraOndeOElementoVai.appendChild(elementoCriado);
document.querySelectorAll('.pixel').forEach(elementos => elementos.style.backgroundColor = 'white');
document.querySelectorAll('.pixel').forEach(pixelSelecionado => {
  pixelSelecionado.addEventListener('click', recebeClick);
  function recebeClick(eventoDeOrigem){
    pixelSelecionado.style.backgroundColor = selectedColor;
    //Teste de verificação
    console.log(selectedColor);
  }
}
)
}
}

//Função que adiciona elementos baseados no valor da caixa de texto, após clicar no botão
function boardSizeGenerator () {
    let valorDoInput = document.querySelector('#board-size').value;
    if (valorDoInput==""){alert("Board inválido!");}
    if (valorDoInput<5){valorDoInput = 5}; if (valorDoInput>50){valorDoInput = 50};
    let alinhadorDoGrid = 'repeat('+Math.sqrt(valorDoInput*valorDoInput)+' , 0fr)';
    document.querySelector('#pixel-board').style.gridTemplateColumns = alinhadorDoGrid;
    criarElemento('#pixel-board' ,'div', valorDoInput*valorDoInput, 'pixel')
    ;
}


//GERA UM BOARD SIZE COM O NUMERO COLOCADO NO INPUT
let botaoPraClicar1 = document.querySelector('#generate-board');
//Adicona o elemento ao mouse over
botaoPraClicar1.addEventListener('click', Clicou1);
function Clicou1 (evento) {
    //TESTE:Mostra o evento de origem
    console.log('mouse clicou no botão 1');
    //TESTE:Mostra o evento de origem
    console.log(evento.target);
    //Apaga todos os itens adicionados anteriormente
    document.querySelectorAll('.pixel').forEach(elementos => elementos.remove());
    boardSizeGenerator ();
}

//Função para selecionar as cores da paleta
document.querySelectorAll('.color').forEach(paletaSelecionada => {
  paletaSelecionada.addEventListener('click', clickParaSelecionar);
  function clickParaSelecionar(eventoDeOrigem){
    document.querySelectorAll('.color').forEach(elementos => elementos.classList.replace("selected", "noSelected"));
    paletaSelecionada.classList.replace("noSelected", "selected");
    selectedColor = paletaSelecionada.style.backgroundColor;
    //TESTE: Apenas para verificar no console se a cor está realmente sendo selecionada
    console.log(selectedColor);
  }
}
)

//Função para colorir o quadro de pixels com a cor selecionada
document.querySelectorAll('.pixel').forEach(pixelSelecionado => {
  pixelSelecionado.addEventListener('click', recebeClick);
  function recebeClick(eventoDeOrigem){
    pixelSelecionado.style.backgroundColor = selectedColor;
    //Teste de verificação
    console.log(selectedColor);
  }
}
)