const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Existencia = sequelize.define(
	'existencia',
	{
		cantidad: {
			type: DataTypes.INTEGER(),
			allowNull: false,
            defaultValue: 0
		  },
          pedidos: {
			type: DataTypes.INTEGER(),
			allowNull: false,
            defaultValue: 0
		  },
          tienda: {
            type: DataTypes.ENUM('elda', 'petrer'),
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
	{	
		timestamps: false,
	},
)

module.exports = Existencia