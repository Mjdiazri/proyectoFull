const Producto = require('../models/Producto');

//Funcion agregar productos

exports.agregarProductos = async (req, res) => {
    try {
        let productos;
        productos = new Producto (req.body)
        await productos.save();
        res.json(productos); 

    } catch (error) {
        res.status(500).send('Hubo un error al agregar un producto');
        console.log(error.message);
    }
}

//Funcion buscar productos

exports.buscarProductos = async(req,res)=>{
    try {
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar los productos')
    }
}


//Funcion buscar producto por ID

exports.buscarProductoId = async(req,res)=>{
    try {
        
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg:'Hubo un error al buscar el producto por ID'});
        } else {
            res.json(productos)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar el producto');
    }

}

//Funcion Modificar cliente

exports.modificarProducto = async(req, res) => {
    try {        
        console.log('productos');
        const productos = await Producto.findOneAndUpdate({_id: req.params.id}, req.body,{new:true});

        if(!productos){
            res.status(404).send('Producto no encontrado');
        } else {
            res.json(productos)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al modificar el producto')
    }
}

//Funcion Eliminar Producto
exports.eliminarProducto = async(req,res) => {
    try {
        
        let productos = await Producto.findById({_id: req.params.id});
        if(!productos){
            res.status(404).send('El cliente no existe');
            return
        }

        await Producto.findOneAndDelete({_id: req.params.id});
            res.json('El cliente fue eliminado con exito');
            return

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el producto')
    }
}
