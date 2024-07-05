const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const Pedido = require('./pedido.model')
const Existencia = require('./existencia.model')

const PedidoExistencia = sequelize.define(
    'pedidoExistencia',
    {
        id_pedido: {
            type: DataTypes.INTEGER,
            references: {
              model: Pedido,
              key: 'id'
            }
          },
          id_producto: {
            type: DataTypes.INTEGER,
            references: {
              model: Existencia,
              key: 'id_producto'
            }
          },
          cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
       
    },
	{	
		timestamps: false,
	},
)

module.exports = PedidoExistencia