
import obtenerElemento from "./getElement.js";
import mostrarBebidas from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const formulario = obtenerElemento(".busqueda-formulario");
const entrada = obtenerElemento("[name='drink']");

formulario.addEventListener("keyup", function (e) {
    e.preventDefault();
    const valor = entrada.value;
    if (!valor) return;
    mostrarBebidas(`${baseURL}${valor}`);
});
