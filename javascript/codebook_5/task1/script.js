let text = document.getElementById("sample")
let button1 = document.getElementById("btn")

// button.onclick = () => {
//     changeColor();
// }
button1.onclick =()=> {
    changeColor();
}
function changeColor(){
   text.style.color = "blue"; 
   text.style.display = "flex";
}