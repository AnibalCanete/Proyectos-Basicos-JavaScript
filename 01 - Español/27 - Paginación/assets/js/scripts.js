
import fetchSeguidores from "./fetchFollowers.js";
import displaySeguidores from "./displayFollowers.js";
import paginar from "./paginate.js";
import displayBotones from "./displayButtons.js";

const titulo = document.querySelector(".seccion-titulo h1");
const botonContenedor = document.querySelector(".boton-contenedor");

let index = 0;
let paginas = [];

const configuracionUI = () => {
    displaySeguidores(paginas[index]);
    displayBotones(botonContenedor, paginas, index);
};

const iniciar = async () => {
    const seguidores = await fetchSeguidores();
    titulo.textContent = "Paginación";
    paginas = paginar(seguidores);
    configuracionUI();
};

botonContenedor.addEventListener("click", function (e) {
    if (e.target.classList.contains("boton-contenedor")) return;
    if (e.target.classList.contains("boton-pagina")) {
        index = parseInt(e.target.dataset.index);
    }

    if (e.target.classList.contains("boton-siguiente")) {
        index++;
        if (index > paginas.length - 1) {
            index = 0;
        }
    }

    if (e.target.classList.contains("boton-anterior")) {
        index--;
        if (index < 0) {
            index = paginas.length - 1;
        }
    }
    configuracionUI();
});

window.addEventListener("load", iniciar);
