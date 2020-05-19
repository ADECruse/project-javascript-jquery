const classicButton = document.getElementById('classic');
const grid = document.getElementById('grid');

const addBlack = function (e) {
    this.classList.add('black');
    console.log(e);
}

const addGradientBlack = function (e) {
    
}

const addRainbow = function (e) {
    
}

const resetGrid = function (e) {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

const createGrid = function (e) {
    // resetGrid();
    console.log(e)
    const div = document.createElement('div')
    div.classList.add('cell');
    var input = Number(window.prompt('Please enter grid size','32'));
    console.log(input);
    var size = Math.floor(960 / input) - 2;
    console.log(size);

    var count = 0;
    console.log(count);

    var squared = input * input;
    console.log(squared);
   
    while (count < squared) { 
        grid.appendChild(div.cloneNode(false));
        count++;
    };
    const cell = document.querySelectorAll('.cell');
    console.log(cell);
    cell.forEach(e => e.style.cssText = 'height:' + size + 'px; width:' + size + 'px');
}

const newClassicGrid = function (e) {
    resetGrid();
    createGrid();
    cell.forEach(e => e.addEventListener('mouseover', addBlack));
}

classicButton.addEventListener('click', newClassicGrid);
// cell.forEach(e => e.addEventListener('hover', addBlack))