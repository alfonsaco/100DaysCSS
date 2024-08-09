const contenedor=document.querySelector("main");

let contenidoHTML='';

const animaciones=document.createElement("style");
document.head.appendChild(animaciones);

let contAni=0;
let translate=[110,120,20,100,120,180,150,120,200,90,140,100,70,80,25];

for (let i=0; i<15; i++) {
    contenidoHTML+=`<div class="figura" style="    animation: moverFiguras${contAni} 2s ease alternate infinite;"></div>`

    animaciones.sheet.insertRule(`@keyframes moverFiguras${contAni} {
            from, 50% {
                scale: 0.1;
                visibility: hidden;
                transform: translateY(0px) rotate(0deg);
            }
            to {
                visibility: visible;
                scale: 1;
                transform: translateY(${translate[contAni]}px) rotate(140deg);
            }
        }`, animaciones.sheet.cssRules.lenght);
    
    contAni++;
}

contenedor.innerHTML+=contenidoHTML;