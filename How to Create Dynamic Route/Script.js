const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Home Page");
});

// Anothers Routes 
app.get('/about',function(req,res){
    res.send("Your About Page");
});

app.get('/profile',function(req,res){
    res.send("Your Profile Page");
});


app.get('/profile/:username',function(req,res){
    res.send(`Your Profile Page : ${req.params.username}`);
});

app.listen(3000);