const router = require('express').Router()

const { getAllPedidos, getOnePedido, createPedido, updatePedido, deletePedido} = require('../controllers/pedido.controller')
const { checkAuth } = require('../middleware/auth');

router.get('/:id', checkAuth, getOnePedido)
router.get('/', checkAuth, getAllPedidos)

router.post('/', checkAuth, createPedido)

router.patch('/:id', checkAuth, updatePedido)

router.delete('/:id', checkAuth, deletePedido)

module.exports = router