const PedidoExistencia = require('../models/pedido.model')

async function getAllPedidosExistencias(req, res) {
	try {
		const pedidoExistencia = await PedidoExistencia.findAll()
		if (pedidoExistencia) {
			return res.status(200).json(pedidoExistencia)
		} else {
			return res.status(404).send('No pedidoExistencia found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOnePedidoExistencia(req, res) {
	try {
		const pedidoExistencia = await PedidoExistencia.findByPk(req.params.id)
		if (pedidoExistencia) {
			return res.status(200).json(pedidoExistencia)
		} else {
			return res.status(404).send('PedidoExistencia not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createPedidoExistencia(req, res) {
	try {
		const pedidoExistencia = await PedidoExistencia.create(req.body)
		return res.status(200).json({ message: 'PedidoExistencia created', pedidoExistencia: pedidoExistencia })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updatePedidoExistencia(req, res) {
	
	try {
		const [pedidoExistenciaExist, pedidoExistencia] = await PedidoExistencia.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (pedidoExistenciaExist !== 0) {
			return res.status(200).json({ message: 'PedidoExistencia updated', pedidoExistencia: pedidoExistencia })
		} else {
			return res.status(404).send('Pedido not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deletePedidoExistencia(req, res) {
	try {
		const pedidoExistencia = await PedidoExistencia.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (pedido) {
			return res.status(200).json('PedidoExistencia deleted')
		} else {
			return res.status(404).send('PedidoExistencia not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllPedidosExistencias,
	getOnePedidoExistencia,
	createPedidoExistencia,
	updatePedidoExistencia,
	deletePedidoExistencia
}