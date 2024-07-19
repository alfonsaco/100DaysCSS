// Animación viento
const vientoSillaRuedas=document.querySelector(".viento");

let contenidoHTML='';
let delay=0;
let arriba=0;

for (let i=0; i<5; i++) {
    delay=Math.round(1+Math.random()*3000);
    arriba=Math.round(1+Math.random()*80);

    contenidoHTML+=`<div class="speed" style="animation-delay: ${delay}ms; top: ${arriba}px;"></div>`;
}

vientoSillaRuedas.innerHTML+=contenidoHTML;

// Animación piedras
const piedras=document.querySelector(".piedras");

let contenidoHTML2='';
let velocidad=0;
let tamaño=0;

for (let e = 0; e<20; e++) {
    velocidad=Math.round(1+Math.random()*2);
    tamaño=3+Math.random()*5;

    contenidoHTML2+=`<div class="piedra" style="width: ${tamaño}px; height: ${tamaño}px; animation-duration: ${velocidad}s;"></div>`;
}

piedras.innerHTML+=contenidoHTML2;