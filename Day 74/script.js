const form=document.querySelector(".container");

const primerActivo=document.getElementById("boton1");
primerActivo.checked=true;
primerActivo.parentNode.style.color='rgb(76, 101, 168)';
primerActivo.parentNode.querySelector(".animacion").classList.add("activar-animacion");

form.addEventListener("change", function(e) {
    const radio=document.querySelectorAll("label");
    radio.forEach(label => {
        label.style.color = "#fff";
        const divAnimacion=label.querySelector(".animacion");
        divAnimacion.classList.remove("activar-animacion");
    });

    if(e.target.checked) {
        e.target.parentNode.style.color='rgb(76, 101, 168)';
        const divAnimacion=e.target.parentNode.querySelector(".animacion");
        divAnimacion.classList.add("activar-animacion");
    }
});