
// Importacions - Import 
import { obtenerAlmacenamientoArticulo, configuracionAlmacenamientoArticulo, formatoPrecio, obtenerElemento } from "../../utils.js";
import { abrirCarrito } from "./toggleCart.js";
import { encontrarProducto } from "../../store.js";
import anadirAlCarritoDOM from "./addToCartDOM.js";

// Elementos del Conjunto - Set Items
const carritoArticuloContadorDOM = obtenerElemento(".carrito-elemento-contador");
const carritoArticulosDOM = obtenerElemento(".carrito-articulos");
const carritoTotalDOM = obtenerElemento(".carrito-total");

let carrito = obtenerAlmacenamientoArticulo("carrito");

export const anadirAlCarrito = (id) => {

    let articulo = carrito.find((carritoArticulo) => carritoArticulo.id === id);

    if (!articulo) {
        let producto = encontrarProducto(id);
        // Agregar Articulo a - Add Item to the the
        producto = { ...producto, amount: 1 };
        carrito = [...carrito, producto];
        // Agregar ELemento al DOM - Add Item to the DOM
        anadirAlCarritoDOM(producto);
    } else {
        // Actualizar Valores - Update Values
        const cantidad = incrementarCantidad(id);
        const articulos = [...carritoArticulosDOM.querySelectorAll(".carrito-articulo-cantidad")];
        const nuevaCantidad = articulos.find((valor) => valor.dataset.id === id);
        nuevaCantidad.textContent = cantidad;
    }
    // Añadir Uno al Recuento de Articulos - Add One To The Item Count
    displayCarritoArticuloCantidad();

    // Mostrar Total del Carrito - Display Cart Totals
    displayCarritoTotal();

    // Colocar El Carrito En El Almacenamiento Local - Set Cart In Local Storage 
    configuracionAlmacenamientoArticulo("carrito", carrito);

    abrirCarrito();
};

function displayCarritoArticuloCantidad() {
    const cantidad = carrito.reduce((total, carritoArticulo) => {
        return (total += carritoArticulo.amount);
    }, 0);
    carritoArticuloContadorDOM.textContent = cantidad;
}

function displayCarritoTotal() {
    let total = carrito.reduce((total, carritoArticulo) => {
        return (total += carritoArticulo.price * carritoArticulo.amount);
    }, 0);
    carritoTotalDOM.textContent = `Total : ${formatoPrecio(total)}`;
}

function displayCarritoArticulosDOM() {
    carrito.forEach((carritoArticulo) => {
        anadirAlCarritoDOM(carritoArticulo);
    });
}

function eliminarArticulo(id) {
    carrito = carrito.filter((carritoArticulo) => carritoArticulo.id !== id);
}

function incrementarCantidad(id) {
    let nuevaCantidad;
    carrito = carrito.map((carritoArticulo) => {
        if (carritoArticulo.id === id) {
            nuevaCantidad = carritoArticulo.amount + 1;
            carritoArticulo = { ...carritoArticulo, amount: nuevaCantidad };
        }
        return carritoArticulo;
    });
    return nuevaCantidad;
}

function disminuirCantidad(id) {
    let nuevaCantidad;
    carrito = carrito.map((carritoArticulo) => {
        if (carritoArticulo.id === id) {
            nuevaCantidad = carritoArticulo.amount - 1;
            carritoArticulo = { ...carritoArticulo, amount: nuevaCantidad };
        }
        return carritoArticulo;
    });
    return nuevaCantidad;
}

function configurarCarritoFuncionalidad() {
    carritoArticulosDOM.addEventListener("click", function (e) {
        const elemento = e.target;
        const padre = e.target.parentElement;
        const id = e.target.dataset.id;
        const padreID = e.target.parentElement.dataset.id;

        // Eliminar - Remove
        if (elemento.classList.contains("carrito-articulo-eliminar-boton")) {
            eliminarArticulo(id);
            elemento.parentElement.parentElement.remove();
        }

        // Aumentar - Increase 
        if (padre.classList.contains("carrito-articulo-incrementar-boton")) {
            const nuevaCantidad = incrementarCantidad(padreID);
            padre.nextElementSibling.textContent = nuevaCantidad;
        }

        // Disminuir - Decrease 
        if (padre.classList.contains("carrito-articulo-disminuir-boton")) {
            const nuevaCantidad = disminuirCantidad(padreID);
            if (nuevaCantidad === 0) {
                eliminarArticulo(padreID);
                padre.parentElement.parentElement.remove();
            } else {
                padre.previousElementSibling.textContent = nuevaCantidad;
            }
        }

        displayCarritoArticuloCantidad();
        displayCarritoTotal();
        configuracionAlmacenamientoArticulo("carrito", carrito);
    });
}

const iniciar = () => {
    // Mostrar Cantidad de Articulos del Carrito - Display Amount of Cart Items
    displayCarritoArticuloCantidad();
    // Mostrar Total - Display Total
    displayCarritoTotal();
    // Agregar Todos Los Articulos del Carrito al DOM - Add All Cart Items To The DOM
    displayCarritoArticulosDOM();
    // Funcionalidad de Configuración del Carrito - Setup Cart Functionality
    configurarCarritoFuncionalidad();
};

iniciar();
