const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const handymanRoutes = require("./handyman");

// Book routes
router.use("/user", userRoutes);
router.use("/handyman", handymanRoutes);

// Google Routes
// router.use("/google", googleRoutes);
// router.use("/api/google", googleRoutes);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
