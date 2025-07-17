export function contar(objeto){
    if (!objeto || typeof objeto !== "object" || Array.isArray(objeto)) {
  return null;
} else {
// Object.keys() devuelve un array con las claves
const cantidad = Object.keys(objeto).length;
    return cantidad;}}

