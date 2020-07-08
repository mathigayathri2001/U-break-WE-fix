const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
 
  name: { type: String, required: true },
  email: { type: String, required: true ,trim:true, unique:true},
  password: { 
     type: String,
     required: true,
     validate: [({ length }) => length >= 6, 'Password should be longer.']},
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
