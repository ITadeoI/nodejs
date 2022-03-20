const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send('Hellow Alices');
});

server.listen(4443);