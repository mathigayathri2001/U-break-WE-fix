const router = require("express").Router();
const servicerequestController = require("../../controllers/serviceRequestController");
  
//route to add new service request to the database
router.post('/add', servicerequestController.create);

//get service request pertaining to a particular user
 router.get('/:id',servicerequestController.findUserreq);

 //enhanced find user route which handles both user and handyman related info extraction
 //from their respective ids
 router.get('/',servicerequestController.findAll);

 //route to update status field in the service request by handyman
 router.post('/update', servicerequestController.update);

module.exports = router;