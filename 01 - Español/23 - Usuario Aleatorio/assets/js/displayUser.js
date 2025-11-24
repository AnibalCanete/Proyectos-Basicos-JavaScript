
import obtenerElemento from "./getElement.js";
import eliminarActivo from "./removeActive.js";

const img = obtenerElemento(".usuario-img");
const titulo = obtenerElemento(".usuario-titulo");
const valor = obtenerElemento(".usuario-valor");
const botones = [...document.querySelectorAll(".icono")];
const displayUsuario = (persona) => {
    img.src = persona.image;
    valor.textContent = persona.name;
    titulo.textContent = `Mi Nombre es`;
    eliminarActivo(botones);
    botones[0].classList.remove("activo");
    botones.forEach((boton) => {
        const label = boton.dataset.label;
        boton.addEventListener("click", () => {
            titulo.textContent = `Mi ${label} es`;
            valor.textContent = persona[label];
            eliminarActivo(botones);
            boton.classList.add("activo");
        });
    });
};

export default displayUsuario;
