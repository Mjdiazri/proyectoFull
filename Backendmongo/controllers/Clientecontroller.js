const Cliente = require('../models/Cliente');

//Funcion agregar clientes

exports.agregarClientes = async(req, res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar los cliente');
    }
}

//Funcion buscar clientes

exports.mostrarClientes = async(req, res) =>{
    try {
       const clientes = await Cliente.find();
       res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al mostrar los clientes")
    }
}

//Funcion Buscar un cliente

exports.buscarCliente = async (req,res) =>{
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:"El cliente no se encuentra por ID"});
        } else {
            res.json(clientes)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente');
    }
}


//Funcion modificar cliente con metodo put 
exports.modificarClientes = async (req,res) =>{
    try {
        console.log('clientes');
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        
        if (!clientes){
            res.status(404).send('Cliente no encontrado');
        } else {
            res.json(clientes);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al modificar los clientes')
    }
}

//Funcion editar utilizando patch

exports.editarClientes = async (req, res) =>{
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!clientes){
            return res.status(404).send('Cliente no encontrado')
        }
        res.json(clientes);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente'); 
    }
}

//Funcion eliminar clientes
exports.eliminarClientes = async (req, res) =>{
    try {
        let clientes = await Cliente.findById({_id: req.params.id});
        if (!clientes){
            res.status(404).send('El cliente no existe');
            return
        }

        await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg: "El cliente fue eliminado con exito"});
            return
        

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un cliente');
    }
}