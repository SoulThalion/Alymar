const router = require('express').Router()

const { getAllPedidosExistencias, getOnePedidoExistencia, createPedidoExistencia, updatePedidoExistencia, deletePedidoExistencia} = require('../controllers/pedidoExistencia.controller')
const { checkAuth } = require('../middleware/auth');

router.get('/:id', checkAuth, getOnePedidoExistencia)
router.get('/', checkAuth, getAllPedidosExistencias)

router.post('/', checkAuth, createPedidoExistencia)

router.patch('/:id', checkAuth, updatePedidoExistencia)

router.delete('/:id', checkAuth, deletePedidoExistencia)

module.exports = router