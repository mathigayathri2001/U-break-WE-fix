const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");
// Matches with "/api/books"
router.route("/")
  .get(serviceController.findAll)
  .post(serviceController.create);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);
module.exports = router;