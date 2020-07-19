const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceRequestSchema = new Schema({
  uid: { type: String},
  hid: { type: String},
  phoneNumber: {
    type: String,
    required: true,
    max: 10
  },
  location: { type: String },
  service:{ type:String },
  description: { type: String,unique:String},
  status : {type : String, default: 'Awaiting Approval'},
});

const ServiceRequest= mongoose.model("ServiceRequest", serviceRequestSchema);

module.exports = ServiceRequest;