//modelo para la coleccion producto
//destructuring en la clase mongoose --solo traigo los metodos que me importan
const {Schema, model, Collection} = require('mongoose')

//Creamos el schema

const productoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        default: "",
    },
    imagen: {
        type: String,
        default: "",
    },
    imagenes: [
        {
            type: String,
        },
    ],
    marca: {
        type: String,
        default: "",
    },
    precio: {
        type: Number,
        default: 0,
    },
    /* categoria: {
    type:
    mongoose.Schema.Types.ObjectId
    ,
    ref: "Category",
    required: true,
    }, */
    existencia: {
        type: Number,
        required: true,
        min: 0,
        max: 255,
    },
    rating: {
        type: Number,
        default: 0,
    },
    numRevisiones: {
        type: Number,
        default: 0,
    },
    estaOfertado: {
        type: Boolean,
        default: false,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
},
{Collection:"producto"}
)

module.exports = model("Producto", productoSchema)