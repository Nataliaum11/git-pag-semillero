const express=require('express');
const { ingresar, mostrar, actualizar, eliminar } = require('../controllers/controllerComentario');
const router=express.Router();


router.get('/:id',mostrar);

router.post('/',ingresar);

router.put('/:id',actualizar);

router.delete('/:id',eliminar);

module.exports=router;
