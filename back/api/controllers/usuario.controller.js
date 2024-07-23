const User = require('../models/usuario.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


const getAllUsers = async (req, res) => {
	if (res.locals.user.role === "admin") {
		try {
			const users = await User.findAll({
				where: req.query,
				attributes: {
					exclude: ['contrasena']
				}
			})
			return res.status(200).json(users)
		} catch (error) {
			console.log(error)
		}
	}
}

const getOneUser = async (req, res) => {

	if (res.locals.user.role === "admin") {
		try {
			const user = await User.findByPk(req.params.id, {
				attributes: {
					exclude: ['contrasena']
				}
			})

			if (!user) {
				return res.status(404).send('User not found')
			}

			return res.status(200).json(user)

		} catch (error) {
			console.log(error)
		}
	}
}

const createUser = async (req, res) => {
	try {
		const { nombre, contrasena, tienda, role } = req.body;
		const checkUser = await User.findOne({ where: { nombre: nombre } });
	
		if (checkUser)
		  return res.status(403).json({
			message: '>> Nombre exists!',
		  });
	
		const hashedPassword = bcrypt.hashSync(contrasena, 10);
	
		const newUser = await User.create({
		  nombre,
		  contrasena: hashedPassword,
		  tienda,
		  role
		});
	
		const token = jwt.sign({ nombre: newUser.nombre }, process.env.JWT_SECRET, {
		  expiresIn: '1d',
		});
	
		delete newUser.contrasena;
	
		return res.status(200).json({ message: '>> Signed up!!', token });
	  } catch (error) {
		console.log(error);
		return res.status(404).send('>> Oops something went wrong!');
	  }
}


const updateUser = async (req, res) => {
	try {
		if (req.body.contrasena) {
			const saltRounds = bcrypt.genSaltSync(parseInt(10))
			const hashedPassword = bcrypt.hashSync(req.body.contrasena, saltRounds)
			req.body.contrasena = hashedPassword
		}


		const [user] = await User.update(req.body, {
			where: {
				id: req.params.id
			}
		})

		if (!user) {
			return res.status(404).send('User not found')
		}
		return res.status(200).json({ message: 'User updated' })

	} catch (error) {
		console.log(error)
	}
}
const deleteUser = async (req, res) => {
	try {
		const user = await User.destroy({
			where: {
				id: req.params.id
			}
		})
		if (!user) {
			return res.status(404).send('User not found')
		}

		return res.status(200).json({ message: 'User deleted' })

	} catch (error) {
		console.log(error)
	}
}

const getUserByToken = async (req, res) => {
	console.log("hola")
	try {
		const userJSON = res.locals.user.toJSON()
		delete userJSON.contrasena

		return res.status(200).json({ user: userJSON });
	} catch (error) {
		return res.status(500).json({
			message: 'Error searching user',
			description: error.message,
		});
	}
};

module.exports = {
	getAllUsers,
	getOneUser,
	createUser,
	updateUser,
	deleteUser,
	getUserByToken
}