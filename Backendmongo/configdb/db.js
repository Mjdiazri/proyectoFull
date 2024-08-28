const mongoose = require('mongoose');
require('dotenv').config();

//funcion conexion base de datos

const conectarbd = () =>{
    mongoose 
    .connect(process.env.mongo_url)
    .then(() => console.log('Estamos conectados desde mongo DB'))
    .catch((err)=> console.error(err));
}

module.exports = conectarbd;