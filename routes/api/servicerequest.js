const router = require("express").Router();
const servicerequestController = require("../../controllers/serviceRequestController");
  
router.post('/add', servicerequestController.create);
 router.get('/:id',servicerequestController.findUserreq);
 router.get('/',servicerequestController.findAll);
 router.post('/update', servicerequestController.update);

module.exports = router;