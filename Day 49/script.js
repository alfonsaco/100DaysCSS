const contenedor = document.querySelector("main");
const cursor = document.getElementById("cursor");

contenedor.addEventListener("mousemove", function(e) {
    const recta = contenedor.getBoundingClientRect();
    const x = e.clientX - recta.left;
    const y = e.clientY - recta.top;

    cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
});

contenedor.addEventListener("mouseleave", function() {
    cursor.style.transform = `translate(190px, 190px)`;
});
