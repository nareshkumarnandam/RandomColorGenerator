
let ColorContainer = document.getElementById("ColorDiv");

for(let i = 0 ; i < 30 ; i++){
    let ColorDiv = document.createElement("div");

    ColorDiv.classList.add("container");
    ColorContainer.appendChild(ColorDiv);
}

let allBoxes = document.querySelectorAll(".container");

allBoxes.forEach((div) => {
    let color = randomColor();
    div.style.backgroundColor = color;
    div.innerText = color;
});


function randomColor(){
    let codeFigures = "0123456789abcdef";
    let hexCode = "#";
    for(let i = 0 ; i < 6 ; i++){
        let randomCode = Math.floor( Math.random() * codeFigures.length );
        hexCode += codeFigures[randomCode];
        
    }
    // console.log(hexCode);
    return hexCode;
}

randomColor();