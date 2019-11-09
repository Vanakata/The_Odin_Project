let parent = document.getElementById("square-container");
let clearBtn = document.querySelector(".clearBtn");

const myGrid = (input) => {
    if (input > 64){
        alert("The number must be equal or less than 64");
        myGrid(16);
    }

        if (input !== 0) {
            
            for (let i = 0; i < input; i++) {

                for (let k = 0; k < input; k++) {

                    let child = document.createElement("div");
                    child.setAttribute("class", "square");
                    child.style.width = `${40 / input}em`;
                    child.style.height = `${40 / input}em`;
                    child.addEventListener("mouseover", () => {
                        child.style.background= "linear-gradient(white,blue)"
                    })
                    parent.appendChild(child);

                }

            }
        }
}
const clearGrid = () => {
    parent.innerHTML = "";
    let squares = prompt("Please enter how many grids you want: ");
    myGrid(squares);
}
myGrid(16)

