
const obtenerElemento = (seleccion) => {
    const elemento = document.querySelector(seleccion);
    if (elemento) return elemento;
    throw new Error("Ningún Elemento Seleccionado");
};

export default obtenerElemento;
