
import { ocultarCargando } from "./toggleLoading.js";
import obtenerElemento from "./getElement.js";

const displayBebida = (dato) => {
    ocultarCargando();

    const bebida = dato.drinks[0];
    const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = bebida;
    const lista = [
        bebida.strIngredient1,
        bebida.strIngredient2,
        bebida.strIngredient3,
        bebida.strIngredient4,
        bebida.strIngredient5,
    ];

    const img = obtenerElemento(".bebida-img");
    const bebidaNombre = obtenerElemento(".bebida-nombre");
    const descripcion = obtenerElemento(".bebida-desc");
    const ingredientes = obtenerElemento(".bebida-ingredientes");
    img.src = image;
    document.title = name;
    bebidaNombre.textContent = name;
    descripcion.textContent = desc;
    ingredientes.innerHTML = lista.map((elemento) => {
        if (!elemento) return;
        return `<li><i class="far fa-check-square"></i>${elemento}</li>`;
    }).join("");
};

export default displayBebida;
