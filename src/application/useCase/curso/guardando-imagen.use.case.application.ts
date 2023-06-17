
const multer = require("multer");
const path = require("path");
const fs = require("fs");


const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../../images"),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

exports.upload = upload.single("image");

exports.uploadFile = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    const type = req.file.mimetype;
    console.log("type",type);
    const name = req.file.originalname;
    console.log("name",name);

    const date = fs.readFileSync(
      path.join(__dirname, "../../../images/" + req.file.filename)
    );
    console.log("req.file.filename",req.file.filename);


    let image = {
      imagenId: req.file.filename,
      data: date,
      nombre: name
    };
    conn.query(
      "INSERT INTO " + req.params.tabla + " set ?",
      image,
      (err, rows) => {
        console.log(
          err
            ? "Err INSERT INTO " + req.params.tabla + " " + err
            : req.params.tabla + ": Image added!"
        );
        res.json(
          err
            ? { err: "Error al cargar la imagen" }
            : image.imagenId
        );
      }
    );
  });
};