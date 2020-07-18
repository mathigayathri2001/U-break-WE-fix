const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceRequestSchema = new Schema({
  uname: { type: String},
  uemail: { type: String},
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    max: 10
  },
  location: { type: String },
  service:{ type:String },
  description: { type: String},
  status : {type : String, default: 'Awaiting Approval'},
});

const ServiceRequest= mongoose.model("ServiceRequest", serviceRequestSchema);

module.exports = ServiceRequest;