'use strict';
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static('src/dist/'));
/* istanbul ignore next */
app.get('/', function(request, response) {
  /* istanbul ignore next */
  response.redirect('index.html');
});
app.get('/recipes', function(request, response) {
  var file = fs.readFileSync('src/server/stub/recipes.json', 'utf-8');
  //response.setHeader('Content-Type', 'application/json');
  response.json(file);
});
/* istanbul ignore next */
const port = process.env.PORT || 3200;
app.listen(port, function() {
  console.log(`Application listening on port ${port}`);
});

module.exports = app;
