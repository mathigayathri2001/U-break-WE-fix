const db = require("../models");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const Handyman = require('../models/handyman');


// const findAll = async (req, res, next) => {
//   console.log("In find All..."+ req.query)
//   db.Handyman.find(req.query)
//     // .populate("service")
//     .then(dbHandyman => res.json(dbHandyman))
//     .catch(err => res.status(422).json(err))
// }
// const findHandyManById = async (req, res, next) => {
//   db.Handyman.findById(req.params.id)
//     // .populate("service")
//     .then(dbHandyman => res.json(dbHandyman))
//     .catch(err => res.status(422).json(err))
// }

const findAll = async (req, res, next) => {
  console.log('finda all')
  var params = Object.assign({}, req.query);
  delete req.query.service;

  let foundloc;
  try {
    //console.log(req.query.service);
  foundloc = await Handyman.find(req.query)
  } catch(err) {
    const error = new HttpError(
      'Could not find, please try again later.',
      422
    )
    return next(error)
  }

  console.log(foundloc.length);
  let i;
  var loc_id = [];
  for(i=0;i<foundloc.length;i++) {
      loc_id.push(foundloc[i]._id);
      console.log(loc_id[i]);
  }
  
  const array = params.service;
  
  var query = {};
  query.$or = [];
  array.forEach(function (item) {
     query.$or.push({"service":item});
  });
  console.log(query);
  try {
  found  = await Handyman.find(query)
  } catch(err) {
    const error = new HttpError(
      'Could not find, please try again later.',
      422
    )
    return next(error)
  }
  var retobj = [];

  //console.log(loc_id);
  console.log(found.length);
  let j;

  for(j=0;j<found.length;j++) {
    for(i=0;i<foundloc.length;i++) {
      if(loc_id[i].equals(found[j]._id)) {
        retobj.push(found[j]);
        console.log("match found!!");
     }
    }
  } 
  res.json(retobj);
}

const findHandyManById = async (req, res, next) => {
  console.log('finda HandyMan by ID')
  console.log(req.params.id);
  try {
  let found = await Handyman.findById(req.params.id)
  } catch(err) {
    const error = new HttpError(
      'Could not findById, please try again later.',
      422
    )
    return next(error)
  }
  let query = {$or:[{"service": "Electrical"}, {"service":"duct cleaning"}]};
  console.log(query);
  try {
  found  = await Handyman.find(query)
  } catch(err) {
    const error = new HttpError(
      'Could not find, please try again later.',
      422
    )
    return next(error)
  }
  res.json(found)
}

const signup = async (req, res, next)  => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    )
  }


const {name, email, password, phoneNumber, location,service} = req.body;

let existingHandyman;
try {
  existingHandyman = await Handyman.findOne({email:email})
} catch(err) {
  const error = new HttpError(
    'Signing up failed, please try again later.',
    500
  )
  return next(error)
}

let hashedPassword;
try{
  hashedPassword = await bcrypt.hash(password, 12)
} catch(err){
  const error = new HttpError(
    'Could not create handyman, please try again', 
    500
  )
  return next(error)
}

const createdHandyman = new Handyman({
  name, 
  email, 
  password:hashedPassword,
  phoneNumber,
  location,
  service
})

try{
  await createdHandyman.save();
} catch (err){
  const error = new HttpError(
    'Signing up failed, please try again later',
    500
  )
  return next(error)
}

let token;
try {
  token = jwt.sign(
    {handymanId: createdHandyman.id, email: createdHandyman.email},
    'supersecret_dont_share',
    {expiresIn: '1h'}
  )
} catch (err) {
  const error = new HttpError(
    'Signing up failed, please try again later.',
    500
  )
  return next(error)
}
  res
     .status(201)
     .json({ handymanId: createdHandyman.id, email: createdHandyman.email, token:token})
}

const login = async (req, res, next) => {
  const { email, password } = req.body
  
  let existingHandyman;

  try {
    existingHandyman = await Handyman.findOne ({ email: email})
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    )
    return next (error);
  }

  if(!existingHandyman){
    const error = new HttpError(
      'Invalid handyman, could not log you in.',
      401
    )
    return next(error)
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingHandyman.password)
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials and try again.',
      500
    )
    return next(error)
  }
  if (!isValidPassword){
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    )
    return next(error)
  }

  let token;
  try{
    token = jwt.sign(
      { handymanId: existingHandyman.id, email:existingHandyman.email},
      'supersecret_dont_share',
      { expiresIn: '1h'}
    );
  } catch(err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    )
    return next(error);
  }
  res.json({
    handymanId: existingHandyman.id,
    email: existingHandyman.email,
    token:token
  })
}
// const findHandyManUsingById = async (req, res, next) => {
//   let found;
//   try {
//   found = await Handyman.findById(req.params.id)
//   } catch(err) {
//     const error = new HttpError(
//       'Could not find UserById, please try again later.',
//       422
//     )
//     return next(error)
//   }
//   res.json(found)
// }

exports.signup = signup;
exports.login = login;
exports.findAll = findAll;
exports.findHandyManById = findHandyManById;
// exports.findHandyManUsingById = findHandyManUsingById;