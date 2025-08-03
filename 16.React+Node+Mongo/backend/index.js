// express cors 
const express = require('express');
const cors = require('cors');
const userSchema = require("./models/Login");

const app = express();

app.use(cors());
app.use(express.json());


app.get('/firstroute',function(req,res){
    res.json({firstname : "Welcome to Backend !!"});
});

// 
app.post('/api/form',async (req, res) => {
  const { name, email } = req.body;
  await userSchema.create({
    firstname : name,
    email : email
  });
  // Save to DB or process data here
  res.status(200).json({ message: 'Data received successfully' });
});


app.listen(5000,()=>{
    console.log(`Server is Running Port 5000`);
});