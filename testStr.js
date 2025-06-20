export function test(palabra){
const validacion = /^[a-zA-Z0-9]+$/.test(palabra);
return validacion; 
}