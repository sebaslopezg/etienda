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
        await productoNuevo.save() //escribe en mongo

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

//Buscar por id o por otro parametro
const buscarxid = async(req, res) =>{
    //Recibimos el parametro por le cual debo buscar y eliminar
    let id = req.params.id

    try {
        //Logica de buscar y mostrar el resultado
        //let consulta = await producto.findById(id).exec()
        let consulta = await producto.findOneAndDelete({_id: id}).exec()
        return res.send({
            estado:true,
            msg:"Consulta exitosa",
            consulta
        })
    } catch (error) {
        return res.send({
            estado:false,
            msg:`Ha ocurrido un error en la consulta: ${error}`
        }) 
    }
}


//Actualizar deacuerdo al id del producto

const actualizarxid = async(req, res)=>{
    //recibe el parametro de la consulta
    let id = req.params.id

    //payload que viene el el body :: los datos que manda el formulario
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
        let consulta = await producto.findByIdAndUpdate(id, datos).exec()
        return res.send({
            estado:true,
            msg:"Se ha actualizado el producto de manera exitosa",
            consulta
        })
    } catch (error) {
        return res.send({
            estado:false,
            msg:`Ha ocurrido un error el intentar actualizar el producto ${error}`
        })
    }
}


//Borrar de acuerdo al id :: Recuerde que este es un borrado didactico, no usar en el mundo real
const borrarxid = async(req, res)=>{
    //Recibimos el parametro
    let id = req.params.id

    try {
        let consulta = await producto.findByIdAndDelete(id).exec()
        return res.send({
            estado:true,
            msg:"Eliminación exitosa",
            consulta
        })
    } catch (error) {
        return res.send({
            estado:false,
            msg:`Error al intentar eliminar ${error}`
        })
    }

}

//...........

module.exports = {
    listartodos,
    nuevo,
    buscarxid,
    borrarxid,
    actualizarxid,
}