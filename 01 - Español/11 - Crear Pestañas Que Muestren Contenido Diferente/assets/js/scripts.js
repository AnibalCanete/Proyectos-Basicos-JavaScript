
// Variables Constantes - Constants Variables
const acercaDe = document.querySelector(".acerca-de");
const botonTab = document.querySelectorAll(".boton-tab");
const articulos = document.querySelectorAll(".contenido");

acercaDe.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // Eliminar lo Seleccionado de Otros Botones - Remove Selected From Other Buttons
        botonTab.forEach(function (boton) {
            boton.classList.remove("activo");
        });
        e.target.classList.add("activo");

        // Ocultar Otros Articulos - Hide Other Articles
        articulos.forEach(function (articulo) {
            articulo.classList.remove("activo");
        });
        const elemento = document.getElementById(id);
        elemento.classList.add("activo");
    }
});
