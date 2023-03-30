const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment, Picture } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Blog.findAll({
    where: {
      user_id: req.session.user_id,
    },

    attributes: ["id", "title", "content", "city_location", "created_at"],

    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "blog_id", "created_at"],
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
      // returned data is serialized and passed to the dashboard Handlebars template, along with a loggedIn flag set to true
      const blogPosts = dbBlogData.map((blog) => blog.get({ plain: true }));
      res.render("dashboard", { blogPosts, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// sets up a GET route for the path "/edit/:id" of the app's server
router.get("/edit/:id", withAuth, (req, res) => {
  Blog.findByPk(req.params.id, {
    attributes: ["id", "title", "content", "city_location", "created_at"],

    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "blog_id", "created_at"],
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
        model: Picture,
      },
    ],
  })
    .then((dbBlogData) => {
      if (dbBlogData) {
        const post = dbBlogData.get({ plain: true });

        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
