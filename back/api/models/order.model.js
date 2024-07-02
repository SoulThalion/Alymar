const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Order = sequelize.define(
	'order',
	{
		appointment: {
			type: DataTypes.DATE,
			defaultValue: null
		  },
		  work: {
			type: DataTypes.STRING,
			allowNull: false
		  },
		  observations: {
			type: DataTypes.STRING
		  },
		  hours: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		  },
		  finish: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		  },
		  play: {
			type: DataTypes.DATE
		  },
		  pause: {
			type: DataTypes.DATE
		  }
    },
	{	
		timestamps: false,
	},
)

module.exports = Order