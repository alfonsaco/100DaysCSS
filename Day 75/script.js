const cont=document.querySelector(".container");

let contenidoHTML='';
let contClase=0;

for (let i=0; i<6; i++) {
    contClase++;
    contenidoHTML+=`<div class="circulo${contClase}"></div>`;
}

cont.innerHTML+=contenidoHTML;