const usuarios = require('../models/usuario');

exports.registrarUsuario = (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  const existe = usuarios.find(u => u.email === email);
  if (existe) {
    return res.status(400).json({ mensaje: 'El usuario ya existe' });
  }

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email,
    password
  };

  usuarios.push(nuevoUsuario);

  res.status(201).json({
    mensaje: 'Usuario registrado',
    usuario: nuevoUsuario
  });
};

exports.listarUsuarios = (req, res) => {
  res.json(usuarios);
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const usuario = usuarios.find(
    (u) => u.email === email && u.password === password
  );

  if (!usuario) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }

  res.json({
    mensaje: 'Login exitoso',
    usuario
  });
};

exports.buscarUsuario = (req, res) => {
  const id = parseInt(req.params.id);

  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  res.json(usuario);
};