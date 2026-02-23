const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', usuarioRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Rapitiendas funcionando' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});