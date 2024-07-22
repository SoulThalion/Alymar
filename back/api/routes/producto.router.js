const router = require('express').Router()

const { getAllProductos, getOneProducto, createProducto, updateProducto, deleteProducto} = require('../controllers/producto.controller')
const { checkAuth } = require('../middleware/auth');

router.get('/:id', checkAuth, getOneProducto)
router.get('/', checkAuth, getAllProductos)

router.post('/', checkAuth, createProducto)

router.patch('/:id', checkAuth, updateProducto)

router.delete('/:id', checkAuth, deleteProducto)

module.exports = router