const container=document.querySelector("main");

let contenidoHTML='';
let rotate=0;
let animaciones=document.createElement("style");
document.head.appendChild(animaciones);

for (let e=0; e<18; e++) {
    contenidoHTML+=`<div class="cuadrado" style="rotate: ${rotate}deg;"></div>`;

    animaciones.sheet.insertRule(`@keyframes animacion {
    from {
        width: 100px;
        border-radius: 100%;
    }
    50% {
        width: 300px;
        border-radius: 0%;
        rotate: 0deg;
    }
    to {
        rotate: ${rotate};
    }
    }`);

    rotate+=20;
}

container.innerHTML+=contenidoHTML;