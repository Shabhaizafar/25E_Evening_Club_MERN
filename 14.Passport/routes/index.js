var express = require('express');
var router = express.Router();
var userModel = require('./users');
var  passport = require('passport');

const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


// Register : 
router.post('/register',function(req,res){
    var userdata = new userModel({
					username : req.body.username,
					sdata : req.body.sdata
			});

    userModel.register(userdata,req.body.password).then(function (registeruser){
					passport.authenticate("local")(req,res, function () {
							res.redirect('/profile');
					})
			}) 	
});


router.get('/profile',function(req,res){
  res.send("Profile File");
});


module.exports = router;
