
import subEnlaces from "./data.js";

const botonInterruptor = document.querySelector(".boton-interruptor");
const botonCerrar = document.querySelector(".boton-cerrar");
const barraLateralEnvoltura = document.querySelector(".barra-lateral-envoltura");
const barraLateral = document.querySelector(".barra-lateral-enlaces");
const botonesEnlaces = [...document.querySelectorAll(".enlace.boton")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const navegacion = document.querySelector(".barra-de-navegacion");

// Mostrar/Ocultar Barra Lateral - Hide/Show sidebar
botonInterruptor.addEventListener("click", () => {
    barraLateralEnvoltura.classList.add("mostrar");
});

botonCerrar.addEventListener("click", () => {
    barraLateralEnvoltura.classList.remove("mostrar");
});

// Configuracion de Barra Lateral - Set sidebar
barraLateral.innerHTML = subEnlaces.map((elemento) => {
    const { links, page } = elemento;
    return `
        <article>
            <h4>${page}</h4>
            <div class="barra-lateral-subenlaces">
                ${links.map((enlace) => {
                    return `<a href="${enlace.url}"><i class="${enlace.icon}"></i>${enlace.label}</a>`;
                }).join("")}
            </div>
        </article>
    `;
}).join("");

botonesEnlaces.forEach((boton) => {
    boton.addEventListener("mouseover", function (e) {
        const texto = e.currentTarget.textContent;
        const botonTemporal = e.currentTarget.getBoundingClientRect();
        const centro = (botonTemporal.left + botonTemporal.right) / 2;
        const abajo = botonTemporal.bottom - 3;

        const paginaTemporal = subEnlaces.find((enlace) => enlace.page === texto);
        if (paginaTemporal) {
            const { page, links } = paginaTemporal;
            submenu.classList.add("mostrar");
            submenu.style.left = `${centro}px`;
            submenu.style.top = `${abajo}px`;
            // Opcional - Optional
            let columnas = "col-2";
            if (links.length === 3) {
                columnas = "col-3";
            }
            if (links.length > 3) {
                columnas = "col-4";
            }

            submenu.innerHTML = `
                <section>
                    <h4>${page}</h4>
                    <div class="submenu-central ${columnas}">
                        ${links.map((enlace) => {
                            return `<ahref="${enlace.url}"><i class="${enlace.icon}"></i>${enlace.label}</a>`;
                        }).join("")}
                    </div>
                </section>
            `;
        }
    });
});

hero.addEventListener("mouseover", function (e) {
    submenu.classList.remove("mostrar");
});


navegacion.addEventListener("mouseover", function (e) {
    if (!e.target.classList.contains("enlace-boton")) {
        submenu.classList.remove("mostrar");
    }
});
