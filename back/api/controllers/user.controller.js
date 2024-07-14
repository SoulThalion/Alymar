/*

const User = require('../models/user.model')

const bcrypt = require('bcrypt')


const getAllUsers = async (req, res) => {
	if (res.locals.user.role === "admin") {
		try {
			const users = await User.findAll({
				where: req.query,
				attributes: {
					exclude: ['password']
				}
			})
			return res.status(200).json(users)
		} catch (error) {
			console.log(error)
		}
	}

	else {
		try {
			const users = await User.findAll({
				where: {
					...req.query,
					role: 'mechanic'
				},
				attributes: {
					exclude: ['password', 'userName']
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
					exclude: ['password']
				}
			})

			if (!user) {
				return res.status(404).send('User not found')
			}

			return res.status(200).json(user)

		} catch (error) {
			console.log(error)
		}
	} else {
		try {
			const user = await User.findByPk(req.params.id, {
				where: {
					role: 'mechanic'
				},
				attributes: {
					exclude: ['password', 'userName']
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

const getMyUser = async (req, res) => {

	try {
		const user = await User.findByPk(res.locals.user.id, {
			attributes: {
				exclude: ['password']
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


const createUser = async (req, res) => {
	try {

		const saltRounds = bcrypt.genSaltSync(parseInt(10))
		const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
		req.body.password = hashedPassword

		const newUser = await User.create({
			userName: req.body.userName,
			name: req.body.name,
			surName: req.body.surName,
			telephone: req.body.telephone,
			email: req.body.email,
			password: req.body.password,
			role: req.body.role
		})



		res.status(200).json(newUser)
	} catch (error) {
		console.log(error)
	}
}


const updateUser = async (req, res) => {
	try {
		if (req.body.password) {
			const saltRounds = bcrypt.genSaltSync(parseInt(10))
			const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
			req.body.password = hashedPassword
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
	try {
  
	  const userJSON = res.locals.user.toJSON()
	  delete userJSON.password
  
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
	getMyUser,
	getUserByToken
}
*/