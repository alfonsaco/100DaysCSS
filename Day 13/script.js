const imagenes=document.querySelectorAll(".fotos > div");

const fondo=document.querySelector(".fondo");
const objetos=document.querySelector(".objetos");
const botonExit=document.getElementById("boton-exit");
const img=document.querySelector(".imagen");
const divDesplegable=document.querySelector(".div-desplegable");

// Función que se activa al pulsar en las imágenes
imagenes.forEach(imagen => {
    imagen.addEventListener("click", function() {
        divDesplegable.style.visibility='visible';
        fondo.classList.add("animacion-fondo");
        objetos.classList.add("animacion-objetos");
        botonExit.classList.add("animacion-boton");
        img.classList.add("animacion-imagen");
    });
});

// Función que se activa al pulsar en el botón X
botonExit.addEventListener("click", function() {
    fondo.classList.remove("animacion-fondo");
    objetos.classList.remove("animacion-objetos");
    botonExit.classList.remove("animacion-boton");
    botonExit.classList.add("animacion-boton-inversa");
    img.classList.remove("animacion-imagen");
    divDesplegable.style.visibility='hidden';
});