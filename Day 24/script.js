const boton=document.getElementById("boton");
const tick=document.querySelector("button img");
const borde=document.querySelector("circle");
const circulo=document.querySelector(".circulo");

boton.addEventListener("click", function() {
    boton.classList.toggle("animacion-boton");
    tick.classList.toggle("animacion-tick");
    borde.classList.toggle("animacion-borde");
    circulo.classList.toggle("animacion-circulo");
});
