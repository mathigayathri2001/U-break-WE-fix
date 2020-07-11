const db = require("../models");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const Handyman = require('../models/handyman');
// // Defining methods for the bookController
// module.exports = {
//   findAll: function(req, res) {
//     db.Handyman.find(req.query)
//       // .populate("service")
//       .then(dbHandyman => res.json(dbHandyman))
//       .catch(err => res.status(422).json(err));
//   },
//   // findById: function(req, res) {
//   //   db.Book.findById(req.params.id)
//   //     .then(dbBook => res.json(dbBook))
//   //     .catch(err => res.status(422).json(err));
//   // },
//   create: function(req, res) {
//     db.Handyman.create(req.body)
//       .then(dbHandyman => res.json(dbHandyman))
//       .catch(err => res.status(422).json(err));
//   },
//   // update: function(req, res) {
//   //   db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
//   //     .then(dbBook => res.json(dbBook))
//   //     .catch(err => res.status(422).json(err));
//   // },
//   // remove: function(req, res) {
//   //   db.Book.findById(req.params.id)
//   //     .then(dbBook => dbBook.remove())
//   //     .then(dbBook => res.json(dbBook))
//   //     .catch(err => res.status(422).json(err));
//   // }
// };

const findAll = async (req, res, next) => {
  db.Handyman.find(req.query)
    // .populate("service")
    .then(dbHandyman => res.json(dbHandyman))
    .catch(err => res.status(422).json(err))
}

const signup = async (req, res, next)  => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    )
  }


const {name, email, password, phoneNumber, location} = req.body;

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
  location
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

exports.signup = signup;
exports.login = login;
exports.findAll = findAll;