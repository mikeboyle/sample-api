const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).json({ data: 'App is running! ' });
});

app.get('/double/:number', (request, response) => {
  response.status(500).json({ error: 'Route not implemented' });
});

module.exports = app;
