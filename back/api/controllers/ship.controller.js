const Ship = require('../models/ship.model')
const Client = require('../models/client.model')

const bcrypt = require('bcrypt')


async function getAllShips(req, res) {
	
	try {
		const ships = await Ship.findAll()
		if (ships) {
			return res.status(200).json(ships)
		} else {
			return res.status(404).send('No ships found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneShip(req, res) {
	try {
		const ship = await Ship.findByPk(req.params.id)
		if (ship) {
			return res.status(200).json(ship)
		} else {
			return res.status(404).send('Ship not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getShipsByClientId(req, res) {
    try {
        // Buscar todos los barcos asociados al cliente por su ID de cliente
        const ships = await Ship.findAll({ where: { clientId: req.params.id } });

        if (ships.length > 0) {
            // Si se encontraron barcos asociados al cliente, devolverlos
            return res.status(200).json(ships);
        } else {
            // Si no se encontraron barcos asociados al cliente, devolver un mensaje de error
            return res.status(404).send('No ships found for this client');
        }
    } catch (error) {
        // Manejar errores internos del servidor
        res.status(500).send(error.message);
    }
}


async function createShip(req, res) {
	try {
		const ship = await Ship.create(req.body)
		return res.status(200).json({ message: 'Ship created', ship: ship })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateShip(req, res) {
	try {
		const [shipExist, ship] = await Ship.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (shipExist !== 0) {
			return res.status(200).json({ message: 'Ship updated', ship: ship })
		} else {
			return res.status(404).send('Ship not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteShip(req, res) {
	try {
		const ship = await Ship.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (ship) {
			return res.status(200).json('Ship deleted')
		} else {
			return res.status(404).send('Ship not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllShips,
	getOneShip,
	createShip,
	updateShip,
	deleteShip,
	getShipsByClientId
}
