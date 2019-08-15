// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const superheroRoutes = require('./routes/superheroes');

// Registering our pageRoutes
// app.use('/', pageRoutes);
app.use('/superheroes', superheroRoutes);

// Exporting the changes
module.exports = app;