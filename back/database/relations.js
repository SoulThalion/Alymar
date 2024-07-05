const Usuario = require('../api/models/usuario.model')
const Categoria = require('../api/models/categoria.model')
const Producto = require('../api/models/producto.model')
const Pedido = require('../api/models/pedido.model')
const Existencia = require('../api/models/existencia.model')
const PedidoExistencia = require('../api/models/pedidoExistencia.model')


function addRelationsToModels() {
	try {

		//ONE TO MANY - categoria - producto

		Categoria.hasMany(Producto, {
			onDelete: "SET NULL",
			onUpdate: "CASCADE",
		});
		Producto.belongsTo(Categoria, {
			onDelete: "CASCADE",
			onUpdate: "CASCADE",
		});

		//ONE TO MANY - producto - existencia

		Producto.hasMany(Existencia, {
			foreignKey: 'id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});
		Existencia.belongsTo(Producto, {
			foreignKey: 'id_producto',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});
		//MANY TO MANY - existencia - pedidos
	
		Pedido.hasMany(PedidoExistencia, {
			foreignKey: 'id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});
		PedidoExistencia.belongsTo(Pedido, {
			foreignKey: 'id_pedido',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});

		Existencia.hasMany(PedidoExistencia, {
			foreignKey: 'id_producto',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});
		PedidoExistencia.belongsTo(Existencia, {
			foreignKey: 'id_producto',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});


		console.log('Relations added to all models');
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels