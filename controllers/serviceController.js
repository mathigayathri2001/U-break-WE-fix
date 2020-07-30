const db = require("../models");
// Defining methods for the bookController
module.exports = {
  //get all services supported by this application from the services
  //collection in database
  findAll: function(req, res) {
    db.Service.find(req.query)
    //   .populate("service")
      .then(dbService => res.json(dbService))
      .catch(err => res.status(422).json(err));
  },
  
  //create a new service entry in the service collection
  create: function(req, res) {
    db.Service.create(req.body)
      .then(dbService => res.json(dbService))
      .catch(err => res.status(422).json(err));
  },
};