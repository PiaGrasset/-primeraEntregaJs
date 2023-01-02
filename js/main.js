// Declaramos las variables que vamos a utilizar
let costoMedialunas = 2;
let costoEnvioRetiro = 100;
let costoEnvioMicrocentro = 120;
let cantidadMedialunas;
let zonaEnvio;
let costoTotal;

// Pedimos la cantidad de medialunas a través de un prompt
cantidadMedialunas = prompt("¿Cuántas medialunas querés?");

// Calculamos el costo total de las medialunas
costoTotal = costoMedialunas * cantidadMedialunas;

// Pedimos la zona de envío a través de un prompt
zonaEnvio = prompt("¿Calcula el costo de envío para Retiro o Microcentro?");

// Utilizamos un if/else para determinar el costo del envío
if (zonaEnvio == "Retiro") {
  costoTotal += costoEnvioRetiro;
} else if (zonaEnvio == "Microcentro") {
  costoTotal += costoEnvioMicrocentro;
}