document.getElementById("container").addEventListener("click", function() {
    const borde=document.querySelector("circle");
    const bordeRotar=document.querySelector("svg");
    const micro=document.querySelector("i");
    const puntos=document.querySelectorAll(".puntos > div");
    const divPuntos=document.querySelector(".puntos");

    borde.classList.toggle("animacion-borde");
    bordeRotar.classList.toggle("animacion-rotar");
    micro.classList.toggle("desaparecer-micro");
    // Delay para los puntos porque CSS no me deja ponerlo
    puntos[1].style.animationDelay='200ms';
    puntos[2].style.animationDelay='400ms';
    puntos.forEach(e => {
        e.classList.toggle("animacion-puntos");
    });
    divPuntos.classList.toggle("aparicion");
});