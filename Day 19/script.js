const fondo=document.querySelector(".fondo");
const bola=document.querySelector(".bola");

document.getElementById("radio1").addEventListener("click", function() {
    fondo.style.transform='translateX(0px)';
    bola.style.transform='translateX(0px)';
});

document.getElementById("radio2").addEventListener("click", function() {
    fondo.style.transform='translateX(-400px)';
    bola.style.transform='translateX(60px)';
});

document.getElementById("radio3").addEventListener("click", function() {
    fondo.style.transform='translateX(-800px)';
    bola.style.transform='translateX(120px)';
});