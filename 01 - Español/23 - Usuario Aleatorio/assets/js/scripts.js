
import obtenerElemento from "./getElement.js";
import obtenerUsuario from "./fetchUser.js";
import displayUsuario from "./displayUser.js";

const boton = obtenerElemento(".boton");

const mostrarUsuario = async () => {
    // Obtener Usuario de la API - Get User From API
    const persona = await obtenerUsuario();
    displayUsuario(persona);
};

window.addEventListener("DOMContentLoaded", mostrarUsuario);
boton.addEventListener("click", mostrarUsuario);
