var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mongodboperation2");


var student =  mongoose.Schema({
    firstname : String,
    lastname : String,
    age : Number,
    nicname : String,
    Hobbies : {
        type : Array,
        default : []
    },
    addmission_date : {
        type : Date,
        default : Date.now()
    }
});


module.exports = mongoose.model("student",student);
