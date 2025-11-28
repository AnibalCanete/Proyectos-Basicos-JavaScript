
const todosLosProductosURL = "https://www.course-api.com/javascript-store-products";

const unProductoURL = "https://www.course-api.com/javascript-store-single-product";

const obtenerElemento = (seleccion) => {
    const elemento = document.querySelector(seleccion);
    if (elemento) return elemento;
    throw new Error(`Por Favor, Marque El Selector "${seleccion}", No Existe Dicho Elemento`);
};

const formatoPrecio = (precio) => {
    let formatearPrecio = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format((precio / 100).toFixed(2));
    return formatearPrecio;
};

const obtenerAlmacenamientoArticulo = (articulo) => {
    let almacenamientoArticulo = localStorage.getItem(articulo);
    if (almacenamientoArticulo) {
        almacenamientoArticulo = JSON.parse(localStorage.getItem(articulo));
    } else {
        almacenamientoArticulo = [];
    }
    return almacenamientoArticulo;
};

const configuracionAlmacenamientoArticulo = (nombre, articulo) => {
    localStorage.setItem(nombre, JSON.stringify(articulo));
};

export {
    todosLosProductosURL,
    unProductoURL,
    obtenerElemento,
    formatoPrecio,
    obtenerAlmacenamientoArticulo,
    configuracionAlmacenamientoArticulo,
};
