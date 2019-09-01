'use strict';
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const rp = require('request-promise');
const bodyParser = require('body-parser')
const api = require('./routes/api');
const passport = require('./auth');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('src/dist/'));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'openid'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/profile', (req, res) => {
  res.send({ isAuthenticated: req.isAuthenticated(), user: req.user });
})
app.use('/api', api);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || 3200;
app.listen(port, function () {
  console.log(`Application listening on port ${port}`);
});

module.exports = app;
