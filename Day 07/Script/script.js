const botonBuscador=document.querySelector(".fa-search");
const buscar=document.querySelector("#search");
// Función para desplegar el buscador
botonBuscador.addEventListener("click", function() {
    buscar.classList.toggle("mover-buscador");
});

const boton=document.querySelector(".boton");
const fichaPosterior=document.querySelector(".ficha-posterior");
const fichaSuperior=document.querySelector(".ficha-superior");
// Función para mostrar la ficha posterior
boton.addEventListener("click", function() {
    fichaPosterior.classList.toggle("mover-ficha-posterior");
    fichaSuperior.classList.toggle("mover-ficha-superior");
});