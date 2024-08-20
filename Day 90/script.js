const contenedor=document.querySelector("main");

let contenidoHTML='';
for (let e=0; e<20; e++) {
    contenidoHTML+=`<div class="linea">
                        <div class="izq"></div>
                        <div class="dcha"></div>
                    </div>`;
}
contenedor.innerHTML+=contenidoHTML;

// Seguir cursor
const cursor=document.getElementById("cursor");
const lineas=document.querySelectorAll(".linea");

contenedor.addEventListener("mousemove", function(e) {
    const recta=contenedor.getBoundingClientRect();
    console.log(recta);
    const x=e.clientX - recta.left - 30;
    const y=e.clientY - recta.top + 15;

    cursor.style.top=`${y}px`;
    cursor.style.left=`${x}px`
});

lineas.forEach(linea => {
    linea.addEventListener("mouseover", function() {
        linea.querySelector(".izq").style.width='100%';
        linea.querySelector(".dcha").style.width='100%';

        linea.previousElementSibling.querySelector(".izq").style.width='100%';
        linea.previousElementSibling.querySelector(".dcha").style.width='100%';

        linea.nextElementSibling.querySelector(".izq").style.width='100%';
        linea.nextElementSibling.querySelector(".dcha").style.width='100%';
    });

    linea.addEventListener("mouseout", function() {
        linea.querySelector(".izq").style.width='0%';
        linea.querySelector(".dcha").style.width='0%';

        linea.previousElementSibling.querySelector(".izq").style.width='0%';
        linea.previousElementSibling.querySelector(".dcha").style.width='0%';

        linea.nextElementSibling.querySelector(".izq").style.width='0%';
        linea.nextElementSibling.querySelector(".dcha").style.width='0%';
    });
});
