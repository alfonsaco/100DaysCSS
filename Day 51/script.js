const iconos = document.querySelectorAll("i");
const contenedorIconos = document.querySelector(".iconos");
const contador = document.querySelector(".contador");
let cont = 0;
let intervalo;

// Función para iniciar el intervalo
function iniciarContador() {
    intervalo = setInterval(() => {
        cont++;

        if (cont <= 9) {
            contador.textContent = '000' + cont;
        } else if (cont > 9 && cont <= 99) {
            contador.textContent = '00' + cont;
        } else if (cont > 99 && cont <= 999) {
            contador.textContent = '0' + cont;
        } else if (cont > 999 && cont <= 9999) {
            contador.textContent = cont;
        }
    }, 1000);
}

// Iniciar el contador por primera vez
iniciarContador();

contenedorIconos.addEventListener("click", function() {
    iconos.forEach(icono => {
        icono.classList.toggle("desaparecer");
    });

    if (iconos[0].classList.contains("desaparecer")) {
        clearInterval(intervalo);
    } else {
        iniciarContador();
    }
});
