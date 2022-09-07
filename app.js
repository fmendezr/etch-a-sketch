 const createSquares = (size = 16) => {
    // first adjust the ammount of squares the board then 
    const grid = document.getElementById("grid");
    const squares = document.querySelectorAll(".grid-square");
    // remove squares if there are any (used for when you cahange stuff)
    squares.forEach(div => 
        div.remove()
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
 };

createSquares();
 

// change colors of squares when mouse passes over them 
 const squares = document.querySelectorAll(".grid-square")
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "red";
    })
})

// set up change 
const sizeInput = document.getElementById("size-input");
sizeInput.addEventListener('change', () => {
    createSquares(sizeInput.value);
})