const contenedor=document.querySelector("main");

let contenidoHTML='';
let delay=-4000;
let rotate=0;

for (let i=0; i<67; i++) {
    contenidoHTML+=`<div class="anillo" style="animation-delay: ${delay}ms;">`;
        for (let e=0; e<80; e++) {
            contenidoHTML+=`<div class="punto" style="rotate: ${rotate}deg;"></div>`;

            rotate+=4.5;
        }
    contenidoHTML+=`</div>`;

    delay+=150;

}

contenedor.innerHTML+=contenidoHTML;