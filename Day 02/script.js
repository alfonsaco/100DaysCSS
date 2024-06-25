const boton=document.getElementById("boton");

const rayaArriba=document.getElementById("raya-arriba");
const rayaMedio=document.getElementById("raya-medio");
const rayaAbajo=document.getElementById("raya-abajo");

let isActive=false;

boton.addEventListener("click", function() {
    if(!isActive) {
        rayaArriba.classList.add("animacion-extremo-arriba");
        rayaAbajo.classList.add("animacion-extremo-abajo");
        rayaArriba.classList.remove("animacion-extremo-arriba-invertida");
        rayaAbajo.classList.remove("animacion-extremo-abajo-invertida");
        rayaMedio.style.transitionDelay='0s';
        rayaMedio.classList.add("animacion-medio");
        isActive=true;
    } else {
        rayaArriba.classList.remove("animacion-extremo-arriba");
        rayaAbajo.classList.remove("animacion-extremo-abajo");
        rayaArriba.classList.add("animacion-extremo-arriba-invertida");
        rayaAbajo.classList.add("animacion-extremo-abajo-invertida");
        // La animación de raya medio, en lugar de ponerla como "toggle" lo hago de la siguiente manera, para así poder añadirle un delay
        // y que quede mucho mejor, ya que de lo contrario, la animación queda regular
        rayaMedio.style.transitionDelay='600ms';
        rayaMedio.classList.remove("animacion-medio");
        isActive=false;
    }

    
});