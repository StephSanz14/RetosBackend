const { ask } = require('../practicaSprint/input');
async function main() {
  const a = Number(await ask('Ingresa el primer número: '));
  const b = Number(await ask('Ingresa el segundo número: '));
  sum(a,b);
  const number = Number(await ask('Ingresa el numero a convertir: '));
  numberToString(number);
}

function sum(a,b) {
    const resultado = a+b;
    console.log('El resultado es: '+resultado);
}

function numberToString(number) {
    str = number.toString();
    console.log("El resultado es "+ str);
}

main();