const db = require("../models");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');
const serviceRequest = require('../models/servicerequest');

// Defining methods for the bookController
// module.exports = {
//   create: function(req, res) {
//     console.log('server side service request controller')
//     console.log(req.body)
//     serviceRequest.create(req.body)
//       .then(dbServiceRequest => res.json(dbServiceRequest))
//       .catch(err => res.status(422).json(err));
//   },
//   findUserreq :function(req, res){
//     serviceRequest.findById(req.params.id)
//       // .populate("service")
//       .then(dbServiceRequest => res.json(dbServiceRequest))
//       .catch(err => res.status(422).json(err))
//   }
// }

  const create =async(req, res)=> {
    console.log('server side service request controller')
    console.log(req.body)
    db.ServiceRequest.create(req.body)
      .then(dbServiceRequest => res.json(dbServiceRequest))
      .catch(err => res.status(422).json(err));
  }
 const  findUserreq =async(req, res)=>{
   console.log('find log')
    db.ServiceRequest.findById(req.params.id)
      // .populate("service")
      .then(dbServiceRequest => res.json(dbServiceRequest))
      .catch(err => res.status(422).json(err))
  }
  const findAll = async (req, res, next) => {
      console.log("In find All..."+ req.query)
      db.ServiceRequest.find(req.query)
        // .populate("service")
        .then(dbServiceRequest=> res.json(dbServiceRequest))
        .catch(err => res.status(422).json(err))
    }
 
exports.create = create;
exports.findUserreq = findUserreq;
exports.findAll = findAll;
