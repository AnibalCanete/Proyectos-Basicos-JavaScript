
const displayBotones = (container, pages, activeIndex) => {
    let botones = pages.map((_, pageIndex) => {
        return `
            <button class="boton-pagina ${activeIndex === pageIndex ? "boton-activo" : "null"}" data-index="${pageIndex}">
                ${pageIndex + 1}
            </button>
        `;
    });
    botones.push(`<button class="boton-siguiente">Siguiente</button>`);
    botones.unshift(`<button class="boton-anterior">Anterior</button>`);
    container.innerHTML = botones.join("");
};

export default displayBotones;
