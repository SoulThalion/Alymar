const jwt = require('jsonwebtoken');
const User = require('../models/usuario.model');

const checkAuth = (req, res, next) => {
  jwt.verify(
    req.headers.token,
    process.env.JWT_SECRET,
    async (error, result) => {
      if (error) {
        return res.status(403).send('>> Login to continue!');
      }
      const user = await User.findOne({ where: { nombre: result.nombre } });
      if (!user) {
        return res.status(403).send('>> Token not valid!');
      }
      res.locals.user = user;
      next();
    }
  );
};

const isAdmin = (req, res, next) => {
  if (res.locals.user.role !== 'admin') {
    return res.status(403).send('>> Unauthorized.');
  }
  next();
};

/*const isManager = (req, res, next) => {
  if (res.locals.user.role !== 'manager' && res.locals.user.role !== 'admin') {
    return res.status(403).send('>> Unauthorized.');
  }
  next();
};*/

module.exports = { checkAuth, isAdmin, /*isManager*/ };