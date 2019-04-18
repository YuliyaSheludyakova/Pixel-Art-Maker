const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const colorPicker = document.querySelector('#colorPicker');
const canvas = document.querySelector('table');
const form = document.querySelector('form');


function makeGrid(event) {
  event.preventDefault();
  /**
  * @description Removes all rows and cells if the canvas already exists.
  */
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  /**
  * @description Creates a new canvas.
  */
  for (let x = 1; x <= inputHeight.value; x++) {
    const newRow = canvas.insertRow(-1);
    for (let y = 1; y <= inputWidth.value; y++) {
      const newColumn = newRow.insertCell(-1);
    }
  }
}

/**
* @description Colors a chosen cell in a chosen color
* and prevents from coloring the entire canvas
* when clicking on the outer right border.
*/
function colorPixel(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = colorPicker.value;
  }
}

/**
* @description Creates the canvas of a chosen size
* after the user submits the form.
*/
form.addEventListener('submit', makeGrid);
/**
* @description Colors a chosen cell after the user clicks on it.
*/
canvas.addEventListener('click', colorPixel);
