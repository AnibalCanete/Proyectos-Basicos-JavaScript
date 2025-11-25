
import obtenerElemento from "./getElement.js";
import { ocultarCargando } from "./toggleLoading.js";

const displayBebidas = ({ drinks }) => {
    const seccion = obtenerElemento(".seccion-central");
    const titulo = obtenerElemento(".titulo");
    if (!drinks) {
        // Ocultar Carga - Hide Loading
        ocultarCargando();
        titulo.textContent = "Lo Sentimos, No Hay Bebidas Que Coincidan Con Tu Búsqueda";
        seccion.innerHTML = null;
        return;
    }

    const nuevasBebidas = drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `
            <a href="./assets/pages/drink.html">
                <article class="cocktail" data-id="${id}">
                    <img src="${image}" alt="${name}">
                    <h3>${name}</h3>
                </article>
            </a>
        `;
    }).join("");
    ocultarCargando();
    titulo.textContent = "";
    seccion.innerHTML = nuevasBebidas;
    return seccion;
};

export default displayBebidas;
