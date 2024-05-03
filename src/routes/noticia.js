const express = require('express');
const {ingresarNoticia, todaslasnoticias, actualizarNoticia, eliminarNoticia, mostrarNoticia } = require('../controllers/controllerNoticia');

const router = express.Router();

router.get('/',todaslasnoticias);

router.get('/idNoticia',mostrarNoticia);

router.post('/crearNoticia', ingresarNoticia);

router.put('/editarNoticia/:id',actualizarNoticia);

router.delete('/editarNoticia/:id',eliminarNoticia);

module.exports=router;
