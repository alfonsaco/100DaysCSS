const buscador=document.querySelector("[type=\"text\"");
const busqueda=document.getElementById("busqueda");

buscador.addEventListener("input", function() {
    if(!buscador.value=='') {
        busqueda.style.display='block';
    } else {
        busqueda.style.display='none';
    }
    // Resultados de búsqueda
    document.querySelector("#busqueda p:first-child span").textContent=buscador.value;
    document.querySelector("#busqueda p:nth-child(2) span").textContent=buscador.value;
    document.querySelector("#busqueda p:last-child span").textContent=buscador.value;
});

