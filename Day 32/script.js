const contador=document.getElementById("contador");
const sumar=document.querySelector(".sumar");
const restar=document.querySelector(".restar");

let cont=0;

sumar.addEventListener("click", function() {
    cont++;
    contador.innerHTML=cont;
    
     contador.classList.remove("animacion-sumar");
     contador.classList.remove("animacion-restar");
     void contador.offsetWidth;
     contador.classList.add("animacion-sumar");
});

restar.addEventListener("click", function() {
    cont--;
    contador.innerHTML=cont;

    contador.classList.remove("animacion-restar");
    contador.classList.remove("animacion-sumar");
     void contador.offsetWidth;
     contador.classList.add("animacion-restar");
});