export function parseQuery(req, res, next) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  req.query = Object.fromEntries(url.searchParams.entries());
  req.pathname = url.pathname;
  next();
}

/* 
req.url: es la parte de la URL después del dominio (ej: /productos?categoria=ropa)
req.headers.host: obtiene el host, por ejemplo localhost:3000

Se usa el constructor new URL() para construir una URL completa, como:

new URL("/productos?categoria=ropa", "http://localhost:3000")
=> http://localhost:3000/productos?categoria=ropa

req.query = Object.fromEntries(url.searchParams.entries());
url.searchParams.entries() devuelve los parámetros como una lista (tipo Map):
[ ['categoria', 'ropa'], ['color', 'rojo'] ]

req.pathname = url.pathname;
Extrae solo la ruta (sin los parámetros) de la URL.
Ejemplo: si la URL es /productos?categoria=ropa
pathname será: /productos
Se guarda en req.pathname para que esté disponible más adelante.


Llama a next() para decir:
“✅ ya terminé, pasá al siguiente middleware o función en la cadena”.

¿Qué hace esta función entonces?
Esta función toma la URL de la solicitud y:
1-Extrae los parámetros de consulta y los guarda en req.query
2-Extrae la ruta base y la guarda en req.pathname
3-Llama a next() para continuar con el flujo del servidor

*/