const express = require('express');
const server = express();

server.use('/home', (req, res, next) => {
  console.log('Time:', Date.now());
  next();
}).use((req, res, next) => {
  console.log(req.method);
  next();
});

server.get('/home', (req, res) => {
  res.send(req.originalUrl);
});

server.get('/about/:id', (req, res) => {
  res.send(req.params.id);
});

server.get('/home/:id/characters/:another', (req, res) => {
  res.send(req.params.id + ' ' + req.params.another);
});

server.listen(5554);