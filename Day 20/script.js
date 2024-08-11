const enviar=document.getElementById("boton");
const reset=document.getElementById("reset");
const borde=document.getElementById("borde");
const circulo=document.getElementById("circulo");
const avion=document.getElementById("avion");
const mail=document.getElementById("mail");

enviar.addEventListener("click", function() {
    enviar.classList.add("boton-enviar");
    reset.classList.add("boton-reset");
    borde.classList.add("animacion-circulo");
    circulo.classList.add("animacion-circulo");
    mail.classList.add("animacion-svg");
    avion.classList.add("animacion-svg-reverse");
});

reset.addEventListener("click", function() {
    enviar.classList.remove("boton-enviar");
    reset.classList.remove("boton-reset");
    borde.classList.remove("animacion-circulo");
    circulo.classList.remove("animacion-circulo");
    mail.classList.remove("animacion-svg");
    avion.classList.remove("animacion-svg-reverse");
});