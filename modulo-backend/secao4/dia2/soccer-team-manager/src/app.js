const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
app.get('/robot', (req, res) => res.status(200).json({ message: 'As maquinas estão dominando!' }));

module.exports = app;
