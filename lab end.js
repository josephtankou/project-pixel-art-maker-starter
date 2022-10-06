//imports useful elements, and assigns them to variables
const canvas = document.getElementById("pixelCanvas");
const $colorPicker = document.getElementById("colorPicker");
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// the height and width variable
function submitForm(){
    const rows = document.getElementById("inputHeight").value;
    const cols = document.getElementById("inputWidth").value;

    makeGrid(rows, cols);
}
function changeColor() {
    var colorPicker =  document.getElementById('colorPicker').Value;
    this.style.background = $colorPicker.value;
}

//function to create grid and assign all cells on creation
function makeGrid(rows, cols) {

    canvas.innerHTML = '';
    
    for(let i = 0; i< rows; i++){

        let row = canvas.insertRow(i);
        for(let j = 0; j< cols; j++){
            let cell = row.insertCell(j);
            //cell.onclick = changeColor;
            cell.addEventListener('click', function(event){
                this.style.background = document.getElementById('colorPicker').value;
                 //target.style.backgroundColor = document.getElementById('colorPicker').Value;
           })
        }
    }

// Your code goes here!

}
