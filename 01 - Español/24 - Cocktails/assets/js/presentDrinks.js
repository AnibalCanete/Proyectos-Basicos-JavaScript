
import fetchBebidas from "./fetchDrinks.js";
import displayBebidas from "./displayDrinks.js";
import configurarBebida from "./setDrink.js";

const mostrarBebidas = async (url) => {
    // fetch drinks
    const datos = await fetchBebidas(url);

    // display drinks
    const seccion = await displayBebidas(datos);
    if (seccion) {
        configurarBebida(seccion);
    }
};

export default mostrarBebidas;
