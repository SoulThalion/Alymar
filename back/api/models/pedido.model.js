const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Pedido = sequelize.define(
    'pedido',
    {
        fechahora: {
            type: DataTypes.DATE,
        },
        ticket: {
            type: DataTypes.INTEGER,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        tienda: {
            type: DataTypes.ENUM('petrer', 'elda'),
            allowNull: false,
        },
        estado: {
            type: DataTypes.ENUM('pendiente', 'finalizado', 'preparacion', 'caducado'),
            defaultValue: "pendiente"
        },
        papelera: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        observaciones:{
            type: DataTypes.STRING,
        },
        pagado:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
      
       
    },
	{	
		timestamps: false,
		indexes: [
			{
				unique: true,
				fields: ['telefono']
			},

        ]
	},
)

module.exports = Pedido