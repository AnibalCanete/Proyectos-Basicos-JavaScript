
const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formularioDOM = document.querySelector(".formulario");
const entradaDOM = document.querySelector(".formulario-entrada");
const resultadosDOM = document.querySelector(".resultados");

formularioDOM.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = entradaDOM.value;
    if (!valor) {
        resultadosDOM.innerHTML = "<div class='error'>Por Favor, Introduzca Un Término de Búsqueda Válido</div>";
        return;
    }
    fetchPaginas(valor);
});

const fetchPaginas = async (valorBusqueda) => {
    resultadosDOM.innerHTML = "<div class='cargando'></div>";
    try {
        const respuesta = await fetch(`${url}${valorBusqueda}`);
        const datos = await respuesta.json();
        const resultados = datos.query.search;
        if (resultados.length < 1) {
            resultadosDOM.innerHTML = "<div>No Hay Resultados. Inténtalo de Nuevo</div>";
            return;
        }
        renderizarResultados(resultados);
    } catch (error) {
        resultadosDOM.innerHTML = "<div class='error'>Hubo Un Error...</diV";
    }
};

const renderizarResultados = (lista) => {
    const tarjetasLista = lista.map((elemento) => {
        const { title, snippet, pageid } = elemento;
        return `
            <a href="http://en.wikipedia.org/?curid=${pageid}" target="_blank"> 
                <h4>${title}</h4>
                <p>${snippet}</p>
            </a>
        `;
    }).join("");
    resultadosDOM.innerHTML = `<div class="articulos">${tarjetasLista}</div>`;
};
