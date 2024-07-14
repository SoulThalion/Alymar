const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Producto = sequelize.define(
    'producto',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        cuantificable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tienda: {
            type: DataTypes.ENUM('petrer', 'elda'),
            allowNull: false,
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

module.exports = Producto