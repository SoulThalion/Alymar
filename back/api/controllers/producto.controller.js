const Producto = require('../models/producto.model')

async function getAllProductos(req, res) {
	try {
		const producto = await Producto.findAll()
		if (producto) {
			return res.status(200).json(producto)
		} else {
			return res.status(404).send('No producto found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneProducto(req, res) {
	try {
		const producto = await Producto.findByPk(req.params.id)
		if (producto) {
			return res.status(200).json(producto)
		} else {
			return res.status(404).send('Producto not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createProducto(req, res) {
	try {
		const producto = await Producto.create(req.body)
		return res.status(200).json({ message: 'Producto created', producto: producto })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateProducto(req, res) {
	console.log(req.body)
	try {
		const [productoExist, producto] = await Producto.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (productoExist !== 0) {
			return res.status(200).json({ message: 'Producto updated', producto: producto })
		} else {
			return res.status(404).send('Producto not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteProducto(req, res) {
	try {
		const producto = await Producto.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (producto) {
			return res.status(200).json('Producto deleted')
		} else {
			return res.status(404).send('Producto not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllProductos,
	getOneProducto,
	createProducto,
	updateProducto,
	deleteProducto
}