const contenedor=document.querySelector("main");

let contenidoHTML='';
let rotate=0;
let delay=0;

for (let i=0; i<500; i++) {
    delay=-4000+Math.random()*2000;

    contenidoHTML+=`<div class="raya" style="rotate: ${rotate}deg; animation-delay: ${delay}ms;"></div>`;

    rotate+=3.19;
}

contenedor.innerHTML+=contenidoHTML;