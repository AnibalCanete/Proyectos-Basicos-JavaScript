
// Variables Constantes - Constant Variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const boton = document.getElementById("boton");
const color = document.querySelector(".color");

boton.addEventListener("click", function () {
    let colorHex = "#";
    for (let i = 0; i < 6; i++) {
        colorHex += hex[obtenerNumeroAleatorio()];
    }

    color.textContent = colorHex;
    document.body.style.backgroundColor = colorHex;
});

function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * hex.length);
}
