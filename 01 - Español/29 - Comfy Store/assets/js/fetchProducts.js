
import { todosLosProductosURL } from "./utils.js";

const fetchProductos = async () => {
    const respuesta = await fetch(todosLosProductosURL).catch((err) => console.log(err));
    if (respuesta) {
        return respuesta.json();
    }
    return respuesta;
};

export default fetchProductos;
