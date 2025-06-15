const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.static("public"));

app.get('/',function(req,res){
    res.render('index');
});

app.get('/profile',function(req,res){
    res.render('profile',{fname : "Raj", lname : "Rj"});
});

app.get('/about',function(req,res){
    res.render('about');
});
app.listen(3000);