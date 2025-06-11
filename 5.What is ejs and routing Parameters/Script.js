// Now we can Use EJS : 
// steps : 
// 1. install ejs
    // npm install ejs
// 2. folder Setup 
    //  views
// 3. Create ejs file with .ejs extension 

// 4. setup code :
// app.set('view engine','ejs');
// 5. render ejs file : 
    // note : cann't write with extension
const express = require('express');
const app = express();

app.set('view engine','ejs');

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

// remaining  :username with ejs 