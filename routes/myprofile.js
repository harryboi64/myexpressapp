var express = require('express');
var router = express.Router();

//GET myprofile pug page
//router.get('/', function(req, res, next) {
  //res.render('myprofile', { title: 'Profile' });
//});



// dashboard route
router.get("/api/myprofile", (req, res) => {
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


