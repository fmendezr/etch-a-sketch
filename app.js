 // change colors of squares when mouse passes over them 
 const addColor = () => {
    const squares = document.querySelectorAll(".grid-square")
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "red";
        })
    });
 }
 
 // create squares and change ammount of rows and colums that organize grid
 const createSquares = (size = 16) => {
    // first adjust the ammount of squares the board then 
    const grid = document.getElementById("grid");
    const squares = document.querySelectorAll(".grid-square");
    // remove squares if there are any (used for when you cahange stuff)
    squares.forEach(square => 
        square.remove()
        );
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i =0; i < size*size; i++){
        let square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        square.style.backgroundColor = "black";
        square.style.border = "1px solid white";
        grid.insertAdjacentElement("beforeend", square);
    }
    addColor();
 };

createSquares();
 
// set up change 
const sizeInput = document.getElementById("size-input");
sizeInput.addEventListener('change', () => {
    createSquares(sizeInput.value);
});

// make displayer show active value of range input 
const displayInput = document.getElementById('display-input');
sizeInput.addEventListener('input', () => {
    displayInput.textContent = sizeInput.value + " x " + sizeInput.value;
});

// clear grid 
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.grid-square')
    squares.forEach(square =>
        square.style.backgroundColor = 'black')
})
