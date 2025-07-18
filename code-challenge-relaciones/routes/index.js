const express = require("express");
const router = express.Router();

const calificacionesRoutes = require("./calificacionesRoutes");

router.get("/", (req, res) => {
  res.send("Esta es la plataforma de Calificaciones");
});

router.use("/calificaciones", calificacionesRoutes);

module.exports = router;