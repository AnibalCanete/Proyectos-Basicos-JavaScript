
import { obtenerElemento } from "../../utils.js";
import display from "../../displayProducts.js";

const configurarPrecio = (tienda) => {
    const precioEntrada = obtenerElemento(".precio-filtro");
    const precioValor = obtenerElemento(".precio-valor");

    // Filtro de Configuración - Setup Filter
    let precioMaximo = tienda.map((producto) => producto.price);
    precioMaximo = Math.max(...precioMaximo);
    precioMaximo = Math.ceil(precioMaximo / 100);
    precioEntrada.value = precioMaximo;
    precioEntrada.max = precioMaximo;
    precioEntrada.min = 0;
    precioValor.textContent = `Valor : $${precioMaximo}`;

    precioEntrada.addEventListener("input", function () {
        const valor = parseInt(precioEntrada.value);
        precioValor.textContent = `Valor : $${valor}`;
        let nuevaTienda = tienda.filter((producto) => producto.price / 100 <= valor);
        display(nuevaTienda, obtenerElemento(".productos-contenedor"), true);
        if (nuevaTienda.lenght < 1) {
            const productos = obtenerElemento(".productos-contenedor");
            productos.innerHTML = `<h3 class="filtro-error">Lo Sentimos, No Hay Productos Que Coincidan Con Tu Búsqueda</h3>`;
        } 
    });
};

export default configurarPrecio;
