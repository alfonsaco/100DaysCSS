const tarjetas=document.querySelectorAll(".tarjeta");

tarjetas[0].querySelector(".abajo").addEventListener("click", function() {
    tarjetas[1].classList.remove("animacion-final");
    tarjetas[1].classList.add("animacion-inicial");
    tarjetas[0].classList.remove("animacion-inicial");
    tarjetas[0].classList.add("animacion-final");
});

tarjetas[1].querySelector(".abajo").addEventListener("click", function() {
    tarjetas[2].classList.remove("animacion-final");
    tarjetas[2].classList.add("animacion-inicial");
    tarjetas[1].classList.remove("animacion-inicial");
    tarjetas[1].classList.add("animacion-final");
});

tarjetas[2].querySelector(".abajo").addEventListener("click", function() {
    tarjetas[0].classList.remove("animacion-final");
    tarjetas[0].classList.add("animacion-inicial");
    tarjetas[2].classList.remove("animacion-inicial");
    tarjetas[2].classList.add("animacion-final");
});