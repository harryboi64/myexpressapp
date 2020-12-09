var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'Post' });
});

module.exports = router;