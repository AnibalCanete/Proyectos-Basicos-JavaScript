
const paginar = (followers) => {
    const elementosPorPagina = 10;
    const numeroDePaginas = Math.ceil(followers.length / elementosPorPagina);

    const nuevosSeguidores = Array.from({ length: numeroDePaginas }, (_, index) => {
        const iniciar = index * elementosPorPagina;
        return followers.slice(iniciar, iniciar + elementosPorPagina);
    });
    return nuevosSeguidores;
};

export default paginar;
