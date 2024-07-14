const router = require('express').Router()

const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getUserByToken } = require('../controllers/usuario.controller')
const { checkAuth, isAdmin } = require('../middleware/auth');

router.get('/token', checkAuth, getUserByToken)
router.get('/:id', checkAuth, getOneUser)
router.get('/', checkAuth, getAllUsers)

router.post('/', checkAuth, isAdmin, createUser)

router.patch('/:id', checkAuth, isAdmin, updateUser)

router.delete('/:id', checkAuth, isAdmin, deleteUser)


module.exports = router