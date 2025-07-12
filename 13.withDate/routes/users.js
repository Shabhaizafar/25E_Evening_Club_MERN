var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/withDate');

var register =  mongoose.Schema({
  firstname : String,
  joining_date : {
    type : Date,
    default : Date.now()
  }
});


module.exports = mongoose.model("register",register);
