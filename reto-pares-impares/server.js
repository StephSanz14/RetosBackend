// Importación del framework Express
import express from 'express';
import { separarParesImpares } from '../reto-mayor-servidor/utils/separarParesImpares.js';
// Define el puerto donde el servidor escuchará las peticiones
const PORT = 3000;
// Crea una instancia de la aplicación Express
const app = express();
// Creación del router de Express
// El router nos permite definir rutas modulares y reutilizables
const router = express.Router(); 
// EJEMPLOS DE URLS PARA PRUEBAS:
// GET http://localhost:3000/filtrar?numeros=1,2,2,3,3,4
// Permite filtros mediante query parameters (?numeros=1,2,2,3,3,4...)
router.get('/filtrar', (req, res) => {
  const parametro = req.query.numeros;
  //validamos que la ruta tenga los parámetros
  if (!parametro) {
    res.status(400).json({error: 'Favor de agregar los parámetros'})
  } else {
    const par= separarParesImpares(parametro);
    if (par === false) {
    return res.status(400).json({ error: 'Todos los valores deben ser números válidos' });
  } else{
    res.status(200).json({'A continuación mostramos pares o impares ': par})}
}
});
app.use('/', router);
// ===== INICIO DEL SERVIDOR =====

/**
 * Inicia el servidor Express en el puerto especificado
 * Cuando el servidor esté listo, imprime un mensaje de confirmación en la consola
 */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
