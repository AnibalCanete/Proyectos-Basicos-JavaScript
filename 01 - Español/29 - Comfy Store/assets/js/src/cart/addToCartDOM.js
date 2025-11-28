
import { formatoPrecio, obtenerElemento } from "../../utils.js";

const carritoArticulosDOM = obtenerElemento(".carrito-articulos");
const anadirAlCarritoDOM = ({ id, name, price, image, amount }) => {
    const articulo = document.createElement("article");
    articulo.classList.add(".carrito-articulo");
    articulo.setAttribute("data-id", id);
    articulo.innerHTML = `
        <img src="${image}" class="carrito-articulo-img" alt="${name}">
        <div>
            <h4 class="carrito-articulo-nombre">${name}</h4>
            <p class="carrito-articulo-precio">${formatoPrecio(price)}</p>
            <button class="carrito-articulo-eliminar-boton" data-id="${id}">Eliminar</button>
        </div>
        <div>
            <button class="carrito-articulo-incrementar-boton" data-id="${id}">
                <i class="fas fa-chevron-up"></i>
            </button>
            <p class="carrito-articulo-cantidad" data-id="${id}">${amount}</p>
            <button class="carrito-articulo-disminuir-boton" data-id="${id}">
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    `;
    carritoArticulosDOM.appendChild(articulo);
};

export default anadirAlCarritoDOM;
