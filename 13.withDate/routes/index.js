var express = require('express');
var router = express.Router();
var register = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('page2');
});
router.get('/register', function(req, res) {
  res.render('index');
});
router.post('/details',async function(req, res) {
    var s = await register.find({firstname : req.body.firstname});
    var d = new Date();
    // console.log();
  res.render('details',{d : d.getDate() - s[0].joining_date.getDate(),firstname : s[0].firstname});
//   res.render('details');
});

router.post('/submit', async function(req, res) {
    var d = req.body;
    var s = await register.create({
        firstname : d.firstname,
        joining_date : d.joining_date
    });
  res.send("Submitted");
});
router.get('/check',async function(req,res){
    var alldata = await register.find();
    res.send(alldata);
});


module.exports = router;
