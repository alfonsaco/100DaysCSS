const delante=document.getElementById("delante");
const detras=document.getElementById("detras");
const boton=document

document.querySelector(".container").addEventListener("click", function() {
    document.getElementById("delante").classList.toggle("animacion-cara-superior");
    document.getElementById("detras").classList.toggle("animacion-cara-posterior");
});
