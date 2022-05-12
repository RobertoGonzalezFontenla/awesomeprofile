// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post('/card', (req, res) => {
  const responseSucess = {
    success: true,
    cardURL:
      'https://awesome-profile-cards.herokuapp.com/card/96401652349427042',
  };
  const responseError = {
    success: false,
    error: 'Faltan parámetros',
  };
  res.json(responseSucess);
});

server.get('/card/id', (req, res) => {
  res.json('La tarjeta ha sido creada');
});
