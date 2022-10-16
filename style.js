const btn = document.querySelector(".code");
const box1 = document.querySelectorAll(".box");

//The below fucntion generates the Hex values

function generateColor(){
    box1.forEach((color)=>{
        let hex = "#" + Math.random().toString(16).substring(2,8);
        color.style.background = hex;
        color.innerHTML = hex;
    })
}
btn.addEventListener("click",generateColor);


