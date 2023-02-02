const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');

const teamsRouter = require('./routers/teams.router')

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());
app.use(apiCredentials);
app.use(morgan('dev'));
app.use(cors());
app.use(teamsRouter);


const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório'});
  if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório'});
  next();
};

app.post('/teams', validateTeam, (req, res) => {
  console.log(teams.every((t) => t.sigla !== req.body.sigla), req.body.sigla);
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

app.use((req, res) => res.sendStatus(404));

module.exports = {app, teams};
