const Pedido = require('../models/pedido.model')

async function getAllPedidos(req, res) {
	try {
		const pedido = await Pedido.findAll()
		if (pedido) {
			return res.status(200).json(pedido)
		} else {
			return res.status(404).send('No pedido found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOnePedido(req, res) {
	try {
		const pedido = await Pedido.findByPk(req.params.id)
		if (pedido) {
			return res.status(200).json(pedido)
		} else {
			return res.status(404).send('Pedido not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createPedido(req, res) {
	try {
		const pedido = await Pedido.create(req.body)
		return res.status(200).json({ message: 'Pedido created', pedido: pedido })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updatePedido(req, res) {
	
	try {
		const [pedidoExist, pedido] = await Pedido.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (pedidoExist !== 0) {
			return res.status(200).json({ message: 'Pedido updated', pedido: pedido })
		} else {
			return res.status(404).send('Pedido not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deletePedido(req, res) {
	try {
		const pedido = await Pedido.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (pedido) {
			return res.status(200).json('Pedido deleted')
		} else {
			return res.status(404).send('Pedido not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllPedidos,
	getOnePedido,
	createPedido,
	updatePedido,
	deletePedido
}