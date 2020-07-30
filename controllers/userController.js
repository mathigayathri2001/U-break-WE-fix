const db = require("../models");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); // required for hashing password
const jwt = require('jsonwebtoken'); //required for authentication & authorization
const HttpError = require('../models/http-error'); //helper error module
const User = require('../models/user');

//gets user info from the database by id
const findUserById = async (req, res, next) => {
  let found;
  try {
  found = await User.findById(req.params.id)
  } catch(err) {
    const error = new HttpError(
      'Could not find UserById, please try again later.',
      422
    )
    return next(error)
  }
  res.json(found)
}

//get all users from the database
const findAll = async (req, res, next) => {
  db.User.find(req.query)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
}

/*
    signup function that handles :-
    1) user input validation
    2) generates jwt authentication token
*/
const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  //extract the user provided name,email and password from the request body
  const { name, email, password } = req.body;

  //check if user already exists in the database
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    );
    return next(error);
  }

  //initialize the bcrypt module with user provided password string and salt value.
  //the result is hashed password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      'Could not create user, please try again.',
      500
    );
    return next(error);
  }

  //store the user info along with hashed password into the database for this user
  const createdUser = new User({
    name,
    email,
    password: hashedPassword
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  //sign the token generated with a private key and validity setting
  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  //return the generated token along with userid created and user email back to caller
  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

/*
    login function that handles :-
    1) presence of user in the database 
    2) verifies hashed password and jwt authentication token generated during signup
*/
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  //check if user exists in the database,else return error
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Invalid user, could not log you in.',
      401
    );
    return next(error);
  }

  //compare user provided password against stored hash password in the database for this user
  //if mismatch return error
  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials and try again.',
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  //sign the token generated with a private key and validity setting for this session
  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  //return the verified token along with matched userid and user email back to caller
  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token
  });
};

//export functtions from this controller to be used by other modules
exports.signup = signup;
exports.login = login;
exports.findAll = findAll;
exports.findUserById = findUserById;
