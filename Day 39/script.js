const lineas=document.querySelector(".lineas");
const lista=document.querySelector("ul");
const opciones=document.querySelectorAll("li");

lineas.addEventListener("click", function() {
    lista.classList.add("aparecer-li");
    lineas.querySelectorAll(".linea").forEach(linea => {
        linea.classList.add("animacion-inicial-corta");
        linea.classList.remove("animacion-final-corta");
    });
    
    opciones.forEach(opcion => {
        opcion.addEventListener("click", function() {
            lista.classList.remove("aparecer-li");

            lineas.querySelectorAll(".linea").forEach(linea => {
                linea.classList.remove("animacion-inicial-corta");
                linea.classList.add("animacion-final-corta");
            });
        });
    });
});