const express=require('express');
const { tipoUsuario} = require('../controllers/controllerAuthentication');
const router=express.Router();

router.post('/',tipoUsuario);

module.exports=router;