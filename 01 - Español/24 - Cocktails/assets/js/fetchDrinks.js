
import { mostrarCargando } from "./toggleLoading.js";

const fetchBebidas = async (url) => {
    mostrarCargando();
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
};

export default fetchBebidas;
