// express cors 
const express = require('express');
const cors = require('cors');
const userSchema = require("./models/Register");

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


app.post('/api/formlogin',async (req, res) => {
  const { name, email } = req.body;
  var user =  await userSchema.find({ name,email});
  
    res.json({ success: true, user });

  // Save to DB or process data here
  // res.status(200).json({ message: 'Data Get successfully' });
});



app.get("/profile/:email", async (req, res) => {
  const { email } = req.params;
  const user = await userSchema.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});



app.listen(5000,()=>{
    console.log(`Server is Running Port 5000`);
});