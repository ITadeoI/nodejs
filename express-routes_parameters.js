const express = require('express');
const server = express();

server.get('/home', (req, res) => {
  res.send('home');
});

server.get('/home/:id', (req, res) => {
  res.send(req.params.id);
});


server.get('/home/:id/characters/:another', (req, res) => {
  res.send(req.params.id + ' ' + req.params.another);
});

server.listen(5555);