const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");
// Matches with "/api/service"
router.route("/")
  .get(serviceController.findAll)
  .post(serviceController.create);

module.exports = router;