
// Importaciones Globales - Global Imports 
import "./toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";

// Importaciones Especificas - Specific Imports
import fetchProductos from "./fetchProducts.js";
import { configurarTienda, tienda } from "./store.js";
import display from "./displayProducts.js";
import { obtenerElemento } from "./utils.js";

const iniciar =  async () => {
    const productos = await fetchProductos();
    if (productos) {
        // Añadir Productos a la Tienda - Add Products To The Store
        configurarTienda(productos);
        const destacados = tienda.filter((product) => product.featured === true);
        display(destacados, obtenerElemento(".destacados-central"));
    }
}

window.addEventListener("DOMContentLoaded", iniciar);
