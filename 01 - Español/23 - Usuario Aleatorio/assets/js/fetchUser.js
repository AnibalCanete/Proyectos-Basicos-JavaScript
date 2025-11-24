
const URL = "https://randomuser.me/api/";

const obtenerUsuario = async () => {
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();
    // Desestructurar - Destructure
    const persona = datos.results[0];
    const { phone, email } = persona;
    const { large: image } = persona.picture;
    const { password } = persona.login;
    const { first, last } = persona.name;
    const { dob: { age }, } = persona;
    const { street: { number, name }, } = persona.location;
    return {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
    };
};

export default obtenerUsuario;
