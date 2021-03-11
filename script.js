function selectColor() {
  let colorList = document.querySelectorAll('.color')
  let colorSelectList = document.querySelector('.selected');
  for (let index = 0; index < colorList.length; index += 1) {
    colorList[index].addEventListener('click', function () {
			document.querySelector('.selected').classList.remove('selected');
			colorList[index].classList.add('selected');
	});
 }
}
selectColor ()

function pixel () {
  let arrayPixel = document.getElementsByClassName('pixel');
  for (let index =0; index < arrayPixel.length; index += 1) {
    arrayPixel[index].addEventListener('click', function (event){
      let pixelTarget = event.target
      pixelTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
    })
  } 
}
pixel ()
// requisito feio cxom a ajuda de Rafael Medeiros Gomes, André Jaques Batista, Maurício Viegas Rodrigues,
// Thalita Cecilier e Nilson Ribeiro