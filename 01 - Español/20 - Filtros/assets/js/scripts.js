
let productosfiltrados = [...productos];

const productosContenedor = document.querySelector(".productos-contenedor");

const productosDisplay = () => {
    if (productosfiltrados.length < 1) {
        productosContenedor.innerHTML = `<h6>Lo Sentimos, No Hay Productos Que Coincidan Con Tu Búsqueda</h6>`;
        return;
    }

    productosContenedor.innerHTML = productosfiltrados.map((producto) => {
        const { id, title, image, price } = producto;
        return `
            <article class="producto" data-id="${id}">
                <img src="${image}" class="producto-img img" alt="">
                <footer>
                    <h5 class="producto-nombre">${title}</h5>
                    <span class="producto-precio">${price}</span>
                </footer>
            </article>
        `;
    }).join("");
};

productosDisplay();

// Filtro de Texto - Text Filter 
const formulario = document.querySelector(".entrada-formulario");
const entradaBusqueda = document.querySelector(".busqueda-entrada");

formulario.addEventListener("keyup", () => {
    const entradaValor = entradaBusqueda.value;
    productosfiltrados = productos.filter((producto) => {
        return producto.title.toLowerCase().includes(entradaValor);
    });
    productosDisplay();
});

// Botones de Filtro - Filter Buttons
const companiasDOM = document.querySelector(".companias");

const botonesDisplay = () => {
    const botones = [
        "all",
        ...new Set(productos.map((producto) => producto.company)),
    ];

    companiasDOM.innerHTML = botones.map((companias) => {
        return `<button class="boton-companias" data-id="${companias}">${companias}</button>`;
    }).join("");
};

botonesDisplay();

companiasDOM.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("boton-companias")) {
        if (el.dataset.id === "all") {
            productosfiltrados = [...productos];
        } else {
            productosfiltrados = productos.filter((producto) => {
                return producto.company === el.dataset.id;
            });
        }
        entradaBusqueda.value = "";
        productosDisplay();
    }
});
