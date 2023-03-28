const router = require("express").Router();

// imports three sets of routes from other files
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

// routing paths are set
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
