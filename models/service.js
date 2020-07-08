const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    id: {
        type:Number 
        
      },
      name: {
        type: String
        
      },
  
});

const Service= mongoose.model("Service", serviceSchema);

module.exports = Service;