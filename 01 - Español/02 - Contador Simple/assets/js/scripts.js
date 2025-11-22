
// Establecer El Valor Inicial en Cero - Set The Initial Value To Zero
let contador = 0;
// Seleccionar Valor y Botones - Select Value and Buttons
const valor = document.querySelector("#valor");
const botones = document.querySelectorAll(".boton");

botones.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
        const estilos = e.currentTarget.classList;
        if (estilos.contains("disminuir")) {
            contador--;
        } else if (estilos.contains("aumentar")) {
            contador++;
        } else {
            contador = 0;
        }

        if (contador > 0) {
            valor.style.color = "green";
        }

        if (contador < 0) {
            valor.style.color = "red";
        }

        if (contador === 0) {
            valor.style.color = "#222";
        }

        valor.textContent = contador;

    });
});
