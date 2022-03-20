const express = require('express');
const app = express();

const port = process.env.PORT || 8998;

app.get('/alice', (request, response) => {
  response.send(
      '<h1> Hellow Alice </h1>');
});

app.get('/', (request, response) => {
  response.send(
      '<h1> Hellow root </h1>');
});

app.get('/json', (request, response) => {
  response.json(
      {name: 'alice'}
  );
});

app.listen(port);