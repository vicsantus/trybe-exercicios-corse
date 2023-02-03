const express = require('express');

const app = express();

const peopleRoutes = require('./routes/peopleRoutes');

app.use(express.json());

app.use('/people', peopleRoutes);

module.exports = app;
