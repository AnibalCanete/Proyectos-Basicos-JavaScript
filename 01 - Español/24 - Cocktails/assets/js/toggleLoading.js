
import obtenerElemento from "./getElement.js";

const cargando = obtenerElemento(".cargando");

export const mostrarCargando = () => {
    cargando.classList.remove("ocultar-cargando");
};

export const ocultarCargando = () => {
    cargando.classList.add("ocultar-cargando");
};
