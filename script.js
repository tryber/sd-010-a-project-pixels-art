
function selecColor() {
    const selected1 = document.querySelector('#color-palette');

    selected1.addEventListener('click', function (event) {
        limpaSelected();
        event.target.classList.add('selected')
    })
}

function limpaSelected() {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
}

selecColor();

//peguei esta função abaixo no stackoverflow.(css)
//https://pt.stackoverflow.com/questions/176916/javascript-fun%C3%A7%C3%A3o-que-retorna-valor-de-uma-propriedade-css
function css(el, estilo){
    return(estilo+':', document.defaultView.getComputedStyle(el, null)[estilo]);
 }
 

function recebeSelect() {
    const array = document.querySelector('#pixel-board');
       array.addEventListener('click', (event) => {
               const cor = document.querySelector('.selected');
               event.target.style.backgroundColor = css(cor, "backgroundColor");
           })
        }
recebeSelect();

function btn(){
    const botao = document.querySelector("#clear-board");
    botao.addEventListener('click', (event) => {
            let array = document.querySelectorAll('.pixel');
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                element.style.backgroundColor = 'white';
            }
        })
}
btn();