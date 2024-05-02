const express = require('express');
const {ingresarNoticia, todaslasnoticias, actualizarNoticia, eliminarNoticia } = require('../controllers/controllerNoticia');

const router = express.Router();

router.get('/',todaslasnoticias);

router.post('/editarNoticia/:id', ingresarNoticia);

router.put('/editarNoticia/:id',actualizarNoticia);

router.delete('/editarNoticia/:id',eliminarNoticia);

module.exports=router;
