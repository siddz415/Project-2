const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const blogRoutes = require("./blog-routes.js");
const commentRoutes = require("./comment-routes.js");
const keyRoutes = require("./key-routes.js");
const imageRoutes = require("./image-routes");

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/keys", keyRoutes);
router.use("/pic", imageRoutes);

module.exports = router;
