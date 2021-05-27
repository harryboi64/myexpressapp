var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Image page, move to own router file later
router.get('/viewImagePage', (req, res) => {
  res.render('viewImagePage');
});

router.get('/feed', (req, res) => {
  res.render('feed');
});

module.exports = router;
