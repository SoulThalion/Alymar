const router = require('express').Router()

const { getAllCategorias, getOneCategoria, createCategoria, updateCategoria, deleteCategoria} = require('../controllers/categoria.controller')
const { checkAuth } = require('../middleware/auth');

router.get('/:id', checkAuth, getOneCategoria)
router.get('/', checkAuth, getAllCategorias)

router.post('/', checkAuth, createCategoria)

router.patch('/:id', checkAuth, updateCategoria)

router.delete('/:id', checkAuth, deleteCategoria)

module.exports = router