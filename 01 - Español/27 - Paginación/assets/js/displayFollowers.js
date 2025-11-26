
const contenedor = document.querySelector(".contenedor");

const display = (followers) => {
    const nuevosSeguidores = followers.map((persona) => {
        const { avatar_url, login, html_url } = persona;
        return `
            <article class="tarjeta">
                <img src="${avatar_url}" alt="person">
                <h4>${login}</h4>
                <a href="${html_url}" class="boton">Ver Perfil</a>
            </article>
        `;
    }).join("");
    contenedor.innerHTML = nuevosSeguidores;
};

export default display;
