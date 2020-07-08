const db = require("../models");
// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Handyman.find(req.query)
      .populate("service")
      .then(dbHandyman => res.json(dbHandyman))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Handyman.create(req.body)
      .then(dbHandyman => res.json(dbHandyman))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => dbBook.remove())
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // }
};