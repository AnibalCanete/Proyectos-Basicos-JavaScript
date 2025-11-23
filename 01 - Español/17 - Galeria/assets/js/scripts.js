
// Funciones - Functions
function obtenerElemento(seleccion) {
    const elemento = document.querySelector(seleccion);
    if (elemento) {
        return elemento;
    }
    throw new Error(`Por Favor Marque el Selector "${seleccion}", No Existe Dicho Elemento`);
}

// Clase - Class
class Galeria {
    constructor(elemento) {
        this.contenedor = elemento;
        this.lista = [...elemento.querySelectorAll(".img")];
        // Objetivo - Target
        this.modal = obtenerElemento(".modal");
        this.modalImg = obtenerElemento(".imagen-principal");
        this.imagenNombre = obtenerElemento(".imagen-nombre");
        this.modalImagenes = obtenerElemento(".modal-imagenes");
        this.botonCerrar = obtenerElemento(".boton-cerrar");
        this.botonSiguiente = obtenerElemento(".boton-siguiente");
        this.botonAnterior = obtenerElemento(".boton-anterior");

        this.cerrarModal = this.cerrarModal.bind(this);
        this.siguienteImagen = this.siguienteImagen.bind(this);
        this.anteriorImagen = this.anteriorImagen.bind(this);
        this.elegirImagen = this.elegirImagen.bind(this);
        // Contenedor de Evento - Container Event
        this.contenedor.addEventListener("click", function (e) {
            if (e.target.classList.contains("img")) {
                this.abrirModal(e.target, this.lista);
            }
        }.bind(this));
    }

    // Métodos - Methods
    abrirModal(seleccionarImagen, lista) {
        this.configurarImagenPrincipal(seleccionarImagen);
        this.modalImagenes.innerHTML = lista.map(function (imagen) {
            return `
                <img src="${imagen.src}" title="${imagen.title}" data-id="${imagen.dataset.id}" class="${seleccionarImagen.dataset.id === imagen.dataset.id ? "modal-img seleccionado" : "modal-img"}">
            `;
        }).join("");

        this.modal.classList.add("abrir");
        this.botonCerrar.addEventListener("click", this.cerrarModal);
        this.botonSiguiente.addEventListener("click", this.siguienteImagen);
        this.botonAnterior.addEventListener("click", this.anteriorImagen);
        this.modalImagenes.addEventListener("click", this.elegirImagen);
    }

    configurarImagenPrincipal(seleccionarImagen) {
        this.modalImg.src = seleccionarImagen.src;
        this.imagenNombre.textContent = seleccionarImagen.title;
    }

    cerrarModal() {
        this.modal.classList.remove("abrir");
        this.botonCerrar.removeEventListener("click", this.cerrarModal);
        this.botonSiguiente.removeEventListener("click", this.siguienteImagen);
        this.botonAnterior.removeEventListener("click", this.anteriorImagen);
        this.modalImagenes.removeEventListener("click", this.elegirImagen);
    }

    siguienteImagen() {
        const seleccionar = this.modalImagenes.querySelector(".seleccionado");
        const siguiente = seleccionar.nextElementSibling || this.modalImagenes.firstElementChild;
        seleccionar.classList.remove("seleccionado");
        siguiente.classList.add("seleccionado");
        this.configurarImagenPrincipal(siguiente);
    }

    anteriorImagen() {
        const seleccionar = this.modalImagenes.querySelector(".seleccionado");
        const anterior = seleccionar.previousElementSibling || this.modalImagenes.lastElementChild;
        seleccionar.classList.remove("seleccionado");
        anterior.classList.add("seleccionado");
        this.configurarImagenPrincipal(anterior);
    }

    elegirImagen(e) {
        if (e.target.classList.contains("modal-img")) {
            const seleccionar = this.modalImagenes.querySelector(".seleccionado");
            seleccionar.classList.remove("seleccionado");

            this.configurarImagenPrincipal(e.target);
            e.target.classList.add("seleccionado");
        }
    }
}

const naturaleza = new Galeria(obtenerElemento(".naturaleza"));
const ciudad = new Galeria(obtenerElemento(".ciudad"));
