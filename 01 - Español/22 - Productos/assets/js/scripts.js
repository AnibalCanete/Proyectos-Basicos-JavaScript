
const url = "https://www.course-api.com/javascript-store-products";

const productosDOM = document.querySelector(".productos-centro");

const fetchProductos = async () => {
    productosDOM.innerHTML = "<div class='cargando'></div>";
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        productosDOM.innerHTML = "<p class='error'>Hubo Un Error</p>";
    }
};

const productosDisplay = (lista) => {
    const productoLista = lista.map((producto) => {
        const { id } = producto;
        const { name: title, price } = producto.fields;
        const { url: img } = producto.fields.image[0];
        const formatoPrecio = price / 100;
        return `
            <a class="individual-producto" href="./assets/pages/product.html?id=${id}&name=john&age=25">
                <img src="${img}" class="individual-producto-img img" alt="${title}">
                <footer>
                    <h5 class="nombre">${title}</h5>
                    <span class="precio">$${formatoPrecio}</span>
                </footer>
            </a>
        `; 
    }).join("");
    productosDOM.innerHTML = `<div class="productos-contenedor">${productoLista}</div>`;
};

const iniciar = async () => {
    const datos = await fetchProductos();
    productosDisplay(datos);
}

iniciar();