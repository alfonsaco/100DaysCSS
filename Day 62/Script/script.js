const basic=document.getElementById("basic");
const lineaUno=document.getElementById("linea-uno");
const lineaDos=document.getElementById("linea-dos");
const lineaTres=document.getElementById("linea-tres");

basic.addEventListener("mouseover", function() {
    lineaUno.style.width='5%';
    lineaDos.style.width='5%';
    lineaTres.style.width='5%';
});

const pro=document.getElementById("pro");
pro.addEventListener("mouseover", function() {
    lineaUno.style.width='30%';
    lineaDos.style.width='75%';
    lineaTres.style.width='50%';
});

const premium=document.getElementById("premium");
premium.addEventListener("mouseover", function() {
    lineaUno.style.width='100%';
    lineaDos.style.width='100%';
    lineaTres.style.width='100%';
})

// Función para resetear a 0 los valores
basic.addEventListener("mouseout", resetear);
pro.addEventListener("mouseout", resetear);
premium.addEventListener("mouseout", resetear);
function resetear() {
    lineaUno.style.width='0%';
    lineaDos.style.width='0%';
    lineaTres.style.width='0%';
}