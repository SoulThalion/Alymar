const Order = require('../models/order.model')
const User = require('../models/user.model')
const { Sequelize } = require('sequelize')

const bcrypt = require('bcrypt')


async function getAllOrders(req, res) {
    const { role, id } = res.locals.user;

    try {
        let orders;

        if (role === 'admin' || role === 'manager') {
            orders = await Order.findAll({
                order: [
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 1, 4) AS UNSIGNED)`), 'ASC'], // Ordenar por año
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 6, 2) AS UNSIGNED)`), 'ASC'], // Ordenar por mes
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 9, 2) AS UNSIGNED)`), 'ASC'], // Ordenar por día
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 12, 2) AS UNSIGNED)`), 'ASC'], // Ordenar por hora
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 15, 2) AS UNSIGNED)`), 'ASC'], // Ordenar por minuto
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 18, 2) AS UNSIGNED)`), 'ASC'] // Ordenar por segundo
                ]
            });
        } else if (role === 'mechanic') {
            orders = await Order.findAll({
                where: { userId: id },
                order: [
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 1, 4) AS UNSIGNED)`), 'ASC'], // Ordenar por año
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 6, 2) AS UNSIGNED)`), 'ASC'], // Ordenar por mes
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 9, 2) AS UNSIGNED)`), 'ASC'], // Ordenar por día
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 12, 2) AS UNSIGNED)`), 'ASC'], // Ordenar por hora
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 15, 2) AS UNSIGNED)`), 'ASC'], // Ordenar por minuto
                    [Sequelize.literal(`CAST(SUBSTRING(appointment, 18, 2) AS UNSIGNED)`), 'ASC'] // Ordenar por segundo
                ]
            });
        }

        if (orders && orders.length > 0) {
            return res.status(200).json(orders);
        } else {
            return res.status(404).send('No orders found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getOneOrder(req, res) {
	try {
		const order = await Order.findByPk(req.params.id)
		if (order) {
			return res.status(200).json(order)
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createOrder(req, res) {
	try {
		const order = await Order.create(req.body)
		return res.status(200).json({ message: 'Order created', order: order })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateOrder(req, res) {

	console.log(req.body)
	try {
		const [orderExist, order] = await Order.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (orderExist !== 0) {
			return res.status(200).json({ message: 'Order updated', order: order })
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteOrder(req, res) {
	try {
		const order = await Order.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (order) {
			return res.status(200).json('Order deleted')
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllOrders,
	getOneOrder,
	createOrder,
	updateOrder,
	deleteOrder
}
