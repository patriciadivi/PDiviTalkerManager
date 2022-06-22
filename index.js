const express = require('express');
const bodyParser = require('body-parser');
const read = require('./helpers/read');
// const randomToken = require('./helpers/crypto');
const validateUser = require('./ middlewares/validateUser.js');
// const validateInformacion = require('./ middlewares/validateUserInformacion');
// const validateAuthorization = require('./ middlewares/validateAuthorization');
const tokenGenerator = require('./helpers/tokenGenerator');

let newToken = '';

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
  console.log(req.body);
  const { id: talkerId } = req.params;
  const talkers = await read();
  const getId = talkers.find((talkerElement) => talkerElement.id === +talkerId);
  
  if (!getId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).json(getId);
});

// 3 Requisito - Crie o endpoint POST /login
// 4 Requisito - Adicione as validações para o endpoint /login | apartir do arquivo validateUser.js
app.post('/login', validateUser, (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }
  newToken = tokenGenerator();
  
  res.status(200).json({ token: newToken });
});

// 5 Requisito - Crie o endpoint POST /talker
app.post('/talker', (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  // console.log(name, age, watchedAt, rate);

  newToken = tokenGenerator();
  const dataBody = {
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
    newToken,
  };
  if (!name || !age || !watchedAt || !rate) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }
  res.status(200).json(dataBody);
});

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
