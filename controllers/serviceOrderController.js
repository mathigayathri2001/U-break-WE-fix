const db = require("../models");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');
const serviceOrder = require('../models/serviceorder');

//const db = require("../models");
// Defining methods for the bookController
module.exports = {
  create: function(req, res) {
    console.log('sercer side controller')
    console.log(req.body)
    serviceOrder.create(req.body)
      .then(dbServiceOrder => res.json(dbServiceOrder))
      .catch(err => res.status(422).json(err));
  }};