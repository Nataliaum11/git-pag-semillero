const express = require('express');
const { ingresarNoticia, todaslasnoticias, actualizarNoticia, eliminarNoticia, mostrarNoticia } = require('../controllers/controllerNoticia');
const router = express.Router();

router.get('/', todaslasnoticias);

router.get('/:idNoticia', mostrarNoticia);

router.post('/crearNoticia', ingresarNoticia);

router.put('/editarNoticia/:idNoticia', actualizarNoticia);

router.delete('/editarNoticia/:idNoticia', eliminarNoticia);

module.exports = router;







