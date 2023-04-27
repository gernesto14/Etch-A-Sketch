// Generate multiple squares for grid


function gridFunction() {
    const gridBox = document.createElement("div");
    gridBox.textContent = "";
    gridBox.classList.add('gridBox')
    mainGrid.appendChild(gridBox); 
    
    

    
}
let numberGrid = 256;
let boxWidth = 400 / numberGrid;
let boxWidthPx=  boxWidth + 'px';

//set each grid box property
document.documentElement.style
.setProperty('--boxW', boxWidthPx);
document.documentElement.style
.setProperty('--boxH', boxWidthPx);


//Set parameter for each row count in MainGrid
let gridRow = Math.sqrt(numberGrid);
document.documentElement.style
.setProperty('--gridRow', gridRow);

//Loop to create each individual gridBox
for(i=1; i <= numberGrid; i++){
    gridFunction();
}




//Check if parameter is perfect square number
let perfectSquare = Math.sqrt(numberGrid) % 1 === 0;
console.log(perfectSquare + ' --- perfect square number')