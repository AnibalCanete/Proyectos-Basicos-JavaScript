
// Variables Constantes - Constant Variables
const colores = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const boton = document.getElementById("boton");
const color = document.querySelector(".color");

boton.addEventListener("click", function () {
    const numeroAleatorio = obtenerNumeroAleatorio(); 

    document.body.style.backgroundColor = colores[numeroAleatorio];
    color.textContent = colores[numeroAleatorio];
});

function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * colores.length);
}

