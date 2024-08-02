const contenedor=document.querySelector("main");

let contenidoHTML='';
let delay=0;

for (let i=0; i<10; i++) {
    contenidoHTML+=`<div class="aro" style="animation-delay: ${delay}ms;"></div>`;

    delay+=100;
}

contenedor.innerHTML+=contenidoHTML;