const lluvia=document.querySelector(".lluvia");
let contenidoHTML='';
let delay=0;
let izq=0;

for (let i=0; i<300; i++) {
    izq=Math.round(1+Math.random()*300);
    delay=Math.round(1+Math.random()*8000);
    
    contenidoHTML+=`<div class="gota" style="left=${izq}px; animation-delay: ${delay}ms;"></div>`;
}

lluvia.innerHTML=contenidoHTML;