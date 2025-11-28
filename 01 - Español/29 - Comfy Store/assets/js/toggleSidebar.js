
import { obtenerElemento } from "./utils.js";

const navegacionInterruptor = obtenerElemento(".navegacion-interruptor");
const barraLateralSuperposicion = obtenerElemento(".barra-lateral-superposicion");
const botonCerrar = obtenerElemento(".barra-lateral-cerrar");

navegacionInterruptor.addEventListener("click", () => {
    barraLateralSuperposicion.classList.add("mostrar");
});

botonCerrar.addEventListener("click", () => {
    barraLateralSuperposicion.classList.remove("mostrar");
});
