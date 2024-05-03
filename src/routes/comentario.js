const express=require('express');
const { ingresar, mostrar, actualizar, eliminar } = require('../controllers/controllerComentario');
const router=express.Router();


router.get('/:idnoticia',mostrar);

router.post('/',ingresar);

router.put('/:idnoticia',actualizar);

router.delete('/:idnoticia',eliminar);

module.exports=router;
