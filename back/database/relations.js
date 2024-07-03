const Usuario = require('../api/models/usuario.model')
const Categoria = require('../api/models/categoria.model')
const Producto = require('../api/models/producto.model')
const Pedido = require('../api/models/pedido.model')
const Existencia = require('../api/models/existencia.model')


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
  

		console.log('Relations added to all models');
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels