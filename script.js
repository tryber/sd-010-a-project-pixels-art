//codigo com base no prjeto de nilson ribeiro para ajudar a resolver o requisito 7 e 8 
function clearSelected() {
    let colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
}

function selectedColor() {
    let getColor = document.querySelector('#color-palette');
    getColor.addEventListener('click' , function(event) {
    clearSelected();
    event.target.classList.add('selected')
    console.log(document.querySelector('.selected')); 
  })
}

selectedColor()

function painel() {
    let canvas = document.querySelector('#pixel-board');
    canvas.addEventListener('click' , function (event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    })
}

painel()
