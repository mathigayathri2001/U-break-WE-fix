const jwt = require('jsonwebtoken'); //required for token validation

const HttpError = require('../models/http-error'); //helper error module

//Module that handles authorization of jwt token against service request creation by the user
//It basically verifies that the user provided token matches with the one in server and allows or declines
//access to create service request
module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!');
    }
    const decodedToken = jwt.verify(token, 'supersecret_dont_share');
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
};
