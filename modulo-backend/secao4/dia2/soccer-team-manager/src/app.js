const express = require('express');

const app = express();

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
app.get('/teams', (req, res) => res.status(200).json({ teams }));
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    console.log(Number(id));
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});
app.get('/robot', (req, res) => res.status(200).json({ message: 'As maquinas estão dominando!' }));
app.get('/html', (req, res) => res.status(200).send('<h1>Holla mundo!</h1>'));
app.get('/redirect', (req, res) => res.status(200).redirect('https://www.betrybe.com/'));
app
.get('/render', (req, res) => res.status(200)
.send('<h1>Nesse caso se usario res.render("index.html"). Porém não tem .html nesse projeto</h1>'));
app.get('/end', (req, res) => res.status(200).end());

module.exports = app;
