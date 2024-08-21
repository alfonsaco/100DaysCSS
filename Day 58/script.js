let contenidoHTML='';
const bola=document.querySelector(".bola");
let tamaño=40;
let resta=0.1;
let cont=0;
let zIndex=100;
let traslado=-80;
let animaciones=document.createElement("style");
document.head.appendChild(animaciones);

for (let i=0; i<19; i++) {
    cont++;

    if(cont == 10) {
        resta=0.1;
    } else if(cont < 10) { 
        resta*=2;
        tamaño+=15/resta;
    } else if(cont > 10) {
        resta*=2;
        tamaño-=15*resta;
    }

    contenidoHTML+=`<div class="capa" style="height: ${tamaño}px; width: ${tamaño}px; z-index: ${zIndex}; animation: caras${cont} 7s ease infinite;"></div>`

    animaciones.sheet.insertRule(
        `@keyframes caras${cont} {
            from, 10% {
                scale: 0;
            }
            17% {
                scale: 1.1;
            }
            24% {
                scale: 0.9;
            }
            30% {
                scale: 1;
                border-color: #fff;
            }
            35% {
                border: 3px solid rgb(221, 62, 50);
                transform: rotateX(70deg);
            }
            45%, 71% {
                transform: rotateX(70deg) translateZ(${traslado}px);
                border: 3px solid rgb(221, 62, 50);
            }
            81% {
                transform: rotateX(70deg);
                border-color: #fff;
            }
            86% {
                scale: 1;
            }
            93% {
                scale: 1.1;
            }
            to {
                scale: 0;
            }
        }` ,animaciones.sheet.cssRules.length);

    zIndex--;
    traslado+=10;
}

bola.innerHTML+=contenidoHTML;