const contenedor=document.querySelector("main");

let contenidoTHML='';
let rotate=0;
let cont=0;

let animaciones=document.createElement("style");
document.head.appendChild(animaciones);

for (let e=0; e<30; e++) {
    if(rotate>340 && rotate<700) {
        contenidoTHML+=`<div class="raya" style="animation: rayitas${cont} 10s ease infinite 100ms; filter: blur(3px); opacity: 0.2;"></div>`;
    } else if(rotate>700) {
        contenidoTHML+=`<div class="raya" style="animation: rayitas${cont} 10s ease infinite 200ms; filter: blur(4px); opacity: 0.1;"></div>`;
    } else {
        contenidoTHML+=`<div class="raya" style="animation: rayitas${cont} 10s ease infinite;"></div>`;
    }
    rotate+=36;

    animaciones.sheet.insertRule(`@keyframes rayitas${cont} {
        from {
            scale: 0;
            rotate: 0deg;
        }
        5% {
            rotate: 0deg;
            scale: 1;
        }
        15% {
            scale: 1;
            width: 40px;
            rotate: ${rotate}deg;
            transform: translateY(0px); 
        }
        20% {
            transform: translateY(100px);
            width: 10px;
            height: 40px;
        }
        25% {
            width: 10px;
            height: 10px;
            transform: translateY(100px) skew(20deg) rotate(90deg);
        }
        30% {
            width: 10px;
            height: 50px;
            transform: translateY(100px) rotate(90deg);
        }
        35% {
            width: 4px;
            height: 30px;
            transform: translateY(43px) skew(40deg) rotate(90deg);
        }
        40% {
            width: 4px;
            height: 30px;
            transform: translateY(-25px) skew(40deg) rotate(90deg) translateX(40px);
        }
        45% {
            width: 4px;
            height: 30px;
            transform: translateY(43px) skew(40deg) rotate(90deg) translateX(-30px);
        }
        50% {
            width: 4px;
            height: 30px;
            transform: translateY(60px);
        }
        55% {
            width: 15px;
            height: 4px;
            transform: translateY(50px);
            border-radius: 0px;
        }
        60% {
            width: 15px;
            height: 15px;
            transform: translateY(60px);
            border-radius: 100%;
        }
        65% {
            width: 15px;
            height: 15px;
            transform: translateY(0px);
            border-radius: 100%;
        }
        70% {
            width: 5px;
            height: 20px;
            transform: translateY(60px);
            border-radius: 0px;
        }
        75% {
            width: 5px;
            height: 5px;
            transform: translateY(60px);
        }
        80% {
            width: 10px;
            height: 10px;
            transform: translateY(50px);
        }
        85% {
            width: 10px;
            height: 10px;
            transform: translateY(50px) rotate(40deg);
        }
        90% {
            width: 4px;
            height: 10px;
            transform: translateY(0px);
        }
        to {
            width: 4px;
            height: 10px;
            transform: translateY(300px);
            rotate: ${rotate}deg;
        }
    }` ,animaciones.sheet.cssRules.length);

    cont++;
}

contenedor.innerHTML+=contenidoTHML;