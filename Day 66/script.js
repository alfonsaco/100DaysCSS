// Para crear las puntas más rápido
const puntas=document.querySelector(".puntas");
let contenidoHTML='';
let rotate=0;

for (let i=0; i<12; i++) {
    contenidoHTML+=`<div style="rotate: ${rotate}deg;"></div>`;
    rotate+=30;
}
puntas.innerHTML=contenidoHTML;

// Función del botón 
const boton=document.querySelector(".boton");

boton.addEventListener("click", function() {
    boton.classList.toggle("estilos-check");
    puntas.querySelectorAll("div").forEach(punta => {
        punta.classList.toggle("puntas-animacion");
    });
});