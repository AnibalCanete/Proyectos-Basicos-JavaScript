
import { obtenerElemento } from "../../utils.js";
import display from "../../displayProducts.js";

const configurarCompanias = (tienda) => {
    let companias = ["all", ...new Set(tienda.map((producto) => producto.company))];
    const companiasDOM = obtenerElemento(".companias");
    companiasDOM.innerHTML = companias.map((company) => {
        return `<button class="compania-boton">${company}</button>`
    }).join("");

    companiasDOM.addEventListener("click", function (e) {
        const elemento = e.target;
        if (elemento.classList.contains("compania-boton")) {
            let nuevaTienda = [];
            if (elemento.textContent === "all") {
                nuevaTienda = [...tienda];
            } else {
                nuevaTienda = tienda.filter((producto) => producto.company === e.target.textContent);
            }
            display(nuevaTienda, obtenerElemento(".productos-contenedor"), true);
        }
    });
};

export default configurarCompanias;
