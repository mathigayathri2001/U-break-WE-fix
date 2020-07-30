const db = require('../models')
const serviceRequest = require('../models/servicerequest')
const Handyman = require('../models/handyman');
const User = require('../models/user');

const HttpError = require('../models/http-error');

// adds a new service request to the service request collection in database
const create = async (req, res) => {
  console.log(req.body)
  db.ServiceRequest.create(req.body)
    .then(dbServiceRequest => res.json(dbServiceRequest))
    .catch(err => res.status(422).json(err))
}

//searches for a userid in the service request collection
const findUserreq = async (req, res) => {
  db.ServiceRequest.findById(req.params.id)
    .then(dbServiceRequest => res.json(dbServiceRequest))
    .catch(err => res.status(422).json(err))
}

//common function which handles extracting fields info for a 
//particular userid and handymanid.The extracted data is returned as a response
//to the caller
const findAll = async (req, res, next) => {
  var query;
  var flag = false; // uid = false,hid = true
  if(req.query.hid === undefined) {
      query = { uid: req.query.uid }
  } else if(req.query.uid === undefined) {
    query = { hid: req.query.hid }
    flag = true;
  }
  let found;
  try {
    found = await serviceRequest.find(query);

    if(found.length) {
    for(let i=0;i<found.length;i++) {
      if(flag === false) {
          let hid = found[i].hid;
          try {
            let hfound = await Handyman.findById(hid);
            //console.log(hfound);
            found[i].uid = hfound.name;
            found[i].hid = hfound.email;
            found[i].phoneNumber = hfound.phoneNumber;
          } catch(err) {
             const error = new HttpError(
               'Could not findById, please try again later.',
              422
            )
            return next(error)
          }
      } else {
        let uid = found[i].uid;
        try {
          let ufound = await User.findById(uid);
          //console.log(hfound);
          found[i].uid = ufound.name;
          found[i].hid = ufound.email;
        } catch(err) {
           const error = new HttpError(
             'Could not findById, please try again later.',
            422
          )
          return next(error)
        }
      }
    }
      //console.log(hid)
    }
    } catch(err) {
      const error = new HttpError(
        'Could not find, please try again later.',
        422
      )
      return next(error)
    }
    res.json(found)
}

//handles updating status field within a service request
const update = async (req, res, next) => {
  console.log('service status update')
  const { uid, reqstatus } = req.body;
  console.log(uid)
  console.log(reqstatus)
  db.ServiceRequest.findById(uid)
    .then(SericeRequest=>{
      SericeRequest.status=reqstatus;
      SericeRequest.save()
      .then(() => res.json('Service Request Upated'))
      .catch(err => res.status(400).json('Error: ' + err))
    })  
  }
exports.create = create
exports.findUserreq = findUserreq
exports.findAll = findAll
exports.update = update