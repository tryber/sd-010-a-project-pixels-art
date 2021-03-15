window.onload = function(){
  let colorSelectedString = document.querySelector('#color-select');
  colorSelectedString.innerText = 'black';

  let colorInfo = document.querySelector('#color-palette');
	let frame = document.querySelector('#pixel-board');
	let button = document.querySelector('#clear-board');

	button.addEventListener('click', function(event){
		let pixels = document.querySelectorAll('.pixel');
		for(index = 0; index < pixels.length; index += 1){
			pixels[index].style.backgroundColor = 'white';
		}
	});

	colorInfo.addEventListener('click', function(event){
		let colorName = event.target.id;
		let colorWithSelected = document.querySelector('.selected');
		let colorSelected = document.querySelector(`#${colorName}`);
		if(colorName === 'color-palette'){
			colorSelectedString.innerText = colorWithSelected.id;
		}else{
      colorSelectedString.innerText = colorName;
			colorWithSelected.classList.remove('selected');
			colorSelected.classList.add('selected');
		}
	});

	frame.addEventListener('click', function(event){
		let targetPixel = event.target
		if(targetPixel.id !== 'pixel-board'){
			let colorSelected = document.querySelector('.selected').id
			console.log(targetPixel)
			targetPixel.style.backgroundColor = `${colorSelected}`
		}
	});
	
	function createTable(height, weight){
		let table = document.querySelector('#pixel-board');
		for(let index = 0; index < height; index += 1){
			let tr = document.createElement('tr');
			tr.classList.add('main')
			table.appendChild(tr)
			for(let index = 0; index < weight; index += 1){
				let td = document.createElement('td');
				td.classList.add('pixel');
				tr.appendChild(td)
			}
		}
	}

	createTable(5, 5);
}
