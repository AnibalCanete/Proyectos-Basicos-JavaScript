
import { obtenerElemento } from "../../utils.js";
import display from "../../displayProducts.js";

const configurarBusqueda = (tienda) => {
    const formulario = obtenerElemento(".entrada-formulario");
    const nombreEntrada = obtenerElemento(".busqueda-entrada");

    formulario.addEventListener("keyup", function () {
        const valor = nombreEntrada.value;
        if (valor) {
            const nuevaTienda = tienda.filter((producto) => {
                let { name } = producto;
                name = name.toLowerCase();
                if (name.startsWith(valor)) {
                    return producto;
                }
            });

            display(nuevaTienda, obtenerElemento(".productos-contenedor"), true);
            if (nuevaTienda.length < 1) {
                const productos = obtenerElemento(".productos-contenedor");
                productos.innerHTML = `<h3 class="filter-error">Lo Sentimos, No Hay Productos Que Coincidan Con Tu Búsqueda</h3>`;
            }
        } else {
            display(tienda, obtenerElemento(".productos-contenedor"), true);
        }
    });
};

export default configurarBusqueda;
