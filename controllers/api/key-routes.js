const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ apiKey: process.env.PEXELS_API_KEY });
});

module.exports = router;
