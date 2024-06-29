const archivo=document.getElementById("archivo");
const botonSubir=document.getElementById("boton-upload");
const rayaCarga=document.querySelector(".raya-carga > div");
const imagenes=document.querySelectorAll("img");
const label=document.querySelector(".label");


archivo.addEventListener("input", function() {
    if(archivo.value != "") {
        label.textContent=archivo.value.split("\\").pop();
    }
});

// Contador para evitar que la animación del botón se ejecute una vez ya esté seleccionado el archivo
let cont=0;
botonSubir.addEventListener("click", function() {
    console.log(cont);
    if(archivo.value != "" && cont==0) {
        cont++;
        label.classList.add("desaparecer");
        
        imagenes[1].style.display='block';
        rayaCarga.classList.add("animacion-carga");
        botonSubir.textContent="Uploading..."

        setTimeout(() => {
            botonSubir.textContent="Done";
            label.style.visibility='hidden';
            imagenes[1].style.display='none';
            imagenes[2].style.display='block';
        }, 3000);
    }
});


