const router = require("express").Router();
const serviceorderController = require("../../controllers/serviceorderController");

console.log('server side api')

  
router.post('/serviceorder', serviceorderController.create);



module.exports = router;