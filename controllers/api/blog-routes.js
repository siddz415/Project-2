const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// sets up a route handler for a GET request to the root endpoint
router.get("/", (req, res) => {
  // find all posts and associated comments and users
  Blog.findAll({
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "blog_id", "user_id", "trip_budget", "ratings", "created_at"],
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
    // returns a JSON object containing the post data
    .then((dbBlogData) => res.json(dbBlogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates a route to handle GET requests
router.get("/:id", (req, res) => {
  // finds single post by ID
  Blog.findOne({
    where: {
      id: req.params.id,
    },
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
        res.status(404).json({ message: "No Blog found with this id" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get the city for search
router.get('/location/:city_location', (req, res) => {
  Blog.findAll({
    where: {
      city_location: req.params.city_location
    },
    attributes: [
      'id',
      'title',
      'content',
      'city_location',
      'trip_budget',
      'ratings',
      'created_at'
    ],

    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },

      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((dbBlogData) => res.json(dbBlogData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates a route to handle POST requests for new posts
router.post("/", withAuth, (req, res) => {
  Blog.create({
    title: req.body.title,
    content: req.body.content,
    city_location: req.body.city_location,
    user_id: req.session.user_id,
    ratings: req.body.ratings,
    trip_budget: req.body.trip_budget,
  })
    .then((dbBlogData) => {
      console.log('blog', dbBlogData);
      res.json(dbBlogData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates a route to handle PUT requests for updating existing posts
router.put("/:id", withAuth, (req, res) => {
  Blog.update(
    {
      title: req.body.title,
      content: req.body.content,
      city_location: req.body.city_location,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No Blog found with this id" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates a route to handle DELETE requests for existing posts
router.delete("/:id", withAuth, (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({ message: "No Blog found with this id" });
        return;
      }
      res.json(dbBlogData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
