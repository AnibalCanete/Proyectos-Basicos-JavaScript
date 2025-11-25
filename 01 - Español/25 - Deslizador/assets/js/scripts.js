
import personas from "./data.js";

// Variables Constantes - Constant Variable
const contenedor = document.querySelector(".deslizador-contenedor");
const botonSiguiente = document.querySelector(".boton-siguiente");
const botonAnterior = document.querySelector(".boton-anterior");

if (personas.length === 1) {
    botonSiguiente.style.display = "none";
    botonAnterior.style.display = "none";
}

let persona = [...personas];
if (personas.length === 2) {
    persona = [...personas, ...personas];
}

contenedor.innerHTML = persona.map((personaje, deslizadorIndice) => {
    const { img, name, job, text } = personaje;
    let posicion = "siguiente";

    if (deslizadorIndice === 0) {
        posicion = "activo";
    }

    if (deslizadorIndice === persona.length - 1) {
        posicion = "ultimo";
    }

    if (personas.length <= 1) {
        posicion = "activo";
    }

    return `
        <article class="deslizador ${posicion}">
            <img src="${img}" class="img" alt="${name}">
            <h4>${name}</h4>
            <p class="titulo">${job}</p>
            <p class="texto">${text}</p>
            <div class="cita-icono">
                <i class="fas fa-quote-right"></i>
            </div>
        </article>
    `;
}).join("");

const iniciarDeslizador = (tipo) => {
    const activo = document.querySelector(".activo");
    const ultimo = document.querySelector(".ultimo");
    let siguiente = activo.nextElementSibling;
    if (!siguiente) {
        siguiente = contenedor.firstElementChild;
    }

    activo.classList.remove("activo");
    ultimo.classList.remove("ultimo");
    siguiente.classList.remove("siguiente");

    if (tipo === "anterior") {
        activo.classList.add("siguiente");
        ultimo.classList.add("activo");
        siguiente = ultimo.previousElementSibling;
        if (!siguiente) {
            siguiente = contenedor.lastElementChild;
        }
        siguiente.classList.remove("siguiente");
        siguiente.classList.add("ultimo");
        return;
    }
    activo.classList.add("ultimo");
    ultimo.classList.add("siguiente");
    siguiente.classList.add("activo");
};

botonSiguiente.addEventListener("click", () => {
    iniciarDeslizador();
});

botonAnterior.addEventListener("click", () => {
    iniciarDeslizador("anterior");
});
