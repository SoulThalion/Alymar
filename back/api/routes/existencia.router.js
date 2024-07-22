const router = require('express').Router()

const { getAllExistencias, getOneExistencia, createExistencia, updateExistencia, deleteExistencia} = require('../controllers/existencia.controller')
const { checkAuth } = require('../middleware/auth');

router.get('/:id', checkAuth, getOneExistencia)
router.get('/', checkAuth, getAllExistencias)

router.post('/', checkAuth, createExistencia)

router.patch('/:id', checkAuth, updateExistencia)

router.delete('/:id', checkAuth, deleteExistencia)

module.exports = router