var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mongodboperation");


var student =  mongoose.Schema({
    firstname : String,
    lastname : String,
    age : Number
});


module.exports = mongoose.Model("student",student);

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
