const express = require('express');
const router = express.Router();

const registraUsuarioRotas = require('./usuarios/controllers/usuarios-controller');
router.use( registraUsuarioRotas());

module.exports = router;