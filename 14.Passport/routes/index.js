var express = require('express');
var router = express.Router();
var userModel = require('./users');
var passport = require('passport');

const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));



/* GET home page. */
router.get('/', function (req, res) {
	res.render('index');
});


// Register : 
router.post('/register', function (req, res) {
	var userdata = new userModel({
		username: req.body.username,
		sdata: req.body.sdata
	});

	userModel.register(userdata, req.body.password).then(function (registeruser) {
		passport.authenticate("local")(req, res, function () {
			res.redirect('/profile');
		})
	})
});


router.get('/profile',isloggedIn, function (req, res) {
	res.render('profile');
});


router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
  })
  res.redirect('/');
});



router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}),function(req,res){});

function isloggedIn(req, res, next) {
  if (req.isAuthenticated()) {
	  console.log("Login Successfully !!");
	  return next();
	}
	console.log("Login First !!");
  res.redirect('/');
}

module.exports = router;
