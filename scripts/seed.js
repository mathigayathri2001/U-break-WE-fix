const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/handyman')
const handymanSeed = [
    {
      name: "Corbett Yoxen",
      email: "cyoxen0@phpbb.com",
      password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
      phoneNumber: "5698563256",
      location: "Kanata, Ottawa, ON, Canada",
      service: ["Gas Installation","Lawn care"],
    },
    {
      name: "Ely Celloni",
      email: "ecelloni1@wunderground.com",
      password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
      phoneNumber: "5698563212",
      location: "Toronto, ON, Canada",
      service: ["Duct cleaning","Lawn care","Deck & Fences"],     
    },
    {
      name: "Enriqueta Lodewick",
      email: "elodewick2@bloomberg.com",
      password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
      phoneNumber: "5698256256",
      location: "Kanata, Ottawa, ON, Canada",
      service: ["Moving & Delivery","Lawn care"],     
    },
    {
      name: "Esta Ebbles",
      email: "eebbles3@shop-pro.jp",
      password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
      phoneNumber: "5698563289",
      location: "Montreal, QC, Canada",
      service: ["Gas Installation","Lawn care"],   
    },
    {
      name: "Haydon Malden",
      email: "hmalden4@mozilla.org",
      password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
      phoneNumber: "5698563896",
      location: "Gatineau, QC, Canada",
      service: ["Patio","Lawn care"],
    }
]

const serviceSeed = [
  { 
    name: 'Landscaping' 
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
    name: 'Carpet cleaning'
  },
  {
    name: 'Duct cleaning'
  },
  {
    name: 'Gas Installation'
  },
  {
    name: 'Lawn care'
  },
  {
    name: 'Deck & Fences'
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
    name: 'Patio'
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
   return db.Handyman.remove({})
  })
  
  .then(() => db.Handyman.collection.insertMany(handymanSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

