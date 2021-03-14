function addColor() {
  const colors = document.getElementsByClassName('color')[0].classList.add('selected');
  return colors;
}

addColor();

// agradecimentos ao Anderson e ao William pelo auxílio através do Slack

function removeAndAddSelectedClass() {
  const pai = document.getElementById('dad');
  pai.addEventListener('click', (e) => {
    const targetReceiver = e.target;
    const colorContainer = document.querySelectorAll('.color');
    for (let index = 0; index < colorContainer.length; index += 1) {
      colorContainer[index].classList.remove('selected');
    }
    if (targetReceiver.classList.contains('color')) {
      targetReceiver.classList.add('selected');
    }
  });
}

removeAndAddSelectedClass();

function colorPalette() {
  const cores = document.getElementsByClassName('color');
  cores[0].style.backgroundColor = 'black';
  cores[1].style.backgroundColor = 'blue';
  cores[2].style.backgroundColor = 'green';
  cores[3].style.backgroundColor = 'red';
}

colorPalette();


function paintColor() {
  const dadTable = document.getElementById('pixel-board');
  dadTable.addEventListener('click', (e) => {
    const tableTarget = e.target;
    if (tableTarget.className === 'pixel') {
      const selectedItem = document.querySelector('.selected').style.backgroundColor;
      tableTarget.style.backgroundColor = selectedItem;
    }
  });
}

paintColor();

// agradecimentos ao Anderson e ao William pelo auxílio através do Slack