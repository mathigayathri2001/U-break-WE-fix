const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/handyman"
);

const serviceSeed = [
    { rsn: 1,
      name: "landscaping"},
    { rsn: 2,
      name: "Painting"},
    {rsn: 3,
      name: "Appliance install/Repair"},
    {rsn: 4,
      name: "Heating & Cooling"},
    {rsn: 5,
      name: "Junk removal"},
    {rsn: 6,
      name: "Electrical"},
    { rsn: 7,
      name: "carpet cleaning"},
    {rsn: 8,
      name: "duct cleaning"},
    {rsn: 9,
      name: "Gas name"},
    {rsn: 10,
      name: "lawn care"},
    {rsn: 11,
      name: "deck & fences"},
    {rsn: 12,
      name: "Pest control"},
    {rsn: 13,
      name:  "Moving & Delivery"},
    {rsn: 14,
      name: "Garage door repair"},
    {rsn: 15,
      name: "patio"},
    {rsn: 16,
      name: "Plumber"},
    {rsn: 17,
      name: "Flooring & Tiling"}
    
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
