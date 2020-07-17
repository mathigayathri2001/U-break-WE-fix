const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceOrderSchema = new Schema({
  description: { type: String,unique:true,required: true} ,
  userid: { type: Schema.Types.ObjectId, ref: 'user' },
  handyid:{ type: Schema.Types.ObjectId, ref: 'handyman' },
  username:{type: String},
  useremail:{type: String}
});

const Serviceorder= mongoose.model("ServiceOrder", serviceOrderSchema);

module.exports = Serviceorder;

