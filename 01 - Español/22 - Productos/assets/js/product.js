
const productoDOM = document.querySelector(".producto");
const url = "https://www.course-api.com/javascript-store-single-product";

const fetchProducto = async () => {
    try {
        productoDOM.innerHTML = "<h4 class='producto-cargando'>Cargando...</h4>";
        const parametros = new URLSearchParams(window.location.search);
        const id = parametros.get("id");
        const respuesta = await fetch(`${url}?id=${id}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        productoDOM = "<p class='error'>Hubo un Problema al Cargar el Producto. Inténtelo de Nuevo Más Tarde.</p>";
    }
};

const productoDisplay = (producto) => {
    const {
        company,
        colors,
        description,
        name: title,
        price,
        image,
    } = producto.fields;
    const { url: img } = image[0];
    document.title = title.toUpperCase();

    // Colores - Colors 
    const coloresLista = colors.map((color) => {
        return `<span class="producto-color" style="background: ${color}"></span>`;
    }).join("");

    productoDOM.innerHTML = `
        <div class="producto-envoltura">
            <img src="${img}" class="img" alt="${title}">
            <div class="producto-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>${price / 1000}</span>
                <div class="colors">${coloresLista}</div>
                <p>${description}</p>
                <button class="boton">Añadir al Carrito</button>
            </div>
        </div>
    `;
};

const iniciar = async () => {
    const datos = await fetchProducto();
    productoDisplay(datos);
};

iniciar();
