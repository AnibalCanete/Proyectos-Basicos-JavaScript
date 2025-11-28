
// Importaciones Globales - Global Imports 
import "../../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Importaciones de Filtros - Filter Imports
import configurarBusqueda from "../filters/search.js";
import configurarCompanias from "../filters/companies.js";
import configurarPrecio from "../filters/price.js";

// Importaciones Especificas - Specific Imports
import { tienda, configurarTienda } from "../../store.js";
import display from "../../displayProducts.js";
import { obtenerElemento } from "../../utils.js";

// Importar Productos - Import Fetch Products
import fetchProductos from "../../fetchProducts.js";

const iniciar = async () => {
    const cargando = obtenerElemento(".pagina-cargando");
    if (tienda.length < 1) {
        const productos = await fetchProductos();
        configurarTienda(productos);
    }
    display(tienda, obtenerElemento(".productos-contenedor"));

    configurarBusqueda(tienda);
    configurarCompanias(tienda);
    configurarPrecio(tienda);
    cargando.style.display = "none";
}

iniciar();
