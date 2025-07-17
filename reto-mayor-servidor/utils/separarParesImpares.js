 export function separarParesImpares(parametro) {
  // Filtra números pares (resto de división por 2 es 0)
  // Filtra números impares (resto de división por 2 no es 0)
  const numeros = parametro.split(",").map(n=>parseInt(n));
  let resultado ={
    pares:[],
    impares:[]
  }
  // parseInt() convierte strings a números enteros, retorna NaN si no es válido
    if (numeros.some(isNaN)) {
    return false; // o puedes usar undefined
  } else{
    for (let i = 0; i < numeros.length; i++) {    
        if (numeros[i]%2===0) {
            resultado.pares.push(numeros[i])
        }else{
            resultado.impares.push(numeros[i]);
        }
        
    }
  }
  return resultado;
}