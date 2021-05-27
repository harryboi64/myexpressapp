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
const imageModel = require('./imagemodel');
//const { ENAMETOOLONG } = require('constants');
//var Binary = require(‘mongoose’).Binary;
/* GET imagePage page. */
router.get('/', function (req, res, next) {
    res.render('imagePage', { title: 'images' });
});



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/harrybo/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + new Date().toISOString());
    },
});


const upload = multer({
    storage: storage,
});


router.post('/upload', upload.single('file'), async (req, res) => {

    const newBuffer = fs.readFileSync(req.file.path);
    console.log(newBuffer);
    const newImage = new imageModel({
        any: newBuffer,

    });
    //console.log(newImage);


    imageModel.create(newImage, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save


        };
        res.redirect('/imagePage')
    });






});
module.exports = router;