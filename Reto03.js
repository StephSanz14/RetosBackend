import http from "http";
import { invertir } from "../practicaSprint/invertir.js";
import { palindromo } from "../practicaSprint/palindromo.js";
import { test } from "./testStr.js";
import { parseQuery } from "./param.js";
// Creamos el servidor
const server = http.createServer((req, res) => {
  const { method, url } = req; //desctructuración para obtener el metodo y la url

  //vista principal

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("¡Esta es mi vista principal!");

    //ruta para invertir cadena
  } else if (url.startsWith("/invertir/") && method === "GET") {
    // Obtiene la palabra desde la URL y la invierte.
    const invertido = decodeURIComponent(url.split("/")[2]).toLowerCase();

    //validacion
    const validacion = test (invertido);
    if (validacion) {
      const resultado = invertir(invertido);
    // Establece el código de estado y el tipo de contenido como HTML.
    res.writeHead(200, { "Content-Type": "text/html" });
    // Envía el contenido HTML al cliente y finaliza la respuesta.
    res.end(`<h1>${resultado}</h1>`);
    }
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("No se admiten carácteres");
    }

    
  } else if (url.startsWith("/palindromo") && method === "GET"){


parseQuery(req, res, () => {
      const { pathname, method, query } = req;  

      if (pathname === '/palindromo' && method === 'GET') {
        const palabra = query.palabra;
       if (palabra) {
        const resultado= palindromo(palabra);
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`<h1>${resultado}</h1>`);
       } else res.writeHead(400, { "Content-Type": "text/plain" });
      return res.end("Por favor agrega el parámetro ?palabra=algo");
      }
    });



    //en caso que pongamos otra ruta
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página no encontrada");
  }
});

//Aquí probamos que el puerto se este ejecutando exitosamente
// Inicia el servidor y lo pone a escuchar en el puerto 3000.
// Cuando el servidor está listo, muestra un mensaje en la consola.
server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
