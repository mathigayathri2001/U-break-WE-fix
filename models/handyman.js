const mongoose = require('mongoose')
const Schema = mongoose.Schema

const handymanSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: {
    type: String,
    required: true,
    validate: [({ length }) => length >= 6, 'Password should be longer.']
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    max: 10
  },
  location: { type: String, required: true, trim: true },
  service:[{type:String}]
})

const Handyman = mongoose.model('Handyman', handymanSchema)

module.exports = Handyman
