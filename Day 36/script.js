const iconos=document.querySelectorAll(".iconos > div");
const contenidos=document.querySelectorAll(".abajo > div");

iconos.forEach((icono, i) => {
    icono.addEventListener("click", function() {
        iconos.forEach(icono => {
            icono.classList.remove("active");
        });
        contenidos.forEach(contenido => {
            contenido.classList.remove("active");
        });

        icono.classList.add("active");
        contenidos[i].classList.add("active");
    });
});