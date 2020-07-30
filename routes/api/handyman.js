const router = require("express").Router();
const handymanController = require("../../controllers/handymanController");

console.log('handyman server side api')

//get all handymen route
router.get('/',handymanController.findAll)

//new handyman signup route
router.post('/signup', handymanController.signup);

//handyman login route
router.post('/login', handymanController.login);

//get handymanbyid route
router.get('/:id',handymanController.findHandyManById);

// router.get('/:id', handymanController.findHandyManUsingById);

module.exports = router;