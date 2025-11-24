
// Variables Constantes - Constant Variable
const elementos = [...document.querySelectorAll(".numero")];

const actualizarContador = (el) => {
    const valor = parseInt(el.dataset.value);
    const incrementar = Math.ceil(valor / 1000);

    let valorInicial = 0;

    const incrementarContador = setInterval(() => {
        valorInicial += incrementar;

        if (valorInicial > valor) {
            el.textContent = `${valor}+`;
            clearInterval(incrementarContador);
            return;
        }
        el.textContent  = `${valorInicial}`;
    }, 1);
};

elementos.forEach((elemento) => {
    actualizarContador(elemento);
});
