const express = require('express');
// const {teams} = require('../app');
// console.log("🚀 ~ file: teams.router.js:3 ~ teams", teams)

const router = express.Router();
let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

router.get('/teams', (req, res) => res.json(teams));

router.get('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;