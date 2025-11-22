
// Variables Constantes - Constants Variables
const boton = document.querySelector(".boton-cambiar");
const video = document.querySelector(".video-contenedor");

boton.addEventListener("click", function() {
    if (!boton.classList.contains("deslizar")) {
        boton.classList.add("deslizar");
        video.pause();
    } else {
        boton.classList.remove("deslizar");
        video.play();
    }
});

// Precargador - Preloader
const precargador = document.querySelector(".precargador");
window.addEventListener("load", function () {
    precargador.classList.add("ocultar-precargador");
});
