var express = require('express');
var router = express.Router();

/* GET myprofile page. */
router.get('/', function(req, res, next) {
  res.render('myprofile', { title: 'Profile' });
});

module.exports = router;