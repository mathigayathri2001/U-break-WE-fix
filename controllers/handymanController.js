const db = require("../models");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');  // required for hashing password
const jwt = require('jsonwebtoken'); //required for authentication & authorization
const HttpError = require('../models/http-error'); //helper error module
const Handyman = require('../models/handyman');

//get all handymen from the database by matching the user provided services with 
//location
const findAll = async (req, res, next) => {
  var params = Object.assign({}, req.query);
  delete req.query.service;

  let foundloc;
  try {
    //console.log(req.query.service);
    //check if handyman exists for this location,esle return error
  foundloc = await Handyman.find(req.query)
  } catch(err) {
    const error = new HttpError(
      'Could not find, please try again later.',
      422
    )
    return next(error)
  }

  //for this location,check if the user desired service is provided by this handyman
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

//gets handyman info from the database by id
const findHandyManById = async (req, res, next) => {
  let found;
  //console.log(req.params.id);
  try {
  found = await Handyman.findById(req.params.id)
  } catch(err) {
    const error = new HttpError(
      'Could not findById, please try again later.',
      422
    )
    return next(error)
  }
  //console.log(found)
  res.json(found)
}

/*
    signup function that handles :-
    1) handyman input validation
    2) generates jwt authentication token
*/
const signup = async (req, res, next)  => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    )
  }

  //extract the user provided name,email,password,phoneNumber,location and service from the request body
const {name, email, password, phoneNumber, location,service} = req.body;

//check if handyman already exists in the database
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

//initialize the bcrypt module with user provided password string and salt value.
  //the result is hashed password
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

//store the handyman info along with hashed password into the database for this user
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

//sign the token generated with a private key and validity setting
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
//return the generated token along with handymanid created and handyman email back to caller
  res
     .status(201)
     .json({ handymanId: createdHandyman.id, email: createdHandyman.email, token:token})
}

/*
    login function that handles :-
    1) presence of handyman in the database 
    2) verifies hashed password and jwt authentication token generated during signup
*/
const login = async (req, res, next) => {
  const { email, password } = req.body
  
  let existingHandyman;

  //check if handyman exists in the database,else return error
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

  //compare user provided password against stored hash password in the database for this handyman
  //if mismatch return error
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

  //sign the token generated with a private key and validity setting for this session
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
  //return the verified token along with matched handymanid and handyman email back to caller
  res.json({
    handymanId: existingHandyman.id,
    email: existingHandyman.email,
    token:token
  })
}

//export functtions from this controller to be used by other modules
exports.signup = signup;
exports.login = login;
exports.findAll = findAll;
exports.findHandyManById = findHandyManById;