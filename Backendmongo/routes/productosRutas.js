const express = require ('express');
const router = express.Router();
const productoController = require ('../controllers/Productocontroller')

//Rutas CRUD
router.post('/',productoController.agregarProductos);
router.get('/',productoController.buscarProductos);
router.get('/:id',productoController.buscarProductoId);
router.patch('/:id',productoController.modificarProducto);
router.delete('/:id',productoController.eliminarProducto);

module.exports = router;
