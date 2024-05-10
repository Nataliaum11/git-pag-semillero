const express = require('express');
const { login, crearUsuario, mostrarUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/controllerAuthentication');
const router = express.Router();

// Ruta para iniciar sesión
router.get('/administrador/:idAdministrador', login);
// Rutas para el CRUD de usuarios
router.post('/usuario', crearUsuario);
router.get('/usuario', mostrarUsuario);
router.put('/usuario', actualizarUsuario);
router.delete('/usuario', eliminarUsuario);

module.exports = router;
