// Declaro las variables que voy a usar
let costoMedialunas = 2;
let costoEnvioRetiro = 100;
let costoEnvioMicrocentro = 120;
let cantidadMedialunas;
let zonaEnvio;
let costoTotal;

// Cantidad de medialunas a través de un prompt
cantidadMedialunas = prompt("¿Cuántas medialunas querés?");

// Función para calcular el costo total de las medialunas
function calcularCosto() {
  costoTotal = costoMedialunas * cantidadMedialunas;
}

// Zona de envío a través de un prompt
zonaEnvio = prompt("¿Calcula el costo de envío para Retiro o Microcentro?");

// For para determinar el costo del envío
for (let i = 0; i < cantidadMedialunas; i++) {
  if (zonaEnvio == "Retiro") {
    costoTotal += costoEnvioRetiro;
  } else if (zonaEnvio == "Microcentro") {
    costoTotal += costoEnvioMicrocentro;
  }
}

calcularCosto();
console.log(`El costo total es: ${costoTotal}`);

// llamo a la función para calcular el costo total
calcularCosto();

// mostrando el costo total en la consola
console.log(`El costo total es: ${costoTotal}`);

// si se quiere mostrar el costo total en una alerta
alert(`El costo total es: ${costoTotal}`);
