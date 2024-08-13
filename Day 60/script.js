const div=document.getElementById("blur");
const contenedor=document.querySelector("main");

contenedor.addEventListener("mousemove", function(e) {
    div.style.transitionDuration='0s';
    const porcentaje=(e.clientY-275)/4;

    div.style.height=`${porcentaje}%`;
});

contenedor.addEventListener("mouseout", function() {
    div.style.height=`50%`;
    div.style.transitionDuration='0.5s';
});