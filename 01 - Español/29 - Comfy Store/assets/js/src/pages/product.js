
// Importaciones Globales - Global Imports
import "../../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Importaciones Especificas - Specific Imports
import { anadirAlCarrito } from "../cart/setupCart.js";
import { unProductoURL, obtenerElemento, formatoPrecio } from "../../utils.js";

// Selecciones - Selections
const cargando = obtenerElemento(".pagina-cargando");
const centralDOM = obtenerElemento(".un-producto-central");
const paginaTituloDOM = obtenerElemento(".pagina-hero-titulo");
const imgDOM = obtenerElemento(".un-producto-img");
const tituloDOM = obtenerElemento(".un-producto-titulo");
const companiaDOM = obtenerElemento(".un-producto-compania");
const precioDOM = obtenerElemento(".un-producto-precio");
const coloresDOM = obtenerElemento(".un-producto-colores");
const descDOM = obtenerElemento(".un-producto-desc");
const carritoBoton = obtenerElemento(".anadir-al-carrito-boton");

// Producto del Carrito - Cart Product
let productoID;

// Mostrar Producto Al Cargar La Página - Show Product When Page Loads
window.addEventListener("DOMContentLoaded", async function () {
    const urlID = window.location.search;
    try {
        const respuesta = await fetch(`${unProductoURL}${urlID}`);
        if (respuesta.status >= 200 && respuesta.status <= 299) {
            const producto = await respuesta.json();
            // Captura de Data - Grab Data
            const { id, fields } = producto;
            productoID = id;

            const { name, company, price, colors, description } = fields;
            const image = fields.image[0].thumbnails.large.url;

            // Valores Establecidos - Set Values
            document.title = `${name.toUpperCase()} | Comfy`;
            paginaTituloDOM.textContent = `Inicio / ${name}`;
            imgDOM.src = image;
            tituloDOM.textContent = name;
            companiaDOM.textContent = `by ${company}`;
            precioDOM.textContent = formatoPrecio(price);
            descDOM.textContent = description;
            colors.forEach((color) => {
                const span = document.createElement("span");
                span.classList.add("producto-color");
                span.style.backgroundColor = `${color}`;
                coloresDOM.appendChild(span);
            });
        } else {
            console.log(respuesta.status, respuesta.statusText);
            centralDOM.innerHTML = `
                <div>
                    <h3 class="error">Lo Sentimos, Algo Salió Mal</h3>
                    <a href="../../index.html" class="boton">Volver Al Inicio</a>
                </div>
            `;
        }
    } catch (error) {
        console.log(error);
    }

    cargando.style.display = "none";

});

carritoBoton.addEventListener("click", function () {
    anadirAlCarrito(productoID);
});
