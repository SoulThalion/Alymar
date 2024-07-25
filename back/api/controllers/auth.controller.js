const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/usuario.model');

const signUp = async (req, res) => {
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
};


const logIn = async (req, res) => {
  try {
    const { nombre, contrasena } = req.body;
    console.log('Datos recibidos:', { nombre, contrasena });
    const user = await User.findOne({ where: { nombre } });

    if (user) {
      console.log('Usuario encontrado:', user);
      bcrypt.compare(contrasena, user.contrasena, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { nombre: user.nombre },
            process.env.JWT_SECRET,
            { expiresIn: '1y' }
          );

          const userJSON = user.toJSON()
          delete userJSON.contrasena

          return res.status(200).json({ token, user: userJSON });
        }
        return res
          .status(404)
          .send('>> Oops something went wrong, user or password incorrect.' + err);
      });
    } else {
      return res
        .status(404)
        .send('>> Oops something went wrong, user or password incorrect.');
    }
  } catch (error) {
    return res
      .status(402)
      .send('>> Oops something went wrong, user or password incorrect.');
  }
};

module.exports = { signUp, logIn };