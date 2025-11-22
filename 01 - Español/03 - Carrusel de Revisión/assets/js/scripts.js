
// Datos de Reseñas Locales - Local Reviews Data
const resenas = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Bill Anderson",
        job: "The Boss",
        img: "https://www.course-api.com/images/people/person-3.jpeg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
    {
        id: 4,
        name: "Peter Jones",
        job: "Intern",
        img: "https://www.course-api.com/images/people/person-4.jpeg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
];

// Seleccionar Articulos - Select Items
const imagen = document.getElementById("persona-img");
const autor = document.getElementById("autor");
const trabajo = document.getElementById("trabajo");
const info = document.getElementById("info");

const botonAnterior = document.querySelector(".boton-anterior");
const botonSiguiente = document.querySelector(".boton-siguiente");
const botonAleatorio = document.querySelector(".boton-aleatorio");

// Establecer Elemento Inicial - Set Starting Item
let articuloActual = 0;

// Cargar Elemento Inicial - Load Initial Item
window.addEventListener("DOMContentLoaded", function () {
    const articulo = resenas[articuloActual];
    imagen.src = articulo.img;
    autor.textContent = articulo.name;
    trabajo.textContent = articulo.job;
    info.textContent = articulo.text;
});

// Mostrar Persona Según El Articulo - Show Person Based on Item
function mostrarPersona(persona) {
    const articulo = resenas[persona];
    imagen.src = articulo.img;
    autor.textContent = articulo.name;
    trabajo.textContent = articulo.job;
    info.textContent = articulo.text;
}

// Mostrar A La Siguiente Persona - Show Next Person
botonSiguiente.addEventListener("click", function () {
    articuloActual++;
    if (articuloActual > resenas.length - 1) {
        articuloActual = 0;
    }
    mostrarPersona(articuloActual);
});

// Mostrar A La Anterior Persona - Show Prev Person
botonAnterior.addEventListener("click", function () {
    articuloActual--;
    if (articuloActual < 0) {
        articuloActual = resenas.length - 1;
    }
    mostrarPersona(articuloActual);
});

// Mostrar Persona Al Azar - Show Random Person
botonAleatorio.addEventListener("click", function () {
    articuloActual = Math.floor(Math.random() * resenas.length);
    mostrarPersona(articuloActual);
});
