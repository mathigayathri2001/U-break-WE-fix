const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  rsn:{type:Number,required:true,unique:true},
  name: { type: String, required: true }
 
});

const Service= mongoose.model("Service", serviceSchema);

module.exports = Service;

