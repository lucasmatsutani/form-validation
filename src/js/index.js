const inputs = document.querySelectorAll(".input");
const texts = document.querySelectorAll(".text");
const button = document.querySelector("button");

let buttonClicked = false

inputs.forEach((input, indice) => {
    input.addEventListener("change", () => {
        if (input.value){
            input.classList.add("okay");
        } else {
            input.classList.remove("okay");
        }
    });
});

button.addEventListener("click", (e) => {
    e.preventDefault();
    inputs.forEach((input, indice) => {
        if(input.value === ""){
            input.classList.add("required");
            texts[indice].classList.add("text-required");
        } else {
            input.classList.remove("required");
            input.classList.add("okay")
            texts[indice].classList.remove("text-required");
        }
    });
});