// step 1 : install express js 
//1. terminal : npm i express      or   // terminal : npm install express

// step 2: server code  

const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Your First Rout Created !! H");
});

app.listen(3000);
// node Script.js

// step 3 : 
// go to url : 
// 1. localhost:3000 OR  localhost:3000/   OR  127.0.0.1:3000  OR http://127.0.0.1:3000/

// localhost == 127.0.0.1



// Note : If you are change any Data or Route then you need to restart Server 


// ONE MORE SOLUTION :  for auto restart 
// install nodemon   
// How to install : npm i/install nodemon -g           (-g Globally)




// How to Terminate  Server  :  ctrl + c


// Then Start Again Server : 
// nodemon Script.js