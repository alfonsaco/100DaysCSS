const contenido=document.querySelector("main");

let contenidoHTML='';
let anchura=0;
let altura=0;
let delay=700;
let zInd=100;

for (let i=0; i<20; i++) {
    altura+=10;
    anchura+=10;
    contenidoHTML+=`<div class="cuadrado" style="width: ${anchura}px; height: ${altura}px; animation-delay: ${delay}ms; z-index: ${zInd};"></div>`;
    
    delay-=35;
    zInd--;
}

contenido.innerHTML+=contenidoHTML;