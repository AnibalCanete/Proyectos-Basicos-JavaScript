
// Variables Constantes - Constant Variable
const deslizadores = document.querySelectorAll(".deslizador");
const botonSiguiente = document.querySelector(".boton-siguiente");
const botonAnterior = document.querySelector(".boton-anterior");

deslizadores.forEach(function (deslizador, indice) {
    deslizador.style.left = `${indice * 100}%`;
});

let contador = 0;

botonSiguiente.addEventListener("click", function () {
    contador++;
    carrusel();
});

botonAnterior.addEventListener("click", function () {
    contador--;
    carrusel();
});

function carrusel() {
    if (contador < deslizadores.length - 1) {
        botonSiguiente.style.display = "block";
    } else {
        botonSiguiente.style.display = "none";
    }

    if (contador > 0) {
        botonAnterior.style.display = "block";
    } else {
        botonAnterior.style.display = "none";
    }

    deslizadores.forEach(function (deslizador) {
        deslizador.style.transform = `translateX(-${contador * 100}%)`;
    });
}

botonAnterior.style.display = "none";
