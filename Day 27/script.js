const divs=document.querySelectorAll(".abajo > div");

divs.forEach(div => {
    div.addEventListener("click", function() {
        div.querySelector(".circulo").classList.toggle("circulo-activo");
        div.querySelector("p").classList.toggle("texto-activo");
        div.querySelector("polyline").classList.toggle("svg-activo");
    });
});