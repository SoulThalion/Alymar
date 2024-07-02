const User = require('../api/models/user.model')
const Client = require('../api/models/client.model')
const Ship = require('../api/models/ship.model')
const Order = require('../api/models/order.model')

//Many to Many
function addRelationsToModels() {
	try {

		Order.belongsTo(User);
		User.hasMany(Order);

		Ship.belongsTo(Client);
		Client.hasMany(Ship);

		Order.belongsTo(Ship);
		Ship.hasOne(Order);

		Order.belongsTo(Client);
		Client.hasOne(Order);

		console.log('Relations added to all models');
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels