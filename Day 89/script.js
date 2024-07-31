const contenedor=document.querySelector("main");
let contenidoHTML='';

for (let i=0; i<100; i++) {
    contenidoHTML+=`        <div>
                    <div></div>
                    <div></div>
                            </div>`;
}

contenedor.innerHTML+=contenidoHTML;