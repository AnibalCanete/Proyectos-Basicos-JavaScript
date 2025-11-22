
/**
 * Seleccionar modal-btn, modal-overlay. close-btn
 * Escuchamos los eventos de click en modal-btn y close-btn
 * Cuando El Usuario Hace Click en modal-btn Agrega .open-modal a modal-overlay
 * Cuando El Usuario Hace Click en close-btn Elimina .open-modal de modal-overlay
*/

// Variables Constantes - Constant Variables
const botonModal = document.querySelector(".boton-modal");
const modal = document.querySelector(".modal-superposicion");
const botonCerrar = document.querySelector(".boton-cerrar");

botonModal.addEventListener("click", function () {
    modal.classList.add("abrir-modal");
});

botonCerrar.addEventListener("click", function () {
    modal.classList.remove("abrir-modal");
});
