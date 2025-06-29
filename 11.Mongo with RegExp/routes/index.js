var express = require('express');
var router = express.Router();
var student = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/create',async function(req, res) {
  const allstudent = [
  { firstname: "Amit", lastname: "Verma", age: 20, nicname: "Ami", Hobbies: ["Reading", "Cricket"] },
  { firstname: "Priya", lastname: "Sharma", age: 19, nicname: "P", Hobbies: ["Painting"] },
  { firstname: "Ravi", lastname: "Patel", age: 21, nicname: "Rav", Hobbies: ["Football", "Music"] },
  { firstname: "Neha", lastname: "Khan", age: 18, nicname: "Neh", Hobbies: ["Dancing"] },
  { firstname: "Sohail", lastname: "Ansari", age: 22, nicname: "Sohi", Hobbies: ["Gaming"] },
  { firstname: "Zoya", lastname: "Sheikh", age: 20, nicname: "Z", Hobbies: ["Blogging"] },
  { firstname: "Karan", lastname: "Singh", age: 23, nicname: "Kay", Hobbies: ["Driving"] },
  { firstname: "Isha", lastname: "Gupta", age: 19, nicname: "Ish", Hobbies: ["Cooking"] },
  { firstname: "Arjun", lastname: "Mehra", age: 20, nicname: "AJ", Hobbies: ["Running"] },
  { firstname: "Ritu", lastname: "Bajaj", age: 21, nicname: "Ritz", Hobbies: ["Yoga"] },
  { firstname: "Manav", lastname: "Thakur", age: 18, nicname: "Man", Hobbies: ["Chess"] },
  { firstname: "Sana", lastname: "Iqbal", age: 22, nicname: "San", Hobbies: ["Cycling"] },
  { firstname: "Dev", lastname: "Joshi", age: 20, nicname: "DJ", Hobbies: ["Singing"] },
  { firstname: "Alia", lastname: "Kapoor", age: 19, nicname: "Ali", Hobbies: ["Swimming"] },
  { firstname: "Rohan", lastname: "Malhotra", age: 21, nicname: "Ro", Hobbies: ["Photography"] },
  { firstname: "Tanya", lastname: "Desai", age: 20, nicname: "Tanu", Hobbies: ["Acting"] },
  { firstname: "Sameer", lastname: "Chopra", age: 23, nicname: "Sam", Hobbies: ["Traveling"] },
  { firstname: "Nikita", lastname: "Rawat", age: 20, nicname: "Niki", Hobbies: ["Writing"] },
  { firstname: "Yash", lastname: "Jain", age: 22, nicname: "Y", Hobbies: ["Tech"] },
  { firstname: "Megha", lastname: "Singhania", age: 19, nicname: "Meg", Hobbies: ["Makeup"] }
];
  var alls =  await student.insertMany(allstudent);
  // var alls =  await student.insertMany(
  //   [{firstname: "Raviraj", lastname: "Singhania", age: 19, nicname: "Raj", Hobbies: ["Gaming"] }
  // ,
  //   { firstname: "Ravindra", lastname: "Rawat", age: 20, nicname: "Jaddu", Hobbies: ["Cricket"] }
  // ]
  // );

  res.send(alls);
});

// retrive All Student 
router.get('/allstudent',async function(req, res) {
  var allstudents = await student.find();
  res.send(allstudents);
});


// router.get('/find',async function(req, res) {
//   // var allstudents = await student.find({firstname : "Ravi"});
//   // var finddata = new RegExp(search,mode);
//   // var finddata = new RegExp("ravi","i");

//   var finddata = new RegExp("^ravi$","i");

//   var allstudents = await student.find({firstname : finddata});
//   res.send(allstudents);
// });



router.get('/find29',async function(req, res) {
  // var d = new RegExp("ravi",'i');
  // var allstudents = await student.find({firstname : d});
  // var allstudents = await student.findOne({firstname : d});
  // var allstudents = await student.find();
  var d = new RegExp("cricket",'i');
  var allstudents = await student.findOne({Hobbies :  [d]});
  res.send(allstudents);
});

router.get('/delete',async function(req,res){
  var st = await student.findOneAndDelete({firstname : "Dev"});
  console.log(st);
  res.send("Check Console");
});

module.exports = router;
