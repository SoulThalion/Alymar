const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Ship = sequelize.define(
	'ship',
	{
		brand: {
			type: DataTypes.STRING(),
			allowNull: false
		  },
		  model: {
			type: DataTypes.STRING(),
			allowNull: false
		  },
		  registration_number: {
			type: DataTypes.STRING(),
			allowNull: false
		  }
    },
	{	
		timestamps: false,
		indexes: [
			{
				unique: true,
				allowNull: false,
				fields: ['registration_number']
			}
		]
	},
)

module.exports = Ship