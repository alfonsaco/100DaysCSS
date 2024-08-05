const contenedor=document.querySelector("main");

let contenidoHTML='';
let tamañoAnillo=60;
let rotate=0;
let transform=45;
let scale=4;
let opacity=0.5;
let rotateAnillo=0;
let contAni=0;
let transAni=25;

let animaciones=document.createElement("style");
document.head.appendChild(animaciones);

for (let i=0; i<6; i++) {
    contenidoHTML+=`<div class=anillo style="width: ${tamañoAnillo}px; height: ${tamañoAnillo}px; rotate: ${rotateAnillo}deg;">`;
    
    for (let e=0; e<12; e++) {
        contenidoHTML+=`<div class="punto" style="rotate: ${rotate}deg; transform: translateY(${transform}px); animation: puntos${contAni} 5s ease alternate infinite;">
                            <div style="width: ${scale}px; height: ${scale}px; opacity: ${opacity};"></div>
                        </div>`;

        rotate+=30;
    }
    contenidoHTML+=`</div>`;

    animaciones.sheet.insertRule(`@keyframes puntos${contAni} {
            from {
                transform: translateY(${transform}px);
            }
            to {
                transform: translateY(${transform+transAni}px);
            }
        }` ,animaciones.sheet.cssRules.length);

    tamañoAnillo+=20;
    transform+=10;
    rotate=0;
    rotateAnillo+=-10;
    scale+=1;
    opacity+=0.1;
    transAni-=7;
    contAni++;
}

contenedor.innerHTML+=contenidoHTML;