const enter = document.querySelector("#shesvla");
const container = document.querySelector(".container");
const fotka = document.querySelector(".fotka");

enter.addEventListener("click", function(){
    container.classList.toggle("d-none");
    fotka.classList.toggle("d-block");
});