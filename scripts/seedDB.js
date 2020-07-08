const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/handy"
);

const serviceSeed = [
  
    {
    id: 1,
    name: "Appliance Installation & Repair"
    },
    {
    id: 2,
    name: "Minor Plumbing Leaks"
    },
    {
    id: 3,
    name: "Electrical"
    },
    {
    id: 4,
    name: "Carpentry & Trim"
    },
    {
    id: 5,
    name: "Water Damage Restoration"
    },
    {
    id: 6,
    name: "Drywall Installation & Repair"
    },
    {
    id: 7,
    name: "Professional Painting"
    },
    {
    id: 8,
    name: "Framing"
    },
    {
    id: 9,
    name: "Door Installation & Repair"
    },
    {
    id: 10,
    name: "Attic Insulation"
    },
    {
    id: 11,
    name: "Cabinet Installation $ Repair"
    },
    {
    id: 12,
    name: "TV Mounting"
    },
    {
    id: 13,
    name: "Caulking"
    },
    {
    id: 14,
    name: "Toilet Repair & Installation"
    },
    {
    id: 15,
    name: "Tile Installation & Repair"
    },
    {
    id: 16,
    name: "Cleaning Services"
    },
    {
    id: 17,
    name: "Lawn Work & Yard Cleanup"
    }
    
];

db.Service
   .remove({})
  .then(() => db.Service.collection.insertMany(serviceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
