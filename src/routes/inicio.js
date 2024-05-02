const express = require('express');
const { inicio } = require('../controllers/controllerInicio');
const router = express.Router();

router.all('/',inicio);

module.exports=router;