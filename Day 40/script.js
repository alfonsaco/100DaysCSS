document.querySelectorAll("img").forEach(imagen => {
    imagen.addEventListener("click", function() {
        imagen.classList.toggle("imagen-activada");
        document.querySelector(".fondo").classList.toggle("activar-fondo");
    });
});