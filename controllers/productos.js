// controlador para el manejo de los productos

//conectamos el controlador con su modelo correspondiente

let producto = require('../models/productos')

//toda la logica de un crud típico listartodos, listarpor id, crear, actualizar, borrar...

const listartodos = async(req, res)=>{
try {
    //consultar todos sin filtro
    let listarProductos = await producto.find().exec()
    res.status(200).send({
        exito:true,
        listarProductos
    })
} catch (error) {
    res.status(500).send({
        exito:false,
        msg:"Error en la consulta"
    })
}
}


//Crear nuevo
const nuevo = async(req, res)=>{
    //llega el objeto en el body del request
    let datos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        marca: req.body.marca,
        precio: req.body.precio,
        existencia: req.body.existencia,
        rating: req.body.rating,
        numRevisiones: req.body.numRevisiones,
        estaOfertado: req.body.estaOfertado
    }

    try {
        //instancia del modelo producto
        //creamos el nuevo documento(que agredaremos a la coleccion)
        const productoNuevo = new producto(datos)
        //salvamos en mongoDB
        productoNuevo.save() //escribe en mongo

        return res.send({
            estado:true,
            msg:"insercion exitosa"
        })
    } catch (error) {
        return res.send({
            estado:false,
            msg:`Ha ocurrido un error en la consulta: ${error}`
        }) 
    }
}

//...........

module.exports = {
    listartodos,
    nuevo
}