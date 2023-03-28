const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// defines route for the HTTP GET request at the root URL path
router.get("/", (req, res) => {
    // makes a database query using the Comment model's findAll() method to retrieve all comment data from the database
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// defines a POST route
router.post("/", withAuth, (req, res) => {
    // creates a new comment in the database
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
    })
        // respond with the created comment in JSON format
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// defines the DELETE route
router.delete("/:id", withAuth, (req, res) => {
    // deletes the comment with the ID specified in the request parameters
    Comment.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbCommentData) => {
            if (!dbCommentData) {
                res.status(404).json({ message: "There is no comment found with this ID." });
                return;
            }
            res.json(dbCommentData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
