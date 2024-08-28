const express = require('express');
const router = express.Router();
const cliController = require ('../controllers/Clientecontroller');

//Rutas del crud

router.post('/', cliController.agregarClientes);
router.get('/', cliController.mostrarClientes);
router.get('/:id', cliController.buscarCliente);
router.put('/:id', cliController.modificarClientes);
router.patch('/:id', cliController.editarClientes);
router.delete('/:id',cliController.eliminarClientes);

module.exports = router;

