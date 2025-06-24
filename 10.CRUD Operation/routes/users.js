var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mongodboperation");


var student =  mongoose.Schema({
    firstname : String,
    lastname : String,
    age : Number
});


module.exports = mongoose.model("student",student);
