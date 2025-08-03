const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/newroute");

const userSchema = mongoose.Schema({ 
    firstname : String, 
    email : String 
});


module.exports =  mongoose.model("userSchema",userSchema);