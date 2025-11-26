
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchSeguidores = async () => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
};

export default fetchSeguidores;
