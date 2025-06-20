import { invertir } from "../practicaSprint/invertir.js";
export function palindromo (palabra) {
    const invertida =invertir (palabra);
    let resultado="";
    if (palabra===invertida) {
        resultado = 'Es una palabra palindroma'
    } else {
        resultado = "No es una palabra palindroma"
    }
    return resultado;
}