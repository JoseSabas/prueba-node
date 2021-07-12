const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

console.log('Suma: ' + sumar(22,15));
console.log('Resta: ' + restar(33,11));
console.log('Multiplicación: ' + multiplicar(11,2));
console.log('Multiplicación: ' + multiplicar(0,5));
console.log('División: ' + dividir(44,2));
console.log('División: ' + dividir(0,5));
console.log('División: ' + dividir(5,0));