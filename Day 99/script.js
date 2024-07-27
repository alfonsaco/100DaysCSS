const contenendor=document.querySelector("main");
const puntas=document.querySelector(".puntas");
let contenidoHTML='';
let rotate=0;

for (let i=0; i<18; i++) {
    contenidoHTML+=`<div style="rotate: ${rotate}deg"></div>`
    rotate+=20;
}
puntas.innerHTML=contenidoHTML;

contenendor.addEventListener("click", function() {
    document.querySelector(".bola-blanca").classList.toggle("animacion-bola");
    document.querySelector(".bola-fondo").classList.toggle("animacion-fondo");
    document.querySelector(".anillo").classList.toggle("animacion-anillo");
    puntas.querySelectorAll("div").forEach(punta => {
        punta.classList.toggle("animacion-puntas");
        console.log(punta)
    });
});