const express = require("express");
const routes = express.Router();

const imagesController = require("../application/useCase/curso/guardando-imagen.use.case.application");

routes.post(
  "/images/:tabla",
  imagesController.upload,
  imagesController.uploadFile
);
routes.get('/images/:filename', (req, res) => {
  const imagePath = path.join(__dirname, '../images', req.params.filename);


  // Verifica si el archivo existe
  if (fs.existsSync(imagePath)) {
    // Envía el archivo como respuesta
    console.log("imagePath",imagePath);
    res.sendFile(imagePath);
  } else {
    // Si el archivo no existe, responde con un código de error
    res.status(404).json({ error: 'Imagen no encontrada' });
  }
});

module.exports = routes;