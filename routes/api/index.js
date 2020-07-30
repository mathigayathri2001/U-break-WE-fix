const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const handymanRoutes = require("./handyman");
const serviceRoutes = require("./service");
const servicerequestRoutes = require("./servicerequest");

// all routes of user,handyman,service and servicerequest are imported here
router.use("/user", userRoutes);
router.use("/handyman", handymanRoutes);
router.use("/service", serviceRoutes);
router.use("/servicerequest", servicerequestRoutes);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
