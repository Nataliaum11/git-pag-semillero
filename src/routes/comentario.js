const express=require('express');
const { ingresar, mostrar, actualizar, eliminar } = require('../controllers/controllerComentario');
const router=express.Router();

router.get('/:idNoticia',mostrar);

router.post('/:idNoticia',ingresar);

router.put('/:idNoticia/:idComentario',actualizar);

router.delete('/:idNoticia/:idComentario',eliminar);

module.exports=router;
