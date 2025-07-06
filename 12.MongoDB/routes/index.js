var express = require('express');
var router = express.Router();
var register = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/submit',async function (req,res) {
    var obj = req.body;
    var d = await register.find({email : obj.email});
    
    if(d.length){
        res.send("User Already Exist !!");    
    }else{
        await register.create({
        firstname : obj.firstname,
        lastname : obj.lastname,
        email : obj.email,
        password : obj.password
    });
    res.send("Registration Successfully Done !!");
    }
});

// router.get('/delete',async function(req,res){
//     var alldata = await register.findOneAndDelete("6868d7f9b54229a304dd7378");
//     res.send("Delete SuccessFully");
// });


router.get('/check',async function(req,res){
    var alldata = await register.find();
    res.send(alldata);
});

module.exports = router;
