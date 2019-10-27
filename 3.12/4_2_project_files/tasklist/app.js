const inputField = document.querySelector("#task");
const subButton = document.querySelector(".btn");
const list = document.querySelector(".collection");
const exit = document.querySelector(".fa");
const clearAll= document.querySelector(".clear-tasks");


//inputField.addEventListener("click", run);
subButton.addEventListener("click", add);
//exit.addEventListener("click", del);
list.addEventListener("click", del);
clearAll.addEventListener("click", cA);


function add(e){
    if(inputField.value==""){
        alert("Please enter a task");
    }

   const li= document.createElement("li");
   li.className="collection-item";
   li.appendChild(document.createTextNode(inputField.value));
   list.appendChild(li);

    const x = document.createElement("a");
    x.className="delete-item secondary-content x";
    x.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(x);

   console.log(li);
    e.preventDefault();
}

function del(e) {
  if(e.target.classList.contains("fa")){
      e.target.parentElement.parentElement.remove();
  }

    console.log(e.target);
  }

  function cA (e){
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
  }