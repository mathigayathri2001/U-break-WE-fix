const db = require('../models')
const serviceRequest = require('../models/servicerequest')

const create = async (req, res) => {
  console.log(req.body)
  db.ServiceRequest.create(req.body)
    .then(dbServiceRequest => res.json(dbServiceRequest))
    .catch(err => res.status(422).json(err))
}
const findUserreq = async (req, res) => {
  db.ServiceRequest.findById(req.params.id)
    .then(dbServiceRequest => res.json(dbServiceRequest))
    .catch(err => res.status(422).json(err))
}
const findAll = async (req, res, next) => {
  var query;
  if(req.query.hid === undefined) {
      query = { uid: req.query.uid }
  } else if(req.query.uid === undefined) {
    query = { hid: req.query.hid }
}
  db.ServiceRequest.find(query)
    .then(dbServiceRequest => res.json(dbServiceRequest))
    .catch(err => res.status(422).json(err))
}

exports.create = create
exports.findUserreq = findUserreq
exports.findAll = findAll
