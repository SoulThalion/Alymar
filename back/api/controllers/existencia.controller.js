const Existencia = require('../models/existencia.model')

async function getAllExistencias(req, res) {
	try {
		const existencia = await Existencia.findAll()
		if (existencia) {
			return res.status(200).json(existencia)
		} else {
			return res.status(404).send('No existencia found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneExistencia(req, res) {
	try {
		const existencia = await Existencia.findByPk(req.params.id)
		if (existencia) {
			return res.status(200).json(existencia)
		} else {
			return res.status(404).send('Existencia not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createExistencia(req, res) {
    try {
        let { cantidad, defecto, fecha, id_producto } = req.body;

        // Si cantidad no está definida, usar el valor de defecto
        if (cantidad === undefined) {
            cantidad = defecto !== undefined ? defecto : 0;
        }

        // Crear la nueva instancia de Existencia
        const existencia = await Existencia.create({ cantidad, defecto, fecha, id_producto });

        return res.status(200).json({ message: 'Existencia created', existencia });
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function updateExistencia(req, res) {
	console.log(req.body)
	try {
		const [existenciaExist, existencia] = await Existencia.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (existenciaExist !== 0) {
			return res.status(200).json({ message: 'Existencia updated', existencia: existencia })
		} else {
			return res.status(404).send('Existencia not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteExistencia(req, res) {
	try {
		const existencia = await Existencia.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (existencia) {
			return res.status(200).json('Existencia deleted')
		} else {
			return res.status(404).send('Existencia not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllExistencias,
	getOneExistencia,
	createExistencia,
	updateExistencia,
	deleteExistencia
}