export function Mayor(parametro){
    const numeros = parametro.split(",").map(n=>parseInt(n));
    // parseInt() convierte strings a números enteros, retorna NaN si no es válido
    if (numeros.some(isNaN)) {
    return false; // o puedes usar undefined
  } else{
    const mayor = Math.max(...numeros); 
    return mayor;}
}
