
// Variable Constante - Constant Variable
const preguntas = document.querySelectorAll(".preguntas");

preguntas.forEach(function (pregunta) {
    const boton = pregunta.querySelector(".boton-pregunta");

    boton.addEventListener("click", function () {
        preguntas.forEach(function (articulo) {
            if (articulo !== pregunta) {
                articulo.classList.remove("mostrar-texto");
            }
        });
        pregunta.classList.toggle("mostrar-texto");
    });
});
