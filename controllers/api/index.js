const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const blogRoutes = require("./blog-routes.js");
const commentRoutes = require("./comment-routes.js");
const keyRoutes = require("./key-routes.js");

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/keys", keyRoutes);

module.exports = router;
