'use strict';
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const rp = require('request-promise');
const bodyParser = require('body-parser')
const api = require('./routes/api');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('src/dist/'));
app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || 3200;
app.listen(port, function() {
  console.log(`Application listening on port ${port}`);
});

module.exports = app;
