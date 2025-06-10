const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Your First Rout Created !! H");
});

// Anothers Routes 
app.get('/about',function(req,res){
    res.send("Your About Page");
});

app.get('/profile',function(req,res){
    res.send("Your Profile Page");
});

app.listen(3000);