const classicButton = document.getElementById('classic');
const gradientButton = document.getElementById('gradient');
const rainbowButton = document.getElementById('rainbow');
const grid = document.getElementById('grid');

const addBlack = function (e) {
    this.classList.add('black');
    console.log(e);
}

const addGradientBlack = function (e) {
    let gradient = this.style.opacity;
    this.style.opacity = "-=0.1";
    console.log("Gradient" + gradient);
	if (gradient > 0) {
		
        console.log("Gradient" + gradient);
	};
}

const addRainbow = function (e) {
    let randomColour = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColour;
}

const resetGrid = function (e) {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

const createGrid = function (e) {
    console.log(e)
    const div = document.createElement('div')
    div.classList.add('cell');
    const input = Number(window.prompt('Please enter grid size','32'));
    console.log(input);
    const size = Math.floor(960 / input) - 2;
    console.log(size);

    let count = 0;
    console.log(count);

    const squared = input * input;
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
    const cell = document.querySelectorAll('.cell');
    cell.forEach(e => e.addEventListener('mouseover', addBlack));
}

const newGradientGrid = function (e) {
    resetGrid();
    createGrid();
    grid.style.backgroundColor = 'white';
    const cell = document.querySelectorAll('.cell');
    cell.forEach(e => e.addEventListener('mouseover', addRainbow));
}

const newRainbowGrid = function (e) {
    resetGrid();
    createGrid();
    const cell = document.querySelectorAll('.cell');
    cell.forEach(e => e.addEventListener('mouseover', addRainbow));
}

classicButton.addEventListener('click', newClassicGrid);
gradientButton.addEventListener('click', newGradientGrid);
rainbowButton.addEventListener('click', newRainbowGrid);

// cell.forEach(e => e.addEventListener('hover', addBlack))