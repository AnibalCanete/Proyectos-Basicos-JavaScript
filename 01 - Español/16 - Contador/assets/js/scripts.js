
// Funciones - Functions
function obtenerElemento(selecion) {
    const elemento = document.querySelector(selecion);
    if (elemento) {
        return elemento;
    }
    throw new Error (`Por Favor Marque el Selector "${selecion}", No Existe Dicho Elemento`);
}

// Clase - Class
class Contador {
    constructor(elemento, valor) {
        this.contador = elemento;
        this.valor = valor;
        this.botonReiniciar = elemento.querySelector(".reiniciar");
        this.botonAumentar = elemento.querySelector(".aumentar");
        this.botonDisminuir = elemento.querySelector(".disminuir");
        this.valorDOM = elemento.querySelector(".valor");
        this.valorDOM.textContent = this.valor;

        this.aumentar = this.aumentar.bind(this);
        this.disminuir = this.disminuir.bind(this);
        this.reiniciar = this.reiniciar.bind(this);

        this.botonAumentar.addEventListener("click", this.aumentar);
        this.botonDisminuir.addEventListener("click", this.disminuir);
        this.botonReiniciar.addEventListener("click", this.reiniciar);
    }

    // Métodos - Methods
    aumentar() {
        this.valor++;
        this.valorDOM.textContent = this.valor;
    }

    disminuir() {
        this.valor--;
        this.valorDOM.textContent = this.valor;
    }

    reiniciar() {
        this.valor = 0;
        this.valorDOM.textContent = this.valor;
    }
}

const primerContador = new Contador(obtenerElemento(".primer-contador"), 100);
const segundoContador = new Contador(obtenerElemento(".segundo-contador"), 200);
