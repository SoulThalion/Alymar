

const router = require('express').Router()
router.use('/auth', require('./auth.router'))
router.use('/usuario', require('./usuario.router'))
/*
router.use('/client', require('./client.router'))
router.use('/ship', require('./ship.router'))
router.use('/order', require('./order.router'))
*/
module.exports = router
