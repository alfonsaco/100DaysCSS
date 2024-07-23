const container=document.querySelector("main");
let contenidoHTML='';
let animaciones=document.createElement("style");
document.head.appendChild(animaciones);
let contAnimacion=0;
let movimiento=0;

for (let i=0; i<174; i++) {
    contAnimacion++;
    // Creación de las bolas
    contenidoHTML+=`<div class="bola" style="animation: subeBaja${contAnimacion} 2s ease-in-out infinite;"></div>`;
    // Inserto animaciones en el head
    animaciones.sheet.insertRule(`@keyframes subeBaja${contAnimacion} {
        from { transform: translateY(${movimiento}px); }
        50% { transform: translateY(${-movimiento}px); }
        to { transform: translateY(${movimiento}px); }
    }`, animaciones.sheet.cssRules.length);
    
    if(contAnimacion >= 87) {
        movimiento-=1+(movimiento*0.012);
    } else {
        movimiento+=1+(movimiento*0.012);
    }
}

container.innerHTML+=contenidoHTML;