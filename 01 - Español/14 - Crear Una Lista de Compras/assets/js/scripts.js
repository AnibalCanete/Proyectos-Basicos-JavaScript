
// Seleccionar Items - Select Items
const formulario = document.querySelector(".tienda-de-comestibles-formulario");
const alerta = document.querySelector(".alerta");
const tiendaDeComestibles = document.getElementById("tienda-de-comestibles");
const botonEntregar = document.querySelector(".boton-entregar");
const contenedor = document.querySelector(".tienda-de-comestibles-contenedor");
const lista = document.querySelector(".tienda-de-comestibles-lista");
const botonLimpiar = document.querySelector(".boton-limpiar");

// Opción Editar - Edit Option
let editarElemento;
let editarBandera = false;
let editarID = "";

// Escuchar Eventos - Event Listeners

// Enviar Formulario - Submit Form
formulario.addEventListener("submit", agregarArticulo);

// Borrar Lista - Clear List
botonLimpiar.addEventListener("click", limpiarArticulos);

// Mostrar Elementos Cargados - Display Items Onload
window.addEventListener("DOMContentLoaded", elementosDeConfiguracion);

// Funciones - Functions

// Añadir Articulo - Add Item
function agregarArticulo(e) {
    e.preventDefault();
    const valor = tiendaDeComestibles.value;
    const id = new Date().getTime().toString();

    if (valor !== "" && !editarBandera) {
        const elemento = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        elemento.setAttributeNode(attr);
        elemento.classList.add("tienda-de-comestibles-articulos");
        elemento.innerHTML = `
            <p class="titulo">${valor}</p>
            <div class="boton-contenedor">
                <!-- Boton Editar - Edit Button -->
                <button type="button" class="boton-editar">
                    <i class="fas fa-edit"></i>
                </button>
                <!-- Boton Eliminar - Delete Button -->
                <button type="button" class="boton-eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        // Agregar Eventos a Ambos Botones - Add Event Listeners to Both Buttons
        const botonEliminar = elemento.querySelector(".boton-eliminar");
        botonEliminar.addEventListener("click", eliminarArticulo);
        const botonEditar = elemento.querySelector(".boton-editar");
        botonEditar.addEventListener("click", editarArticulo);

        // Añadir Hijo - Append Child
        lista.appendChild(elemento);

        // Mostrar Alerta - Display Alert
        alertaDisplay("Artículo Añadido a la Lista", "Exito");

        // Mostrar Contenedor - Show Container
        contenedor.classList.add("mostrar-contenedor");

        // Establecer Almacenamiento Local - Set Local Storage
        agregarAlAlmacenamientoLocal(id, valor);

        // Volver a Valores Predeterminados - Set Back to Default
        volverAValoresPredeterminados();

    } else if (valor !== "" && editarBandera) {
        editarElemento.innerHTML = valor;
        alertaDisplay("Valor Cambiado", "Exito");

        // Editar Almacenamiento Local - Edit Local Storage
        editarAlmacenamientoLocal(editarID, valor);
        volverAValoresPredeterminados();
    } else {
        alertaDisplay("Por Favor Ingrese un Valor", "Peligro");
    }
} 

// Mostrar Alerta - Display Alert
function alertaDisplay(texto, accion) {
    alerta.textContent = texto;
    alerta.classList.add(`alerta-${accion}`);
    // Eliminar Alerta - Remove Alert
    setTimeout(function () {
        alerta.textContent = "";
        alerta.classList.remove(`alerta-${accion}`);
    }, 1000);
}

// Borrar Articulos - Clear Items
function limpiarArticulos() {
    const articulos = document.querySelectorAll(".tienda-de-comestibles-articulos");
    if (articulos.length > 0) {
        articulos.forEach(function (articulo) {
            lista.removeChild(articulo);
        });
    }
    contenedor.classList.remove("mostrar-contenedor");
    alertaDisplay("Lista Vacía", "Peligro");
    volverAValoresPredeterminados();
    localStorage.removeItem("lista");
}

// Eliminar Articulo - Delete Item 
function eliminarArticulo(e) {
    const elemento = e.currentTarget.parentElement.parentElement;
    const id = elemento.dataset.id;

    lista.removeChild(elemento);

    if (lista.children.length === 0) {
        contenedor.classList.remove("mostrar-contenedor");
    }

    alertaDisplay("Articulo Removido", "Peligro");
    volverAValoresPredeterminados();
    // Remover del Almacenamiento Local - Remove From Local Storage
    eliminarDelAlmacenamientoLocal(id);
}

// Editar Articulo - Edit Item
function editarArticulo(e) {
    const elemento = e.currentTarget.parentElement.parentElement;
    // Establecer Elemento de Edición - Set Edit Item
    editarElemento = e.currentTarget.parentElement.previousElementSibling;
    // Establecer Valor de Formulario - Set Form Value
    tiendaDeComestibles.value = editarElemento.innerHTML;
    editarBandera = true;
    editarID = elemento.dataset.id;
    botonEntregar.textContent = "Editar";
}

// Volver a los Valores Predeterminados - Set Back to Defaults
function volverAValoresPredeterminados() {
    tiendaDeComestibles.value = "";
    editarBandera = false;
    editarID = "";
    botonEntregar.textContent = "Entregar";
}

// Almacenamiento Local - Local Storage

// Añadir al Almacenamiento Local - Add To Local Storage
function agregarAlAlmacenamientoLocal(id, valor) {
    const tiendaDeComestibles = { id, valor };
    let articulos = obtenerAlmacenamientoLocal();
    articulos.push(tiendaDeComestibles);
    localStorage.setItem("lista", JSON.stringify(articulos));
}

function obtenerAlmacenamientoLocal() {
    return localStorage.getItem("lista")
        ? JSON.parse(localStorage.getItem("lista"))
        : [];
}

function eliminarDelAlmacenamientoLocal(id) {
    let articulos = obtenerAlmacenamientoLocal();

    articulos = articulos.filter(function (articulo) {
        if (articulo.id !== id) {
            return articulo;
        }
    });

    localStorage.setItem("lista", JSON.stringify(articulos));
}

function editarAlmacenamientoLocal(id, valor) {
    let articulos = obtenerAlmacenamientoLocal();

    articulos = articulos.map(function (articulo) {
        if (articulo.id === id) {
            articulo.valor = valor;
        }
        return articulo;
    });

    localStorage.setItem("lista", JSON.stringify(articulos));
}

// Elementos de Configuración - Setup Items
function elementosDeConfiguracion() {
    let articulos = obtenerAlmacenamientoLocal();

    if (articulos.length > 0) {
        articulos.forEach(function (articulo) {
            crearListaArticulo(articulo.id, articulo.valor);
        });
        contenedor.classList.add("mostrar-contenedor");
    }
}

function crearListaArticulo(id, valor) {
    const elemento = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    elemento.setAttributeNode(attr);
    elemento.classList.add("tienda-de-comestibles-articulos");
    elemento.innerHTML = `
        <p class="titulo">${valor}</p>
        <div class="boton-contenedor"> 
            <!-- Boton Editar - Edit Button -->
            <button type="button" class="boton-editar">
                <i class="fas fa-edit"></i>
            </button>
            <!-- Boton Eliminar - Delete Button -->
            <button type="button" class="boton-eliminar">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    // Agregar Eventos a Ambos Botones - Add Event Listeners to Both Buttons
    const botonEliminar = elemento.querySelector(".boton-eliminar");
    botonEliminar.addEventListener("click", eliminarArticulo);
    const botonEditar = elemento.querySelector(".boton-editar");
    botonEditar.addEventListener("click", editarArticulo);

    // Añadir Hijo - Append Child
    lista.appendChild(elemento);

}
