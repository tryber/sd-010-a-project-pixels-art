// André Jaques - Turma 10 - Tribo A me ajudou muito a entender o event.target

//Seleciona a cor

    let paletaCor = document.querySelectorAll('.color'); //array

    for (let index = 0; index < paletaCor.length; index += 1) {
        paletaCor[index].addEventListener('click', selecionaCor);
    }

    function selecionaCor(event){
        let paletaCorSelecionada = event.target; // como o André Jaques me explicou, aqui estou dizendo que o alvo é o alvo do evento em questão (o paletacCor[index])
        let SelecionadoAntes = document.querySelector('.selected');
        SelecionadoAntes.classList.remove('selected');
        paletaCorSelecionada.classList.add('selected');
    }
 

// Pimtar cada Pixel

    let pixelArray = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixelArray.length; index += 1) {
        pixelArray[index].addEventListener('click', pintaPixel);
    }    
    
    function pintaPixel(event){
        let selecionaPixel = event.target; // como o André Jaques me explicou, aqui estou dizendo que o alvo é o alvo do evento em questão.
        let CorSelecionada = document.querySelector('.selected').style.backgroundColor; //aqui estou "pegando" o background-color da div que está com a classe selected
        selecionaPixel.style.backgroundColor = CorSelecionada; 
    }
    

 
// limpar o quadro

function resetaCor (){

    let reseta = document.querySelector('#clear-board');
    let pixel = document.querySelectorAll('.pixel'); //array


    reseta.addEventListener('click', function() {
        for (let index = 0; index < pixel.length; index += 1) {    
        pixel[index].style.backgroundColor = 'white';    
        }
    });
}

resetaCor ()


//quadro de pixels tem seu tamanho definido pela pessoa usuária.

// primeiro crio o botão/evento com os requisitos para ele funcionar
let botaoVQV = document.querySelector('#generate-board');


botaoVQV.addEventListener('click', function(){

    let valorInput = document.querySelector('#board-size').value;
    
    if (valorInput === '') {
     alert('Board inválido!');
    } else if (valorInput < 5) {
    valorInput = 5;
    } else if (valorInput > 50) {
    valorInput = 50;
    } else {
    valorInput = valorInput;
    }
    
    criaQuadro(valorInput);

});


function criaQuadro(valor) {

    let pixelArray = document.querySelectorAll('.pixel'); //array pixels
    for (let index = 0; index < pixelArray.length; index += 1) {
        pixelArray[index].remove(); //primeiro preciso apagar o quadro já existente
    }  

    let QuadroPixels = document.querySelector('#pixel-board'); //section onde fic meu quadro de pixels
    for (let index = 0; index < valor; index += 1) {  //crio a div "pai" linha o numero de vezes que o valor vai definir
        let linha = document.createElement('div');
        QuadroPixels.appendChild(linha); 
        linha.classList.add('linha');
        
        for (let index = 0; index < valor; index += 1) { // dentro do pai linha crio as divx pixels o numero de vezes que o valor definir
        let pixel = document.createElement('div');
        linha.appendChild(pixel);
        pixel.classList.add('pixel');
        }
    }  

    let pixelArrayNovo = document.querySelectorAll('.pixel'); //crio uma nova varivel de array pixels pois o ultimo foi apagado
    for (let index = 0; index < pixelArrayNovo.length; index += 1) {
        pixelArrayNovo[index].addEventListener('click', pintaPixel);  //chamo novamente o evento de pintar cada pixel
    }  

} 

