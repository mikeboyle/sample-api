const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).json({ data: 'App is running! ' });
});

app.get('/double/:number', (request, response) => {
  try {
    const { number } = request.params;
    const num = Number(number);
    if (Number.isNaN(num)) {
      return response.status(400).json({ error: `${number} is not a number!` });
    }

    response.status(200).json({ data: { number, result: number * 2 } });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;
