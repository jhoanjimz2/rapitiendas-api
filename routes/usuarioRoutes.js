const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.registrarUsuario);
router.get('/usuarios', usuarioController.listarUsuarios);
router.post('/login', usuarioController.login);
router.get('/usuarios/:id', usuarioController.buscarUsuario);

module.exports = router;