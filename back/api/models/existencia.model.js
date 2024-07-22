const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Existencia = sequelize.define(
	'existencia',
	{
		cantidad: {
			type: DataTypes.INTEGER(),
		  },
        defecto:{
            type: DataTypes.INTEGER(),
            defaultValue: 0,
        },
          pedidos: {
			type: DataTypes.INTEGER(),
			allowNull: false,
            defaultValue: 0
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