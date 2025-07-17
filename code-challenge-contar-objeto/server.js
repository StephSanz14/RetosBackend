// Importa la librería Express para crear el servidor web
import express from 'express';
import { contar } from './controllers/contarController.js';
// Define el puerto donde el servidor escuchará las peticiones
const PORT = 3000;
// Crea una instancia de la aplicación Express
const app = express();
// ===== CONFIGURACIÓN DE MIDDLEWARES =====

// Middleware global para parsear automáticamente el cuerpo de las peticiones JSON
// Esto permite acceder a req.body en las rutas POST/PUT

app.use(express.json());

// Crea una instancia del enrutador de Express
// El router permite definir rutas modulares que luego se montan en la aplicación principal
const router = express.Router();

// ===== CONFIGURACIÓN DE RUTAS =====
// Ruta: http://localhost:3000/contar
app.use('/', router);

router.post('/contar', (req, res) => {
const objeto= req.body;
  //validamos que la ruta tenga los parámetros
  if (!objeto) {
    res.status(400).json({error: 'Favor de agregar el objeto'})
  } else {
    let propiedades=contar(objeto);
    res.status(200).json({'El número de propiedades son ': propiedades})}
}
);

// ===== INICIO DEL SERVIDOR =====

/**
 * Inicia el servidor Express en el puerto especificado
 * Cuando el servidor esté listo, imprime un mensaje de confirmación en la consola
 */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
