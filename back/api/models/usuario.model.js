const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Usuario = sequelize.define(
	'user',
	{
        nombre: {
			type: DataTypes.STRING(),
			allowNull: false
		},
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        tienda: {
			type: DataTypes.STRING(),
			allowNull: false
		},

		role: {
            type: DataTypes.ENUM('vendedor', 'admin', 'cocina'),
            allowNull: false,
			defaultValue: 'vendedor'
        },

		
    },
	{	
		timestamps: false,
		indexes: [
			{
				unique: true,
				allowNull: false,
				fields: ['nombre']
			},

        ]
	},
)

module.exports = Usuario