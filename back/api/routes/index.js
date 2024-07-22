const router = require('express').Router()
router.use('/auth', require('./auth.router'))
router.use('/usuario', require('./usuario.router'))
router.use('/categoria', require('./categoria.router'))
router.use('/producto', require('./producto.router'))
router.use('/existencia', require('./existencia.router'))
router.use('/pedido', require('./pedido.router'))
router.use('/pedidoExistencia', require('./pedidoExistencia.router'))

module.exports = router
