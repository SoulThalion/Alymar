const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Client = sequelize.define(
	'client',
	{
		name: {
			type: DataTypes.STRING(),
			allowNull: false
		},

        surName: {
			type: DataTypes.STRING(),
			allowNull: false
		},

		address: {
			type: DataTypes.STRING(),
			allowNull: false
		},

		cif: {
			type: DataTypes.STRING(20),
			allowNull: false
		},

        telephone: {
			type: DataTypes.CHAR(9),
			allowNull: false
		},
		
		email: {
            type: DataTypes.STRING(40),
            allowNull: false,
			validate: {
				isEmail: true
			}
        },
    },
	{	
		timestamps: false,
		indexes: [
			{
				unique: true,
				allowNull: false,
				fields: ['cif']
			},

			{
				unique: true,
				allowNull: false,
				fields: ['email']
			},

            {
				unique: true,
				allowNull: false,
				fields: ['telephone']
			}
		]
	},
)

module.exports = Client