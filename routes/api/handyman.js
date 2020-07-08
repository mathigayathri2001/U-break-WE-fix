const router = require("express").Router();
const handymanController = require("../../controllers/handymanController");
​
// Matches with "/api/books"
router.route("/")
  .get(handymanController.findAll)
  .post(handymanController.create);
​
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);
​
module.exports = router;