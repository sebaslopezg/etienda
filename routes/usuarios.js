//rutas para consumir el modulo productos de nuestro servicio

const express = require("express")
const router = express.Router()
//middleware: util paramanejarlos request en body del formulario (files)
const multer = require("multer")

//instanciamos el controlador correspondiente
const usuarioCtr = require('../controllers/usuarios')

//configurar una bodega de almacenamiento

const storage = multer.diskStorage({
    //ruta de destinopara almacenar lor archivos
    destination:(req, file, cb) =>{
        cb(null, './uploads/usuarios/')
    },
    //estructura para denominar los archivos
    filename:(req, file, cb) =>{
        //armamos el nombre del archivo
        cb(null, Date.now() + "_" + file.originalname)
    }
})

//instancia del multer con la configuracion de almacenamiento y nombre de archivo
const uploads = multer({storage})

//rutas que entregará el modulo producto

router.get("/usuarios/listartodos", usuarioCtr.listartodos)
router.post("/usuarios/registro", usuarioCtr.registro);
router.post("/usuarios/login", usuarioCtr.login);
router.post(
    "/usuarios/subirimagen", 
    uploads.single("file0"),
    usuarioCtr.subirImagen
);

module.exports = router