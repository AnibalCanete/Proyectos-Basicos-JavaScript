
import { obtenerElemento } from "../../utils.js";

const carritoSuperposicion = obtenerElemento(".carrito-superposicion");
const cerrarCarritoBoton = obtenerElemento(".carrito-cerrar");
const interruptorCarritoBoton = obtenerElemento(".carrito-interruptor");

interruptorCarritoBoton.addEventListener("click", () => {
    carritoSuperposicion.classList.add("mostrar");
});

cerrarCarritoBoton.addEventListener("click", () => {
    carritoSuperposicion.classList.remove("mostrar");
});

export const abrirCarrito = () => {
    carritoSuperposicion.classList.add("mostrar");    
};
