const express = require('express');
const { login} = require('../controllers/controllerAuthentication');
const router = express.Router();

// Ruta para iniciar sesión
router.get('/:idAdministrador', login);


module.exports = router;
