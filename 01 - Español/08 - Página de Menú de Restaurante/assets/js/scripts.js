
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        // Hay que usar esta ruta ya que los navegadores parte del index.html y deben entrar en la carpeta (assets) seguido de la carpeta (images) donde estan las imagenes
        img: "./assets/images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./assets/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./assets/images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./assets/images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./assets/images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./assets/images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./assets/images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./assets/images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./assets/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./assets/images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

// Obtener El Elemento Padre - Get Parent Element
const seccionCentral = document.querySelector(".seccion-central");
const botonContenedor = document.querySelector(".boton-contenedor");

// Mostrar Todos los Elementos Cuando Se Carga la Página - Display All Items When Page Loads
window.addEventListener("DOMContentLoaded", function () {
    elementosDelMenuDisplay(menu);
    botonesDelMenuDisplay();
});

function elementosDelMenuDisplay(articulosMenu) {
    let menuDisplay = articulosMenu.map(function (articulo) {
        return `
            <article class="menu-articulo">
                <img src=${articulo.img} alt=${articulo.title} class="foto">
                <div class="articulo-info">
                    <header>
                        <h4>${articulo.title}</h4>
                        <h4 class="precio">${articulo.price}</h4>
                    </header>
                    <p class="articulo-texto">
                        ${articulo.desc}
                    </p>
                </div> 
            </article>
        `;
    });
    menuDisplay = menuDisplay.join("");
    seccionCentral.innerHTML = menuDisplay;
}

function botonesDelMenuDisplay() {
    const categorias = menu.reduce(function (valores, articulo) {
        if (!valores.includes(articulo.category)) {
            valores.push(articulo.category);
        }
        return valores;
    }, ["all"]);

    const botonesCategorias = categorias.map(function (category) {
        return `
            <button type="button" class="boton-filtro" data-id=${category}>
                ${category}
            </button>
        `;
    }).join("");

    botonContenedor.innerHTML = botonesCategorias;
    const botonesFiltro = botonContenedor.querySelectorAll(".boton-filtro");
    console.log(botonesFiltro);

    botonesFiltro.forEach(function (boton) {
        boton.addEventListener("click", function (e) {
            const categoria = e.currentTarget.dataset.id;
            const categoriaMenu = menu.filter(function (articuloMenu) {
                if (articuloMenu.category === categoria) {
                    return articuloMenu;
                }
            });

            if (categoria === "all") {
                elementosDelMenuDisplay(menu);
            } else {
                elementosDelMenuDisplay(categoriaMenu);
            }
        });
    });
}
