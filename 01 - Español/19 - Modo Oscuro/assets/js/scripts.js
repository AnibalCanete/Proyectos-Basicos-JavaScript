
// Variables Constantes - Constant Variable
const botonInterruptor = document.querySelector(".boton");
const articulosContenedor = document.querySelector(".articulos");

botonInterruptor.addEventListener("click", () => {
    document.documentElement.classList.toggle("tema-oscuro");
});

const datosArticulos = articulos.map((articulo) => {
    const { title, date, length, snippet } = articulo;
    const fechaFormato = moment(date).format("MMM Do, YYYY");
    return `
        <article class="post">
            <h2>${title}</h2>
            <div class="post-info"> 
                <span>${fechaFormato}</span>
                <span>${length}</span>
            </div>
            <p>${snippet}</p>
        </article>
    `;
}).join("");

articulosContenedor.innerHTML = datosArticulos;
