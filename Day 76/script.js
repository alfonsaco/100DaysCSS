const input=document.getElementById("texto");

input.addEventListener("input", function() {
    if(input.value == 'alfonsaco') {
        input.classList.add("input-activo");
        document.querySelector(".secret").classList.add("div-activo");
    }
});