var express = require('express');
var router = express.Router();
var student = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/create',async function(req, res) {
  var s1 = await student.create({
    firstname :"Rajesh",
    lastname :"Sharma",
    age: 20
  });
  res.send(s1);
});


router.get('/allstudent',async function(req, res) {
  var allstudents = await student.find();
  res.send(allstudents);
});



module.exports = router;
