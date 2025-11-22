
// classList - Muestra / Obtiene todos las clases 
// contains - Comprueba La Lista de Clases Para Una Clase Especifica
// add - Añadir Clase
// remove - Eliminar Clase
// toggle - Alternar Clase

const navegacionInterruptor = document.querySelector(".navegacion-interruptor");
const enlaces = document.querySelector(".enlaces");

navegacionInterruptor.addEventListener("click", function () {
    enlaces.classList.toggle("mostrar-enlaces");
});
