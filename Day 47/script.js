window.addEventListener("DOMContentLoaded", function() {
    const divs=this.document.querySelectorAll("div");
    
    divs.forEach(e => {
        if(e.classList.contains("active")) {
            e.classList.add("cambiar-color");
        }
    });
    
    const main=document.getElementById("main");

    main.addEventListener("click", function(e) {
        e.target.classList.toggle("cambiar-color");
    });
});