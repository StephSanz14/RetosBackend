import { Mayor } from './utils/encontrarMayor.js';//----------------------------------------------------
// Importa el módulo nativo 'http' de Node.js para crear el servidor HTTP.
import http from 'http';

// Crea el servidor HTTP y delega el manejo de cada solicitud a la función manejarRutas.
const server = http.createServer((req, res) => {
  // Construye la URL completa con la base para poder usar la clase URL
  const fullUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = fullUrl.pathname;
  const query = fullUrl.searchParams;

  // Valida que la ruta sea '/mayor' y que el método sea GET
  if (pathname === '/mayor' && req.method === 'GET')  {
    // Obtiene el parámetro 'numeros' de la consulta
    const parametro = query.get('numeros');

    // Si no se proporciona el parámetro, responder con error 400
    if (!parametro) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Favor de agregar los parámetros' }));
      return;
    }

    // Llama a la función Mayor para obtener el número mayor
    const mayor = Mayor(parametro);

    // Si alguno de los valores no es válido, retorna error 400
    if (mayor === false) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Todos los valores deben ser números válidos' }));
      return;
    }

    // Si todo está bien, responde con el número mayor encontrado
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 'El número mayor es': mayor }));
  } else {
    // Responde con error 404 si la ruta o método no coinciden
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

// Inicia el servidor y lo pone a escuchar en el puerto 3000.
// Cuando el servidor está listo, muestra un mensaje en la consola.
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
