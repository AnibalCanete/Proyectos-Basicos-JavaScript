
import fetchBebidas from "./fetchDrinks.js";
import displayBebida from "./displaySingleDrink.js";

const bebidaPresente = async () => {
    const id = localStorage.getItem("drink");
    if (!id) {
        window.location.replace("../../index.html");
    } else {
        const bebida = await fetchBebidas(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayBebida(bebida);
    }
};

window.addEventListener("DOMContentLoaded", bebidaPresente);
