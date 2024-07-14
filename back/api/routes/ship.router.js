/*

const router = require('express').Router()

const { getAllShips, getOneShip, createShip, updateShip, deleteShip, getShipsByClientId} = require('../controllers/ship.controller')
const { checkAuth, isManager } = require('../middleware/auth');

router.get('/own/:id', checkAuth, getShipsByClientId)
router.get('/:id', checkAuth, getOneShip)
router.get('/', checkAuth, getAllShips)

router.post('/', checkAuth, isManager, createShip)

router.patch('/:id', checkAuth, isManager, updateShip)

router.delete('/:id', checkAuth, isManager, deleteShip)

module.exports = router

*/