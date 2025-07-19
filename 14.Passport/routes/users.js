const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost:27017/passportauthenticate');

// Define schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  sdata: String
});

// Plugin passport-local-mongoose to handle hashing and salting passwords, and add username/password fields
userSchema.plugin(passportLocalMongoose);

// Export model
module.exports = mongoose.model('userModel', userSchema);
