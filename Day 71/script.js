const teclado = document.querySelector(".abajo");
const morse = document.querySelector(".morse");

teclado.addEventListener("click", function(e) {
    const tecla = e.target;
    const atributo = tecla.getAttribute("data-morse");
    console.log(atributo);

    if (atributo != null) {
        for (let i = 0; i < atributo.length; i++) {
            (function(i) {
                setTimeout(() => {
                    if (atributo.charAt(i) == '.') {
                        morse.classList.remove("animacion-punto", "animacion-raya");
                        void morse.offsetWidth;
                        morse.classList.add("animacion-punto");
                    } else if (atributo.charAt(i) == '-') {
                        morse.classList.remove("animacion-punto", "animacion-raya");
                        void morse.offsetWidth;
                        morse.classList.add("animacion-raya");
                    }
                }, i * 500);
            })(i);
        }
    }
});
