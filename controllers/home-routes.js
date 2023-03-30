const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment, Picture } = require("../models");

// sets up a route to handle GET requests to the root URL
router.get("/", (req, res) => {
  Blog.findAll({
    attributes: ["id", "title", "content", "city_location", "created_at"],

    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },

      {
        model: User,
        attributes: ["username"],
      },
      { model: Picture}
    ],
  })
    .then((dbBlogData) => {
      // returned data is then serialized and passed to the homepage Handlebars template to render the posts on the page
      const blogPosts = dbBlogData.map((blog) => blog.get({ plain: true }));

      res.render("homepage", {
        blogPosts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// for displaying a single post, the route takes the post id as a parameter and uses the findOne() method to retrieve the post from the database
router.get("/blog/:id", (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "city_location", "created_at"],

    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },

      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Picture

      }
    ],
  })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      //   serialize data and rendered to the single-post template along with the loggedIn variable.
      const post = dbBlogData.get({ plain: true });

      res.render("single-blog", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/blogs/location/:city_location", (req, res) => {
  Blog.findAll({
    where: {
      city_location: req.params.city_location,
    },
    attributes: ["id", "title", "content", "city_location", "created_at"],

    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "created_at"],
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
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbBlogData.map((blog) => blog.get({ plain: true }));

      res.render("displaysearch", {
        post,
        loggedIn: req.session.loggedIn,
      });
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

router.get("/sign-up", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  } else {
    res.render("sign-up");
  }
});

module.exports = router;
