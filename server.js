'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const logger = require('./middleware/logger');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');

const app = express();

app.use(cors());
// app.use(logger);

app.get('/', logger, (req, res, next) => {
  res.status(200).send('Howdy Yall!!!!!');
});

app.get('/bad',  (req, res, next) => {
  next('OH NO ERROR');
});

app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
}

module.exports = {start, app};
