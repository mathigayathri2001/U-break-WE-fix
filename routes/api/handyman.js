const router = require("express").Router();
const handymanController = require("../../controllers/handymanController");
// // Matches with "/api/books"
// router.route("/")
//   .get(handymanController.findAll)
//   .post(handymanController.create);
// // Matches with "/api/books/:id"
// // router
// //   .route("/:id")
// //   .get(bookController.findById)
// //   .put(bookController.update)
// //   .delete(bookController.remove);

router.get('/',handymanController.findAll)

router.post('/signup', handymanController.signup);

router.post('/login', handymanController.login);

router.get('/:id',handymanController.findHandyManById);

module.exports = router;