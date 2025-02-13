//rutas para consumir el modulo productos de nuestro servicio

const express = require("express")
const router = express.Router()

//instanciamos el controlador correspondiente
const usuarioCtr = require('../controllers/usuarios')

//rutas que entregará el modulo producto

router.get("/usuarios/listartodos", usuarioCtr.listartodos)
/* router.get("/producto/buscarxid/:id", productoCtr.buscarxid)
router.post("/producto/nuevo", productoCtr.nuevo)
router.delete("/producto/borrarxid/:id", productoCtr.borrarxid)
router.put("/producto/actualizarxid/:id", productoCtr.actualizarxid)
 */
//......

module.exports = router