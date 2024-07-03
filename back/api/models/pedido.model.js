const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Pedido = sequelize.define(
    'pedido',
    {
        fechahora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ticket: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tienda: {
            type: DataTypes.ENUM('petrer', 'elda'),
            allowNull: false,
        },
        estado: {
            type: DataTypes.ENUM('pendiente', 'finalizado', 'preparacion', 'caducado'),
            allowNull: false,
        },
        papelera: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
      
      
       
    },
	{	
		timestamps: false,
		indexes: [
			{
				unique: true,
				allowNull: false,
				fields: ['telefono']
			},

        ]
	},
)

module.exports = Pedido