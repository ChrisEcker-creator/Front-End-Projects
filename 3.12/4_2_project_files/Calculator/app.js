const one = document.querySelector(".one");
const two = document.querySelector(".two");
const plus = document.querySelector(".plus");
const feld= document.querySelector("#result");


two.addEventListener("click", log);
feld.addEventListener("click", log);
plus.addEventListener("click", log2);

function log(){
    
    feld.value=2;
}

fun tion log2(){
    
    feld.value="+";
}