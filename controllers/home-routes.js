const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// sets up a route to handle GET requests to the root URL
router.get("/", (req, res) => {
  console.log("===============");
  Post.findAll({
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
        // returned data is then serialized and passed to the homepage Handlebars template to render the posts on the page
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// for displaying a single post, the route takes the post id as a parameter and uses the findOne() method to retrieve the post from the database
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      //   serialize data and rendered to the single-post template along with the loggedIn variable.
      const post = dbPostData.get({ plain: true });
      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// if the user is already logged in, they are redirected to the homepage but if not, the login template is rendered
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }

    res.render("login");
  });

module.exports = router;
