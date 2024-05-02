const express=require('express');
const { tipoUsuario} = require('../controllers/controllerAuthentication');
const router=express.Router();

router.get('/:id',tipoUsuario);

module.exports=router;