
// Variables Constantes - Constant Variables
const botonInterruptor = document.querySelector(".barra-lateral-interruptor");
const botonCerrar = document.querySelector(".boton-cerrar");
const barraLateral = document.querySelector(".barra-lateral");

botonInterruptor.addEventListener("click", function () {
    barraLateral.classList.toggle("mostrar-barra-lateral");
});

botonCerrar.addEventListener("click", function () {
    barraLateral.classList.remove("mostrar-barra-lateral");
});
