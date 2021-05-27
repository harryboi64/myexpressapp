const router = require("express").Router();




// dashboard route
router.get("/dashboard", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "My dashboard",
      content: "dashboard content",
      user: req.user,
    },
  });
});

module.exports = router;