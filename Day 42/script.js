const contenedor=document.querySelector(".container");

let contenidoHTML='';
let vertical=0;
let horizontal=0;
let delay=0;

for (let i=0; i<500; i++) {
    vertical=Math.random()*300;
    horizontal=Math.random()*300;
    delay=-500+Math.random()*3499;

    contenidoHTML+=`<div class="estrella" style="top: ${vertical}px; left: ${horizontal}px; animation-delay: ${delay}ms;"></div>`;
}

contenedor.innerHTML+=contenidoHTML;


contenidoHTML='';
for (let e = 0; e < 4; e++) {
    delay=Math.random()*10000;
    horizontal=-250+Math.random()*450;

    contenidoHTML+=`<div class="meteorito" style="top: ${horizontal}px; animation-delay: ${delay}ms;">
                        <div class="senda"></div>
                        <div class="bola"></div>
                    </div>`;
}
contenedor.innerHTML+=contenidoHTML;