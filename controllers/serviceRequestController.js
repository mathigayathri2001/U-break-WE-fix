const db = require("../models");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');
const serviceRequest = require('../models/servicerequest');

// Defining methods for the bookController
module.exports = {
  create: function(req, res) {
    console.log('server side service request controller')
    console.log(req.body)
    serviceRequest.create(req.body)
      .then(dbServiceRequest => res.json(dbServiceRequest))
      .catch(err => res.status(422).json(err));
  }};