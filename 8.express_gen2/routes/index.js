var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/profile', function(req, res, next) {
  res.render('profile');
});

module.exports = router;
