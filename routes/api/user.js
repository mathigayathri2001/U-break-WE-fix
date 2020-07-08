const router = require("express").Router();
const userController = require("../../controllers/userController");
​
// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);
​
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);
​
module.exports = router;