const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Categoria = sequelize.define(
	'categoria',
	{
		nombre: {
			type: DataTypes.STRING(),
			allowNull: false
		  },
		  imagen: {
			type: DataTypes.STRING(),
			allowNull: true
		  },
          tienda: {
            type: DataTypes.ENUM('elda', 'petrer'),
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
			}
		]
	},
)

module.exports = Categoria