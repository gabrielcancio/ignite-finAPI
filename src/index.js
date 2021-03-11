const express = require('express');

const app = express();

app.use(express.json());


app.get('/', (request, response) => {
  const data = {
    message: 'Welcome to FinAPI',
    plataform: 'FinAPI'
  }

  return response.json(data);
});

app.listen(3333, () => console.log('Server is Running!!'));