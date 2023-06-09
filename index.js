const express = require('express');
const bodyParser = require('body-parser');
const { read, tokenWrite, write, tokenGenerator } = require('./helpers/index');
const validateUser = require('./ middlewares/validateUser');
const validateUserDados = require('./ middlewares/validateUserInformacion/validateUserDados');
const validateUserTalk = require('./ middlewares/validateUserInformacion/validateUserTalk');
const validateUserTalkAll = require('./ middlewares/validateUserInformacion/validateUserTalkAll');
const validateAuthorization = require('./ middlewares/validateAuthorization');

const app = express();
app.use(bodyParser.json());

// 1 Requisito - Crie o endpoint GET /talker:
app.get('/talker', async (_req, res) => {
  const talkers = await read();
  const getAll = talkers.map((talkerElement) => talkerElement);

  if (!getAll) return res.status(404).status(200).send('[]');

  return res.status(200).json(getAll);
});

// 8 Requisito - Crie o endpoint GET /talker/search?q=searchTerm
app.get('/talker/search', validateAuthorization, async (req, res) => {
  const { q } = req.query;
  console.log(q);
  const talkers = await read();

  if (q == null) return res.status(200).json(talkers);

  const results = talkers
    .filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()));
    
  return res.status(200).json(results);
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
// 4 Requisito - Adicione as validações para o endpoint /login | apartir do arquivo validateUser.js
app.post('/login', validateUser, async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }
  const newToken = tokenGenerator();
  const tokenNow = newToken;
  await tokenWrite(tokenNow);
  
  res.status(200).json({ token: tokenNow });
});

// 5 Requisito - Crie o endpoint POST /talker
app.post('/talker', validateAuthorization, validateUserDados, 
  validateUserTalk, validateUserTalkAll, async (req, res) => {
  const { name, age } = req.body;
  const { talk } = req.body;
  const talkers = await read();
  const generatorId = talkers.length + 1;

  const dataBody = { id: generatorId, name, age, talk };
  
  talkers.push(dataBody);
  await write(talkers);

  res.status(201).json(dataBody);
});

// 6 Requisito - Crie o endpoint PUT /talker/:id
app.put('/talker/:id', validateAuthorization, validateUserDados, 
validateUserTalk, validateUserTalkAll, async (req, res) => {
  const { id: talkerId } = req.params;
  // console.log(talkerId);
  const talkerRead = await read();
  const { name, age } = req.body;
  const { talk } = req.body;

  try {
   const dataBody = { id: Number(talkerId), name, age, talk };
   const talkersFilter = talkerRead
    .filter((talkerElement) => talkerElement.id !== Number(talkerId));
   const dateTotal = [...talkersFilter, dataBody];
   await write(dateTotal);
   return res.status(200).json(dataBody);
 } catch (error) {
  console.log(error.message);
  return error.message;
 }
});

// 7 Requisito - Crie o endpoint DELETE /talker/:id
app.delete('/talker/:id', validateAuthorization, async (req, res) => {
  const { id: talkerId } = req.params;
  const talkerRead = await read();

  const talkersFilter = talkerRead
    .filter((talkerElement) => talkerElement.id !== Number(talkerId));

  await write(talkersFilter);
  
  return res.status(204).json();
});

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
