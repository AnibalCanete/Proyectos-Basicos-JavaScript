
// Element.getBoundingClientRect() El método devuelve el tamaño de un elemento y su posición relativa a la ventana grafica
// pageYOffset is a read - Unica propiedad de ventana que devuelve el número de pixeles que el documento ha sido desplazado verticalmente
// slice - Extrae una sección de una cadena sin modificar la cadena original
// offsetTop - Un número que representa la posición superior del elemento en pixeles

// Fijar Fecha - Set Date
const fecha = document.getElementById("fecha");
fecha.innerHTML = new Date().getFullYear();

// Cerrar Enlaces - Close Links
const navegacionInterruptor = document.querySelector(".navegacion-interruptor");
const enlacesContenedor = document.querySelector(".enlaces-contenedor");
const enlaces = document.querySelector(".enlaces");

navegacionInterruptor.addEventListener("click", function () {
    const enlacesAltura = enlaces.getBoundingClientRect().height;
    const contenedorAltura = enlacesContenedor.getBoundingClientRect().height;

    if (contenedorAltura === 0) {
        enlacesContenedor.style.height = `${enlacesAltura}px`;
    } else {
        enlacesContenedor.style.height = 0;
    }
});

// Navegación Fija - Fixed navbar
const barraDeNavegacion = document.getElementById("navegacion");
const enlaceArriba = document.querySelector(".enlace-arriba");

window.addEventListener("scroll", function () {
    const deslpazamientoAltura = window.pageYOffset;
    const navegacionAltura = barraDeNavegacion.getBoundingClientRect().height;

    if (deslpazamientoAltura > navegacionAltura) {
        barraDeNavegacion.classList.add("navegacion-fija");
    } else {
        barraDeNavegacion.classList.remove("navegacion-fija");
    }

    // Configurar el Enlace de Regreso al Inicio - Setup Back To Top Link
    if (deslpazamientoAltura > 500) {
        enlaceArriba.classList.add("mostrar-enlace");
    } else {
        enlaceArriba.classList.remove("mostrar-enlace");
    }
});

// Desplazamiento Suave - Smooth Scroll
// Seleccionar Enlaces
const desplazamientoEnlaces = document.querySelectorAll(".desplazamiento-enlace");
desplazamientoEnlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
        // Prevenir Inclumplimiento - prevent Default
        e.preventDefault();
        // Navegar A Un Lugar Especifico - Navigate To Specific Spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const elemento = document.getElementById(id);
        const navegacionAltura = barraDeNavegacion.getBoundingClientRect().height;
        const contenedorAltura = enlacesContenedor.getBoundingClientRect().height;
        const navegacionFija = barraDeNavegacion.classList.contains("navegacion-fija");
        let posicion = elemento.offsetTop - navegacionAltura;

        if (!navegacionFija) {
            posicion = posicion - navegacionAltura;
        }

        if (navegacionAltura > 82) {
            posicion = posicion + contenedorAltura;
        }

        window.scrollTo({
            left: 0,
            top: posicion,
        });
        
        // Cerrar - Close
        enlacesContenedor.style.height = 0;
    }); 
});

