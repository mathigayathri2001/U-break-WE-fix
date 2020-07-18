const router = require("express").Router();
const servicerequestController = require("../../controllers/serviceRequestController");

console.log('server side api')
  
router.post('/add', servicerequestController.create);

module.exports = router;