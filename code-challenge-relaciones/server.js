const express = require("express");
const app = express();
const rutas = require("./routes");

app.use(express.json());
app.use("/", rutas); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:\${PORT}`);
});
