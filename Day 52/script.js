const contenedor=document.querySelector("main");

let contenidoHTML='';
let altura=80;
let anchura=80;

let numPuntos=18;
let rotate=0;
let delay=0;
let color=255;

for (let i=0; i<10; i++) {
    contenidoHTML+=`<div class="onda" style="width: ${anchura}px; height: ${altura}px;">`;

    console.log("Onda 1")
    for (let e = 0; e < numPuntos; e++) {
        contenidoHTML+=`<div class="punto" style="transform: translateY(${altura/2}px); rotate: ${rotate}deg;">
            <div style="animation-delay: ${delay}ms; background-color: rgb(255, ${color}, 0);"></div>
        </div>`
        console.log(rotate)
        rotate+=(360/numPuntos);
    }

    contenidoHTML+=`</div>`;
    altura+=20;
    anchura+=20;    
    numPuntos+=6;
    rotate=0;
    delay+=400;
    color-=25;
}

contenedor.innerHTML+=contenidoHTML;