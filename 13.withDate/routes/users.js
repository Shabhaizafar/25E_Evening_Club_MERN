var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/withurl');

var myurl =  mongoose.Schema({
  firstname : String,
  url : String
});


module.exports = mongoose.model("myurl",myurl);
