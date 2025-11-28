
import { formatoPrecio } from "./utils.js";
import { anadirAlCarrito } from "./src/cart/setupCart.js";

const display = (products, element, filters) => {
    element.innerHTML = products.map((product) => {
        const { id, name, image, price } = product;
        const pathPrefix = window.location.pathname.includes("/assets/pages/") ? "" : "assets/pages/";
        return `
            <article class="producto">
                <div class="producto-contenedor">
                    <img src="${image}" class="producto-img img" alt="${name}">
                    <div class="producto-iconos"> 
                        <a href="${pathPrefix}product.html?id=${id}" class="producto-icono">
                            <i class="fas fa-search"></i>
                        </a>
                        <button class="producto-carrito-boton producto-icono" data-id="${id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <footer>
                    <p class="producto-nombre">${name}</p>
                    <h4 class="producto-precio">${formatoPrecio(price)}</h4>
                </footer>
            </article>
        `;
    }).join("");

    if (filters) return;

    element.addEventListener("click", function (e) {
        const padre = e.target.parentElement;
        if (padre.classList.contains("producto-carrito-boton")) {
            anadirAlCarrito(padre.dataset.id);
        }
    });
};

export default display;
