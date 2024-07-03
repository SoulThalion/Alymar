/*

const Client = require('../models/client.model')

const bcrypt = require('bcrypt')


async function getAllClients(req, res) {
	try {
		const clients = await Client.findAll()
		if (clients) {
			return res.status(200).json(clients)
		} else {
			return res.status(404).send('No clients found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneClient(req, res) {
	try {
		const client = await Client.findByPk(req.params.id)
		if (client) {
			return res.status(200).json(client)
		} else {
			return res.status(404).send('Client not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createClient(req, res) {
	try {
		const client = await Client.create(req.body)
		return res.status(200).json({ message: 'Client created', client: client })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateClient(req, res) {
	console.log(req.body)
	try {
		const [clientExist, client] = await Client.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (clientExist !== 0) {
			return res.status(200).json({ message: 'Client updated', client: client })
		} else {
			return res.status(404).send('Client not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteClient(req, res) {
	try {
		const client = await Client.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (client) {
			return res.status(200).json('Client deleted')
		} else {
			return res.status(404).send('Client not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllClients,
	getOneClient,
	createClient,
	updateClient,
	deleteClient
}

*/