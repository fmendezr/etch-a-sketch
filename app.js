const grid = document.getElementById("grid");
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)"

 const createSquares = () => {
    for (let i =0; i < 256; i++){
        let square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        square.style.backgroundColor = "black";
        square.style.border = "1px solid white";
        grid.insertAdjacentElement("beforeend", square);
    }
 };

 createSquares();