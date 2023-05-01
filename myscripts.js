// Generate multiple squares for grid
function generateGridElements(numberGrid) {
    //Create the 'mainGrid' element
    const mainGrid = document.createElement('div');
    mainGrid.classList.add('mainGrid')
    mainGrid.setAttribute('id', 'mainGrid')
    document.getElementById("mainContainer").appendChild(mainGrid)
    
    //Create all 'gridBox' elements
    for(i=0; i < numberGrid; i++){
        const gridBox = document.createElement("div");
        gridBox.textContent = "";
        gridBox.classList.add('gridBox')
        gridBox.setAttribute('id', 'gridBox')
        document.getElementById("mainGrid").appendChild(gridBox);
    }   
}

//Remove all 'gridBox' elements
function removeElements(){
    const main = document.getElementById('mainGrid');
    document.getElementById('mainGrid').remove();
}

//Apply pixels set value input
function applyPixels(){
    //Get pixels value
    const setPixels = document.getElementById("inputPixels").value;

    //Check input between 1-100
    if(setPixels > 0 && setPixels <= 100){
        //Remove parent and child elements
        removeElements();

        //Setup the new grid 
        gridSet();
    }
    else
        alert("Value must be between 1 and 100");
}

//Setup the grid 
function gridSet(){   
    //Get value form input box  
    const setPixels = document.getElementById("inputPixels").value;
    const numberGrid = Math.pow(setPixels,2);
    
    //Set value for mainGrid class row
    document.documentElement.style.setProperty('--gridRow', setPixels);
    
    //Generate new elements for grid
    generateGridElements(numberGrid);
    
}


//Set grid values for the first time the script runs with 16x16 grid
gridSet();

//Event btn apply pixels
const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', applyPixels);

//Event mouse hover
document.addEventListener('mousemove', e =>{
    //Set random color
    var color = Math.floor(Math.random()*16777215).toString(16);
    //Must match gridBox ID
    if (e.target.matches('#gridBox'))    
        e.target.style.backgroundColor = '#'+color;
})