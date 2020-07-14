const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/handyman')

const serviceSeed = [
  { 
    name: 'landscaping' 
  },
  { 
    name: 'Painting' 
  },
  { 
    name: 'Appliance install/Repair' 
  },
  {
    name: 'Heating & Cooling'
  },
  {
    name: 'Junk removal'
  },
  {
    name: 'Electrical'
  },
  {
    name: 'carpet cleaning'
  },
  {
    name: 'duct cleaning'
  },
  {
    name: 'Gas name'
  },
  {
    name: 'lawn care'
  },
  {
    name: 'deck & fences'
  },
  {
    name: 'Pest control'
  },
  {
    name: 'Moving & Delivery'
  },
  {
    name: 'Garage door repair'
  },
  {
    name: 'patio'
  },
  {
    name: 'Plumber'
  },
  {
    name: 'Flooring & Tiling'
  }
]

db.Service.remove({})
  .then(() => db.Service.collection.insertMany(serviceSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
