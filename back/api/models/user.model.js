const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define(
	'user',
	{
		userName: {
			type: DataTypes.STRING(20),
			allowNull: false
		},

        name: {
			type: DataTypes.STRING(),
			allowNull: false
		},

        surName: {
			type: DataTypes.STRING(),
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

		role: {
            type: DataTypes.ENUM('mechanic', 'admin', 'manager'),
            allowNull: false,
			defaultValue: 'mechanic'
        },

		password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
	{	
		timestamps: false,
		indexes: [
			{
				unique: true,
				allowNull: false,
				fields: ['userName']
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

module.exports = User