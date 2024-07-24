window.addEventListener("DOMContentLoaded", function() {
    const modal=document.querySelector(".modal");
    const boton=this.document.getElementById("boton");

    modal.classList.add("animacion-inicial");

    boton.addEventListener("click", function() {
        modal.classList.remove("animacion-inicial");
        modal.classList.add("animacion-invertida");
    });
});