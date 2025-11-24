
// Variables Constantes - Constant Variable
const url = "https://icanhazdadjoke.com/";
const boton = document.querySelector(".boton");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", () => {
    fetchBromaPapa();
});

const fetchBromaPapa = async () => {
    resultado.textContent = "Cargando...";
    try {
        const respuesta = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Agent": "Learning app",
            },
        });

        if (!respuesta.ok) {
            throw new Error("Error");
        }

        const datos = await respuesta.json();

        resultado.textContent = datos.joke;
    } catch (error) {
        console.log(error.message);
        resultado.textContent = "Hubo Un Error...";
    }
};

fetchBromaPapa();