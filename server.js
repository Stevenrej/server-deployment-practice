'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('Howdy Yall!!!!!');
});

function start() {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
}

module.exports = {start, app};
