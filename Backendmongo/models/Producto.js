const mongoose = require ('mongoose');

//Modelo que se va a montar en postman

const productoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
    },

    identificador: {
        type: Number,
        required: true,
        unique: true,
    },

    autor: {
        type: String,
        required: true,
    },

    editorial: {
        type: String,
        required: true,
    },

    cantidad: {
        type: Number,
        required: true,
    },  
    
    fecha_ingreso: {
        type: Date,
        default: Date.now(),        
    }
}, {versionkey: false});

module.exports = mongoose.model('Producto', productoSchema);
