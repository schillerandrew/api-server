'use strict';

const express = require('express');
const error404Handler = require('./error-handlers/404.js');
const error500Handler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

// const animalRouter = require('./routes/animal.js');
// const personRouter = require('./routes/person.js');

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(logger);

// app.use(animalRouter);
// app.use(personRouter);

app.use(error404Handler);
app.use(error500Handler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};