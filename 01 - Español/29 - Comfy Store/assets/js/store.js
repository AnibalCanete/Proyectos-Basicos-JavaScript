
import { obtenerAlmacenamientoArticulo, configuracionAlmacenamientoArticulo } from "./utils.js";

let tienda = obtenerAlmacenamientoArticulo("tienda");

const configurarTienda = (products) => {
    tienda = products.map((product) => {
        const {
            id, 
            fields: { featured, name, price, company, colors, image: img }, 
        } = product;
        const image = img[0].thumbnails.large.url;
        return { id, featured, name, price, company, colors, image };
    }); 
    configuracionAlmacenamientoArticulo("tienda", tienda);
};

const encontrarProducto = (id) => {
    let producto = tienda.find((product) => product.id === id);
    return producto;
};

export { tienda, configurarTienda, encontrarProducto };
