var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
var fs = require('fs');
var path = require('path');
// set up multer for storing uploaded files
var multer = require('multer');
// load the mongoose model for Image
//var imgModel = require('./imagemodel');
const mongoose = require("mongoose");
require('dotenv/config');
const image = require('./imagemodel');
const { ImATeapot } = require('http-errors');



/* GET imagePage page. */
//router.get('/', function (req, res, next) {
//res.render('viewImage', { title: 'images' });
//});

router.get('/', (req, res) => {
  image.findOne({}, (err, item) => {
    console.log(item);
    if (err) {
      console.log(err);
    }
    else {
      res.send({ imageData: item.any.buffer.toString('base64') });
    }
  });
});

router.get('/feed', (req, res) => {
  //image.find({}, { "any": 1, _id: 0 })
  image.find({}, function (err, imageDocuments) {
    if (err) {
      console.log(err);
      res.send(500);
      return;
    }

    const imageBuffersAsString = imageDocuments.map((imageDocument) => {
      return imageDocument.any.buffer.toString('base64');
    });

    res.send({
      images: imageBuffersAsString
    });
  });
}

);

module.exports = router;