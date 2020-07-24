const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/handyman')
const handymanSeed = [
  {
    name: "Thomas",
    email: "thomas@gmail.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "5698563256",
    location: "Kanata, Ottawa, ON, Canada",
    service: ["Gas Installation","Lawn care"],
  },
  {
    name: "William",
    email: "william@gmail.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "5698563212",
    location: "Toronto, ON, Canada",
    service: ["Duct cleaning","Lawn care","Deck & Fences"],     
  },
  {
    name: "Logan",
    email: "logan@gamil.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "5698256256",
    location: "Kanata, Ottawa, ON, Canada",
    service: ["Moving & Delivery","Lawn care"],     
  },
  {
    name: "Jakob",
    email: "jakob@gmail.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "5698563289",
    location: "Montreal, QC, Canada",
    service: ["Gas Installation","Lawn care"],   
  },
  {
    name: "Haydon",
    email: "haydon@gmail.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "5698514596",
    location: "Gatineau, QC, Canada",
    service: ["Patio","Lawn care"],
  },
  {
    name: "Alexander",
    email: "alexander@gmail.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "5368563896",
    location: "Gatineau, QC, Canada",
    service: ["Door & Wall Painting","Lawn care"],
  },
  {
    name: "Junior",
    email: "junior@gmail.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "6988563289",
    location: "Montreal, QC, Canada",
    service: ["Gas Installation","Heating & Cooling","Carpet cleaning","Lawn care"],   
  },
  {
    name: "Tamar",
    email: "tamar@gmail.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "5698569652",
    location: "Toronto, ON, Canada",
    service: ["Carpet cleaning","Lawn care","Deck & Fences"],     
  },
  {
    name: "Noah",
    email: "noah@gmail.com",
    password: "$2a$12$iYHguvgC9DHbC.h21Z1fqubKRjFlgxRgEhl2FKffjqn7nviknc7LW",
    phoneNumber: "6698569522",
    location: "Carleton Place, ON, Canada",
    service: ["Carpet cleaning","Lawn care","Deck & Fences"],     
  },
]

const serviceSeed = [
  { 
    name: 'Landscaping' 
  },
  { 
    name: 'Door & Wall Painting' 
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
    name: 'Electrical works'
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

