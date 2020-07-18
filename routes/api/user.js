const router = require("express").Router();
const userController = require("../../controllers/userController");
// // Matches with "/api/books"
// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create);
// // Matches with "/api/books/:id"
// // router
// //   .route("/:id")
// //   .get(bookController.findById)
// //   .put(bookController.update)
// //   .delete(bookController.remove);

router.get('/',userController.findAll);

router.get('/:id', userController.findUserById);

router.post('/signup', userController.signup);

router.post('/login', userController.login);

module.exports = router;