const router = require("express").Router();
const userController = require("../../controllers/userController");

//get all users route
router.get('/',userController.findAll);

//get a user by id route
router.get('/:id', userController.findUserById);

//new user sign up route
router.post('/signup', userController.signup);

//existing user login route
router.post('/login', userController.login);

module.exports = router;