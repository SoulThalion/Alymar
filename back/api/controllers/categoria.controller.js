const Categoria = require('../models/categoria.model')

const bcrypt = require('bcrypt')


async function getAllCategorias(req, res) {
	try {
		const categoria = await Categoria.findAll()
		if (categoria) {
			return res.status(200).json(categoria)
		} else {
			return res.status(404).send('No categoria found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneCategoria(req, res) {
	try {
		const categoria = await Categoria.findByPk(req.params.id)
		if (categoria) {
			return res.status(200).json(categoria)
		} else {
			return res.status(404).send('Categoria not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createCategoria(req, res) {
	try {
		const categoria = await Categoria.create(req.body)
		return res.status(200).json({ message: 'Categoria created', categoria: categoria })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateCategoria(req, res) {
	console.log(req.body)
	try {
		const [categoriaExist, categoria] = await Categoria.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (categoriaExist !== 0) {
			return res.status(200).json({ message: 'Categoria updated', categoria: categoria })
		} else {
			return res.status(404).send('Categoria not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteCategoria(req, res) {
	try {
		const categoria = await Categoria.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (categoria) {
			return res.status(200).json('Categoria deleted')
		} else {
			return res.status(404).send('Categoria not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllCategorias,
	getOneCategoria,
	createCategoria,
	updateCategoria,
	deleteCategoria
}