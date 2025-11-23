
// Variables Constantes - Constant Variables
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const diasDeLaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];

const regalo = document.querySelector(".regalo");
const fechaLimite = document.querySelector(".fecha-limite");
const elementos = document.querySelectorAll(".fecha-limite-formato h4");

// Variables 
let fechaTemporal = new Date();
let anoTemporal = fechaTemporal.getFullYear();
let mesTemporal = fechaTemporal.getMonth();
let diaTemporal = fechaTemporal.getDate();

// Los meses se Basan en el Indice Cero - Months are Zero Index Based
const fechaFutura = new Date(anoTemporal, mesTemporal, diaTemporal + 10, 11, 30, 0);

const ano = fechaFutura.getFullYear();
const horas = fechaFutura.getHours();
const minutos = fechaFutura.getMinutes();

let mes = fechaFutura.getMonth();
mes = meses[mes];
const diaDeLaSemana = diasDeLaSemana[fechaFutura.getDay()];
const fecha = fechaFutura.getDate();
regalo.textContent = `El Sorteo Finaliza el ${diaDeLaSemana}, ${fecha} ${mes} ${ano} ${horas}:${minutos}am`;

const tiempoFuturo = fechaFutura.getTime();
function obtenerTiempoRestante() {
    const hoy = new Date().getTime();
    const t = fechaFutura - hoy;
    /**
     * 1s = 1000ms
     * 1m = 60s
     * 1hr = 60m
     * 1d = 24hr 
    */
    // Valores en Milisegundos - Values in Miliseconds
    const unDia = 24 * 60 * 60 * 1000;
    const unaHora = 60 * 60 * 1000;
    const unMinuto = 60 * 1000;
    // Calcular Todos los Valores - Calculate All Values
    let dias = t / unDia;
    dias = Math.floor(dias);
    let horas = Math.floor((t % unDia) / unaHora);
    let minutos = Math.floor((t % unaHora) / unMinuto);
    let segundos = Math.floor((t % unMinuto) / 1000);

    // Matriz de Valores Establecidos - Set Values Array
    const valores = [dias, horas, minutos, segundos];
    function formato(articulo) {
        if (articulo < 10) {
            return (articulo = `0${articulo}`);
        }
        return articulo;
    }

    elementos.forEach(function (articulo, indice) {
        articulo.innerHTML = formato(valores[indice]);
    });

    if (t < 0) {
        clearInterval(cuentaAtras);
        fechaLimite.innerHTML = `<h4 class="expirado">Lo Sentimos, ¡Este Sorteo Ha Expirado!</h4>`;
    }
}

// Cuent Atras
let cuentaAtras = setInterval(obtenerTiempoRestante, 100);
// Establecer Valores iniciales - Set Initial Values
obtenerTiempoRestante();
