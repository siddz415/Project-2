const router = require("express").Router();

<<<<<<< HEAD
const userRoutes = require("./user-routes.js");
const blogRoutes = require("./blog-routes.js");
const commentRoutes = require("./comment-routes.js");
const keyRoutes = require("./key-routes.js");
=======
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const imageRoutes = require("./image-routes");
>>>>>>> feature/sam

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
<<<<<<< HEAD
router.use("/keys", keyRoutes);
=======
router.use("/pic", imageRoutes);
>>>>>>> feature/sam

module.exports = router;
