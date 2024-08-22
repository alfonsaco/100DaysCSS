const iris=document.querySelector(".iris");

let contenidoHTML='';
let rotate=0;
let colores=['#fff','#6B366D','#DB9442','#DB9442'];
let n=0;

for (let e=0; e<30; e++) {
    n=Math.round(Math.random()*3);
    console.log(n);
    contenidoHTML+=`<div class="raya" style="rotate: ${rotate}deg; background-color: ${colores[n]};"></div>`;
    rotate+=12;
}

iris.innerHTML+=contenidoHTML;