var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/evening_batch_MongoDB');

var register =  mongoose.Schema({
  firstname : String,
  lastname : String,
  email : String,
  password : String
});


module.exports = mongoose.model("register",register);

// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
