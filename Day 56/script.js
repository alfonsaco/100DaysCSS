const flor=document.getElementById("flor");
let rotate=0;

let porcentaje=5;
let cont=0;
let animaciones=document.createElement("style");
document.head.appendChild(animaciones);

for (let e=0; e<16; e++) {
    const petalo=document.createElement("div")
    petalo.classList.add("petalo");
    petalo.style.rotate=`${rotate}deg`;
    petalo.style.animationName=`petalos${cont}`;
    flor.appendChild(petalo);

    rotate+=22.5;

    animaciones.sheet.insertRule(
        `@keyframes petalos${cont} {
                from {
                    scale: 1;
                    opacity: 1;
                }
                ${porcentaje}%, 80% {
                    scale: 2.3;
                    opacity: 0.7;
                }
                100% {
                    scale: 1;
                }
            }`
                ,animaciones.sheet.cssRules.length);

    porcentaje+=2;
    cont++;
}