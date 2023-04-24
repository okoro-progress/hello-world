alert("i am mr another")

let sub = document.getElementById("sub");

//  function vital(){
//     sub.textContent = "what did you think clicking on \" SUB\" will do for you";
// }


sub.addEventListener("click",  function (){
    sub.textContent = "what did you think clicking on \" SUB\" will do for you";
    sub.style.width = "auto";
    sub.style.backgroundColor = "pink"
    sub.style.color = "#000"
});