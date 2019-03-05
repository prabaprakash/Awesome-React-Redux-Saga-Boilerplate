var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('welcome to api');
});
router.get('/ping', function(req, res, next) {
  res.send('api route ping');
});

module.exports = router;