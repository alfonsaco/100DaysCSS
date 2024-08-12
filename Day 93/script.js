const candado=document.querySelector(".datos");

let contenidoHTML='';
let rotateGrande=0;
let rotateRayita=0;
let rotateNumero=180;
let numero=0;

for (let i=0; i<8; i++) {
    contenidoHTML+=`<div class="raya-grande" style="rotate: ${rotateGrande}deg;"></div>`;
    rotateGrande+=45;
}
for (let e=0; e<40; e++) {
    contenidoHTML+=`<div class="rayita" style="rotate: ${rotateRayita}deg;"></div>`;
    rotateRayita+=9;
}
for (let i=0; i<8; i++) {
    contenidoHTML+=`<div class="numero" style="rotate: ${rotateNumero}deg;">${numero}</div>`;
    rotateNumero+=45;
    numero+=5;
}

candado.innerHTML+=contenidoHTML;