const express = require('express');
const bodyParser = require('body-parser');
const read = require('./helpers/read');

const app = express();
app.use(bodyParser.json());

// 1 Requisito - Crie o endpoint GET /talker:
 
app.get('/talker', async (_req, res) => {
  const talkers = await read();
  const getAll = talkers.map((talkerElement) => talkerElement);

  if (!getAll) return res.status(404).status(200).send('[]');

  return res.status(200).json(getAll);
});

// 2 Requisito - Crie o endpoint GET /talker/:id

app.get('/talker/:id', async (req, res) => {
  const { id: talkerId } = req.params;
  const talkers = await read();
  const getId = talkers.find((talkerElement) => talkerElement.id === +talkerId);
  
  if (!getId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).json(getId);
});

// 3 Requisito - Crie o endpoint POST /login
// 4 Requisito - Adicione as validações para o endpoint /login
// 5 Requisito - Crie o endpoint POST /talker
// 6 Requisito - Crie o endpoint PUT /talker/:id
// 7 Requisito - Crie o endpoint DELETE /talker/:id
// 8 Requisito - Crie o endpoint GET /talker/search?q=searchTerm

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
