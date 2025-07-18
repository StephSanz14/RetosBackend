const estudiantes = require("../data/estudiantes");
const cursos = require("../data/cursos");
const calificaciones = require("../data/calificaciones");

function obtenerCalificaciones(req, res) { 
  const resultado = calificaciones.map((i) => { 
    const estudiante = estudiantes.find((j) => j.id === i.estudianteId); 
    const curso = cursos.find((k) => k.id === i.cursoId); 

    if (!estudiante || !curso) {
      return null;
    }

    return { 
      nombre: estudiante.nombre,
      curso: curso.nombre,
      calificacion: i.calificacion,
    };
  }).filter(item => item !== null); 

  res.json(resultado);
}

module.exports = { obtenerCalificaciones };